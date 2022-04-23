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
        image: 'https://www.motociclismo.es/uploads/s1/10/23/30/58/yamaha-yzr-m1-monster-motogp-2022-fabio-quartararo-franco-morbidelli-03_1_1000x575.jpeg'
      },
      {
        mark: 'Honda RC213V',
        cv: 245,
        weight: 160,
        team: "Repsol Honda",
        image: 'https://s1.eestatic.com/2022/02/08/deportes/motor/648695408_221693379_1706x960.jpg'
      },
      {
        mark: 'Ducati GP22',
        cv: +250,
        weight: 157,
        team: "Ducati",
        image: 'https://images.ctfassets.net/x7j9qwvpvr5s/6sOrXwaoSuRHTc8kuK3Y9i/747d05349e86f46b420b226e3599c678/MGP22-Team-Launch-Desmosedici-GP-01-gallery-906x510.jpg'
      },
      {
        mark: 'KTM RC16',
        cv: 250,
        weight: 157,
        team: "Ducati",
        image: 'https://super7moto.com/directorio/images/2018/COMPETICIONES/Dakar/341684_Dani_Pedrosa_Red_Bull_KTM_Factory_Racing_Private_MotoGP_Test_Red_Bull_Ring_27052020___9_.jpg'
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
    
  //.connect('mongodb+srv://root:0810Otto0810@cluster0.3e1cg.mongodb.net/movies?retryWrites=true&w=majority', {
    .connect('mongodb://localhost:27017/motogp', {  
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