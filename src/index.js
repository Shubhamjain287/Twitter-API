import express from "express";
import dbConnect from "./config/database.js";

const app = express();

const PORT = 2800;

dbConnect();

app.get("/", (req,res) => {
    res.json({
        message: "Project Running Sucessfull !!"
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})