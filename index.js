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

server.use("/pilots", pilotsRoutes);
server.use("/motos", motosRoutes);



server.use('*', (req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});
server.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || 'Unexpected error');
});



server.listen(PORT, () => {
  //Escucho mi servidor en el puerto indicado
  console.log(`Node server listening on port http://localhost:${PORT}`);
});

