//IMPORTAMOS LAS DEPENDENCIAS
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB = process.env.MONGODB;

//Creamos la función que conecta nuestro server con Mongo
const connect = async () => {
  try {
    const DB = await mongoose.connect(MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //Con destructuring le sacamos el name y el host para poder verlo en el log
    const { name, host } = DB.connection;
    console.log(`Connected to database ${name} in host: ${host}`);
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

//Exportamos la función connect para poder usarla en el index.js
export {connect}
