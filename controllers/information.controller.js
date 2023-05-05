const { request, response } = require('express');
const dbConnection = require('../databases/gaspre.config');

const getInformation = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        // connect to the database
        const connection = await dbConnection();
        
        // get information from the station
        const stationQuery = `
          SELECT name, location_x, location_y
          FROM stations
          WHERE cre_id = $1
        `;
        const stationResult = await connection.query(stationQuery, [id]);
        const station = stationResult.rows[0];

        // get information from the nearest competitors
        const competitorsQuery = `
          SELECT s.name, sc.distance, p.value AS price, b.name AS brand,
            ABS(p.value - your_price.value) AS price_difference
          FROM station_competitors AS sc
          JOIN stations AS s ON sc.cre_id_competitor = s.cre_id
          JOIN prices AS p ON sc.cre_id_competitor = p.cre_id
          JOIN stations_brands AS sb ON sc.cre_id_competitor = sb.cre_id
          JOIN brands AS b ON sb.id_brand = b.id
          JOIN prices AS your_price ON your_price.cre_id = $1
            AND p.product = your_price.product
          WHERE sc.cre_id = $1
            AND p.date = (
              SELECT MAX(date) FROM prices WHERE cre_id = sc.cre_id_competitor AND product = p.product
            )
          ORDER BY sc.distance ASC
          LIMIT 5
        `;
        const competitorsResult = await connection.query(competitorsQuery, [id]);
        const competitors = competitorsResult.rows;

        // return the information
        return res.status(200).json({
            ok: true,                        
            station: {
                name: station.name,
                location_x: station.location_x,
                location_y: station.location_y,
            },
            competitors: competitors.map((c) => ({
                name: c.name,
                distance: c.distance,
                price: c.price,
                brand: c.brand,
                price_difference: c.price_difference,
            })),
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
            ok: false,
            msg: 'Server error' 
        });
    }

}


module.exports = {
    getInformation
}