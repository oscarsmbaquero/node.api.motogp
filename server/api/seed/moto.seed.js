// Archivo character.seed.js

import mongoose from 'mongoose';

// Imporatmos el modelo Pet en este nuevo archivo.
import { Moto } from '../models/Moto.Model.js';

const moto = [
    {
        mark: 'Yamaha M1',
        cv: 250,
        weight: 157,
        team: "Yamaha Racing Team",
        image: 'https://i.pinimg.com/originals/e2/35/7b/e2357b9a6f4beda4e3d15001c4d71e5d.png'
      },
      {
        mark: 'Honda RC213V',
        cv: 245,
        weight: 160,
        team: "Repsol Honda",
        image: 'https://www.marcmarquez93.com/wp-content/themes/mm93/images/2022-RC213V-11.png'
      },
      {
        mark: 'Ducati GP22',
        cv: +250,
        weight: 157,
        team: "Ducati",
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/5eT74INnjIR0vP6qTrDtyz/435cd2434e8f6ed294fda77c1a42064d/MGP22-Team-Launch-Bike-Intro-1060x650.png'
      },
      {
        mark: 'KTM RC16',
        cv: 250,
        weight: 157,
        team: "Ducati",
        image: 'https://super7moto.com/directorio/images/2022/MotoGP/KTM/2022_MotoGP_launch_RC16_Oliveira.jpg'
      },
      {
        mark: 'Aprilia RS-GP',
        cv: 250,
        weight: 157,
        team: "Aprilia Racing Team",
        image: 'https://www.motociclismo.es/uploads/s1/10/25/25/68/aprilia-rs-gp-racing-motogp-2022-aleix-espargaro-maverick-vinales-04.jpeg'
      },


];

const motoDocuments = moto.map(motogp => new Moto(motogp));

// En este caso, nos conectaremos de nuevo a nuestra base de datos
// pero nos desconectaremos tras insertar los documentos
mongoose
    
.connect('mongodb+srv://root:0810Otto0810@cluster0.ejpzh.mongodb.net/motogp?retryWrites=true&w=majority', {
    //.connect('mongodb://localhost:27017/motogp', {
  useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		// Utilizando Character.find() obtendremos un array con todos los personajes de la db
    const allMotos = await Moto.find();
		
		// Si existen personajes previamente, dropearemos la colección
    if (allMotos.length) {
      await Moto.collection.drop(); //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los personajes, usaremos el array characterDocuments
		// para llenar nuestra base de datos con todas los personajes.
		await Moto.insertMany(motoDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => {
    mongoose.disconnect();
    console.log('OK!');
  });