// DEPENDENCIAS
import express from "express";
// FUNCIONES
import { getMotos} from '../controllers/moto.controller.js';


const motosRoutes = express.Router();

motosRoutes.get('/', getMotos);


export {  motosRoutes };