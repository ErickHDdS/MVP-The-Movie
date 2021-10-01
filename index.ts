import express from 'express';
const { response } = require("express");
const app = express();
const port = 3333;

app.use(express.json());

app.listen(port, () => {
    console.log("Rodando a aplicação em http://localhost:"+port);
});

app.get("/", (request, response) => {
    return response.json({
        helloWord: "Hello Word",
        App: "NodeJs App"
    });
});

app.post('/user', (req, res) => {
    res.send("POST")
});

app.delete('/user', (req, res) => {
    res.send("DELETE")
});

app.put('/user', (req, res) => {
    res.send("PUT")
});