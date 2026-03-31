import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    workemail: String,
    phone: String,
    task: String,
});

const Contact = mongoose.model("test", contactSchema);

export default Contact;