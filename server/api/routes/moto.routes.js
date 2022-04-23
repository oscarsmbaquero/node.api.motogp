// DEPENDENCIAS
import express from "express";
// FUNCIONES
import { getMotos,
        createMotos,
        getMotoById,
        findMotoByName,
        editMoto,
        deleteMoto } from '../controllers/moto.controller.js';


const motosRoutes = express.Router();

motosRoutes.get("/", getMotos);
motosRoutes.post("/", createMotos);
motosRoutes.get("/:motoID", getMotoById);
motosRoutes.get("/mark/:mark", findMotoByName);
motosRoutes.put("/modify/:motoID", editMoto);
motosRoutes.delete("/delete/:motoID", deleteMoto);


export {  motosRoutes };