import express from 'express';
import cors from "cors";
import router from './API/routes';
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST');
    app.use(cors());
    next();
})

app.use(router)

app.listen(1403);