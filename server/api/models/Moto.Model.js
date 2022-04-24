//IMPORTAMOS LAS DEPENDENCIAS
import mongoose from "mongoose";

//Recupero Schema de mongoose
const Schema = mongoose.Schema;

//Creamos el esquema para las motos
const motoSchema = new Schema({
  mark: { type: String, required: true },
  cv: { type: Number, required: true },
  weight: { type: Number, required: false },
  team: { type: String, required: false },
  image: { type: String, required:  false },
});

const Moto = mongoose.model("Moto", motoSchema);

export {Moto};