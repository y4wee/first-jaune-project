const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");

const app = express();

app.use(express.json());


app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.getAll);
app.delete("/api/wilder", wilderController.getAll);
app.put("/api/wilder", wilderController.getAll);


const start = async () => {
    await dataSource.initialize();
    // dataSource.getRepository(Wilder).save({ name: "First Wilder" });
    app.listen(3000, () => console.log("Server started on 3000"));
};
//Start Server

start();
