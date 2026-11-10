import express from "express";
import { getAllUsers, setUser, getHeaders, getQueryParams } from "../service/userService.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const controller = express.Router();

controller.get("/user/getUser", getAllUsers)
controller.post("/user/createUser", upload.single("avatar"), setUser)
controller.post("/user/getHeaders", getHeaders)
controller.get("/user/getqueryParams/:id", getQueryParams)

export default controller;