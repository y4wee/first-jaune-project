const express = require("express");
const dataSource = require("./utils").dataSource;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

const start = async () => {
    await dataSource.initialize();
    // dataSource.getRepository(Wilder).save({ name: "First Wilder" });
    app.listen(3000, () => console.log("Server started on 3000"));
};
//Start Server

start();
