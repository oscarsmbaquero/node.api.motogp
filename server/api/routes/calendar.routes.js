// DEPENDENCIAS
import express from "express";
// FUNCIONES
import { getCalendar, createRace, createCalendary} from '../controllers/calendar.controller.js';
//import { upload, uploadToCloudinary } from '../../middlewares/file.middleware.js';        


const calendarRoutes = express.Router();

calendarRoutes.get("/", getCalendar);
calendarRoutes.post("/", createCalendary);
calendarRoutes.post("/race/", createRace);


export {  calendarRoutes };