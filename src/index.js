const express = require("express");
const typeorm = require("typeorm");

const app = express();

const dataSource = new typeorm.DataSource({
    type: "sqlite",
    database: "./wildersdb.sqlite",
    synchronize: true,
    entities: [require("./entity/wilder")],
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

const start = async () => {
    await dataSource.initialize();
    app.listen(3000, () => console.log("Server started on 3000"));
};
//Start Server

start();
