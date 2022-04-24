//IMPORTAMOS LAS DEPENDENCIAS
import mongoose from "mongoose";

//Recupero Schema de mongoose
const Schema = mongoose.Schema;

//Creamos el esquema para las motos
const pilotSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  nacionality: { type: String, required: false },
  // team: { type: String, required: false },
  image: { type: String, required: true },

  moto: [{ type: mongoose.Types.ObjectId, ref: 'Moto' }],
});

const Pilot = mongoose.model("Pilot", pilotSchema);

export { Pilot };