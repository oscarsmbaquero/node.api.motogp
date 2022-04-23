// DEPENDENCIAS
import express from "express";
// FUNCIONES
import { getPilots} from '../controllers/pilot.controller.js';


const pilotsRoutes = express.Router();

pilotsRoutes.get('/', getPilots);


export {  pilotsRoutes };