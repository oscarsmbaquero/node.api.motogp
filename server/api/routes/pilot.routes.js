// DEPENDENCIAS
import express from "express";
// FUNCIONES
import { getPilots, createPilots, getPilotById, findPilotByName, editPilot, deleteMoto, addMoto } from '../controllers/pilot.controller.js';


const pilotsRoutes = express.Router();

pilotsRoutes.get('/', getPilots);
pilotsRoutes.post('/', createPilots);
pilotsRoutes.get("/:pilotID", getPilotById);
pilotsRoutes.get("/name/:name", findPilotByName);
pilotsRoutes.put("/modify/:pilotID", editPilot);
pilotsRoutes.delete("/delete/:pilotID", deleteMoto);
pilotsRoutes.put("/add-pilot", addMoto);



export {  pilotsRoutes };