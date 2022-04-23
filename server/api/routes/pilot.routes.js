// DEPENDENCIAS
import express from "express";
// FUNCIONES
import { getPilots, createPilots, getPilotById, findPilotByName, editPilot, deleteMoto } from '../controllers/pilot.controller.js';


const pilotsRoutes = express.Router();

pilotsRoutes.get('/', getPilots);
pilotsRoutes.post('/', createPilots);
pilotsRoutes.get("/:pilotID", getPilotById);
pilotsRoutes.get("/mark/:mark", findPilotByName);
pilotsRoutes.put("/modify/:pilotID", editPilot);
pilotsRoutes.delete("/delete/:pilotID", deleteMoto);



export {  pilotsRoutes };