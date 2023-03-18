import express from "express";
import dbConnect from "./config/database.js";

import apiRoutes from "./routes/index.js";

const app = express();
const PORT = 2800;

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", apiRoutes);

app.get("/", (req,res) => {
    res.json({
        message: "Project Running Sucessfull !!"
    })
});

app.listen(PORT, async () => {
    console.log(`Server is running on PORT ${PORT}`);
})