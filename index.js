//DEPENDENCIAS
import express from "express";
import dotenv from "dotenv";
//FUNCION DE LLAMADA
import { connect } from "./server/config/db.js";

//RUTAS
import { pilotsRoutes } from './server/api/routes/pilot.routes.js';
import { motosRoutes } from './server/api/routes/moto.routes.js';

//configuración dotenv. 
dotenv.config();
//creo servidor express
const server = express();
//conectamos a traves de la funcion de mongo
connect();
//variable PORT de env  
const PORT = process.env.PORT;
// enviar datos por POST
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use("/pilot", pilotsRoutes);
server.use("/moto", motosRoutes);




server.listen(PORT, () => {
  //Escucho mi servidor en el puerto indicado
  console.log(`Node server listening on port http://localhost:${PORT}`);
});

