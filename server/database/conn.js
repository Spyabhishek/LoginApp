import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
// import ENV from '../config.js';
// import dotenv from 'dotenv';

async function connect() {
    mongoose
        .connect(process.env.ATLAS_URI)
        .then(() => {
            console.log(`Connected DB: conn`);
        })
        .catch((err) => {
            console.log(err.message);
            process.exit(1);
        });
};

export default connect;