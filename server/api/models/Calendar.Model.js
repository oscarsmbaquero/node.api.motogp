//IMPORTAMOS LAS DEPENDENCIAS
import mongoose from "mongoose";

//Recupero Schema de mongoose
const Schema = mongoose.Schema;

//Creamos el esquema para las motos
const calendarSchema = new Schema({
  date: { type: String, required: true },

  name: [{ type: mongoose.Types.ObjectId, ref: 'Circuit' }],

});

const Calendar = mongoose.model("Calendar", calendarSchema);

export {Calendar};