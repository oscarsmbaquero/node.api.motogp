// DEPENDENCIAS
import express from "express";
// FUNCIONES
import { getPilots, createPilots, getPilotById, findPilotByName, editPilot, deleteMoto, addMoto, createPilotsFile } from '../controllers/pilot.controller.js';
import {upload, uploadToCloudinary} from '../../middlewares/file.middleware.js';

const pilotsRoutes = express.Router();

pilotsRoutes.get('/', getPilots);
pilotsRoutes.post('/', createPilots);
pilotsRoutes.get("/:pilotID", getPilotById);
pilotsRoutes.get("/name/:name", findPilotByName);
pilotsRoutes.put("/modify/:pilotID", editPilot);
pilotsRoutes.delete("/delete/:pilotID", deleteMoto);
pilotsRoutes.put("/add-pilot", addMoto);
pilotsRoutes.post("/add-file", [upload.single('image'), uploadToCloudinary], createPilotsFile);



export {  pilotsRoutes };