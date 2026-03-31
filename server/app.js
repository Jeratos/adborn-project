import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Contact from "./model.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ayush:ayushtest@cluster0.mmyww.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

app.post("/contact", (req, res) => {
    const { firstname, lastname, workemail, phone, task } = req.body;
    const contact = new Contact({ firstname, lastname, workemail, phone, task });
    contact.save();
    res.send("Contact saved");
    console.log("Contact saved");
});

app.listen(3000, () => {
    console.log("Server started on: http://localhost:3000");
});