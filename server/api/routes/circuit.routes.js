// DEPENDENCIAS
import express from "express";
// FUNCIONES
import { getCircuits, addRecordCircuit, createCircuit, getCircuitById, editCircuit, deleteCircuit } from '../controllers/circuit.controller.js';
//import { upload, uploadToCloudinary } from '../../middlewares/file.middleware.js';


const circuitRoutes = express.Router();

circuitRoutes.get("/", getCircuits);
circuitRoutes.post("/", createCircuit)
circuitRoutes.post("/recordLap", addRecordCircuit);
circuitRoutes.get("/id/:circuitId", getCircuitById);
circuitRoutes.put("/modify/:circuitId", editCircuit);
circuitRoutes.delete("/:circuitId", editCircuit);





export {  circuitRoutes };