import {router as monitorRouter} from "./src/routes/monitor.route";

const express = require('express');
const port = 8083;

const app = express();
app.use(express.json());

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

app.use(monitorRouter)
