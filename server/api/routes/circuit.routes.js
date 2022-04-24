// DEPENDENCIAS
import express from "express";
// FUNCIONES
import { getCircuits, addRecordCircuit } from '../controllers/circuit.controller.js';
//import { upload, uploadToCloudinary } from '../../middlewares/file.middleware.js';        


const circuitRoutes = express.Router();

circuitRoutes.get("/", getCircuits);
circuitRoutes.post("/", addRecordCircuit);


// router.post('/create', [upload.single('picture'), uploadToCloudinary], async (req, res, next) => {
//         try {
//             const characterPicture = req.file_url;
//             // Crearemos una instancia de character con los datos enviados
//             const newCharacter = new Character({
//                 mark : req.body.mark,
//                 cv : req.body.cv,
//                 weight : req.body.weight,
//                 team : req.body.team,
//                 image : characterPicture
//             });
//             // Guardamos el personaje en la DB
//             const createdCharacter = await newCharacter.save();
//             return res.status(201).json(createdCharacter);
//         } catch (error) {
//             // Lanzamos la función next con el error para que lo gestione Express
//             next(error);
//         }
//     });


export {  circuitRoutes };