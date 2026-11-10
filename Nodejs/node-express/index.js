import express from "express";
import dotenv from "dotenv";
import controller from "./controller/userController.js";
dotenv.config();

const app = express();

app.use(express.json({ limit: "5mb" }));

// URL-encoded parsing
app.use(express.urlencoded({
    extended: true,
    limit: "1mb"
}));

app.use("/api", controller);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});