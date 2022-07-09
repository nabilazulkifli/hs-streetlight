import {router as deviceRouter} from "./src/routes/device.route";

const express = require('express');
const port = 8082;

const app = express();
app.use(express.json());

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

app.use(deviceRouter)
