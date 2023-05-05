const express = require('express');
const dbConnection = require('../databases/gaspre.config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 5000;

        // define the paths for routes
        this.paths = {
            gaspre: '/api/information',
        }


        this.connectDB();

        this.routes();
    }


    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.gaspre, require('../routes/information.routes'));

        // 404 error
        this.app.use('*', (req, res) => {
            res.status(404).json({
                msg: '404 error | Resource not found'
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }

}

module.exports = Server;