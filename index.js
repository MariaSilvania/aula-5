
const express = require("express");
const app = express();
const path = require('path');
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/api", (req, res) => {
    res.send('Hello World 0');
});

app.get("/api/produtos", (req, res) => {
    res.send('Hello World 2');
});

app.get("/api/usuarios", (req, res) => {
    res.send('Hello World 3');

});

app.listen(port, () => {
    console.log(`Servidor esta em pé em : http:\\localhost:${port}`);
});