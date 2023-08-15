import mongoose from "mongoose";
import connectionString from "./connectionString.js";

mongoose.connect(connectionString)

let db = mongoose.connection;

export default db;