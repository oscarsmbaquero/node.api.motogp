// DEPENDENCIAS
import express from "express";
// FUNCIONES
import { getCircuits, addRecordCircuit } from '../controllers/circuit.controller.js';
//import { upload, uploadToCloudinary } from '../../middlewares/file.middleware.js';        


const circuitRoutes = express.Router();

circuitRoutes.get("/", getCircuits);
circuitRoutes.post("/", addRecordCircuit);





export {  circuitRoutes };