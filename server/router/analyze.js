import express from 'express';
import { analyze } from '../controller/analyze.js';
import multer from "multer";
const upload=multer();
const analyzeRouter= express.Router();
analyzeRouter.post('/',upload.single("resume"),analyze);
export {analyzeRouter};