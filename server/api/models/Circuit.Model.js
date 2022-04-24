//IMPORTAMOS LAS DEPENDENCIAS
import mongoose from "mongoose";

//Recupero Schema de mongoose
const Schema = mongoose.Schema;

//Creamos el esquema para las motos
const circuitSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  recordLap: { type: String, required: false },
  image: { type: String, required: false },
});

const Circuit = mongoose.model("Circuit", circuitSchema);

export {Circuit};