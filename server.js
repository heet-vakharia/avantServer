// Module Imports
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
// Modals
import User from "./api/modals/user.js";
// Routes
import signInRoute from "./api/routes/signIn.js";
import registerRoute from "./api/routes/register.js";
import deleteRoute from "./api/routes/delete.js";
import updateRoute from "./api/routes/update.js";
// HTML CODE STRING FOR SENDGRID
import { defaultHTML } from "./api/html/default.js";
// For ENV varibles
dotenv.config();
//Middlewares
const app = express();
app.use(cors());
app.use(express.json());
// SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = (to, subject) => {
  const msg = {
    to: to,
    from: "avant.tourism@gmail.com",
    subject,
    html: defaultHTML,
  };
  sgMail.send(msg);
};
// Connecting to Mongodb Database called torism
const connect = () => {
  mongoose.set("useCreateIndex", true);
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connect();

// UserSchema

app.get("/", (req, res) => {
  res.json("Welcome to Server");
});
// SignIn Route
app.post("/signin", async (req, res) => {
  signInRoute(req, res, User, bcrypt, sendEmail);
});
// Register Route
app.post("/register", (req, res) => {
  registerRoute(req, res, User, bcrypt, sendEmail);
});
// Delete Route
app.post("/delete", (req, res) => {
  deleteRoute(req, res, User);
});
//Update Route
app.put("/update/:item", (req, res) => {
  updateRoute(req, res, User, bcrypt, sendEmail);
});
const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);
