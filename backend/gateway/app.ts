import {NextFunction, Response} from "express";

const express = require('express');
const app = express();
const port = 8089;

const compression = require('compression');

const cors = require('cors');
const logger = require('morgan');
const createError = require('http-errors');
const useragent = require('express-useragent');

const api = require('./src/routes');

app.set('trust proxy', true);
app.use(compression());
app.use(cors());
app.use(useragent.express());
app.use(cors({ origin: '*' }));


// Settings for CORS
// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.header('Access-Control-ALlow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-ALlow-Credentials', 'false');
//     next();
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));

app.use(api.default);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError.NotFound());
});

app.use((err: { status: number; message: string; }, req: Request, res: Response) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
});

app.get('/', (req, res) => {
    res.send('Connected!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
