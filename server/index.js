import express from "express";
import cors from 'cors'
import path from "path";
import { fileURLToPath } from "url";
import { analyzeRouter } from "./router/analyze.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { authRouter } from "./router/Auth.js";
import cookieParser from "cookie-parser";
dotenv.config();
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected");

}
const server = express();
server.use(cookieParser());
server.use(express.static(path.join(__dirname, "build")));

const allowedOrigins = [
  'https://jobbot-lac.vercel.app',
  process.env.CLIENT_URL
];

server.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
server.use(express.json());
server.use('/analyze',analyzeRouter)
server.use('/',authRouter)
server.get('/', (req, res) => {
  res.json({ succes: "done" });
})

server.listen(process.env.PORT, () => {
  console.log("server started");
  console.log("http://localhost:8080/");
})