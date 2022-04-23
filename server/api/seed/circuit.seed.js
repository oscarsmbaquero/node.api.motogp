// Archivo character.seed.js

import mongoose from 'mongoose';
import { Circuit } from '../models/Circuit.Model.js';

const circuits = [
    {
        name: 'Gran Premio de Catar ',
        country: 'Qatar',
        recordLap: "Pecco Bagnaia",
        image: 'https://solomoto.es/wp-content/uploads/2019/03/losail-circuit.jpg'
      },
      {
        name: 'Pertamina Grand Prix of Indonesia',
        country: 'Indonesia',
        recordLap: "Fabio Quartararo",
        image: 'https://estaticos-cdn.sport.es/clip/2afa8c86-ece4-4e92-b83f-17031b6d9c6a_source-aspect-ratio_default_0.jpg'
      },
      {
        name: 'Termas de Río Hondo',
        country: 'Argentina',
        recordLap: "Marc Márquez",
        image: 'https://photos.motogp.com/2015/01/29/161314.big.jpg'
      },
      {
        name: 'Las Américas',
        country: 'EEUU',
        recordLap: "Francesco Bagnaia",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JACPey5w1yaJTbFyjcbptuXTvjV_S5uhrg&usqp=CAU'
      },
      {
        name: 'Algarve International Circuit',
        country: 'Portugal',
        recordLap: "Fabio Quartararo",
        image: 'https://cdn-wp.thesportsrush.com/2020/07/Untitled-design-72-1.jpg'
      },
      {
        name: 'Jerez',
        country: 'Spain',
        recordLap: " Maverick Viñales",
        image: 'https://s3-eu-west-1.amazonaws.com/boxrepsol-site/uploads/00_jerez_motogp_rc213v_moto_repsol_honda_motociclismo_gp_espana.jpg'
      },
      {
        name: 'Le Mans',
        country: 'France',
        recordLap: "Johann Zarco",
        image: 'https://soymotor.com/sites/default/files/styles/mega/public/imagenes/noticia/le-mans-24-horas-soymotor.jpg?itok=1wdT5Svg'
      },
      {
        name: 'Mugello',
        country: 'Italy',
        recordLap: "Fabio Quartararo",
        image: 'https://www.motorpoint.com/fotos/8/1024px-partenza_del_gran_premio_ditalia_tim_2011_thumb_425.jpg'
      },
      {
        name: 'Barcelona-catalunya',
        country: 'Spain',
        recordLap: "Fabio Quartararo",
        image: 'https://www.2playbook.com/uploads/s1/21/68/circuito-de-barcelona.jpeg'
      },
      {
        name: 'Sachsenring',
        country: 'Germany',
        recordLap: "Mark Marquez",
        image: 'https://photos.motogp.com/2020/06/18/aerial_sachsenring-9-copia_1.big.jpg'
      },
      {
        name: 'Aseen',
        country: 'Holand',
        recordLap: "Fabio Quartararo",
        image: 'https://www.mundomotero.com/wp-content/uploads/2013/06/Circuito-Assen-MotoGP.jpg'
      },
      {
        name: 'Kymi Ring',
        country: 'Finland',
        recordLap: "Mark Marquez",
        image: 'https://www.formulamoto.es/wp-content/uploads/2021/05/353701brad-binderktm-rc16motogpred-bull-ring-spielberg-aut2020-08-16.jpg'
      },
      {
        name: 'Silverstone',
        country: 'Great Britain',
        recordLap: "Mark Marquez",
        image: 'https://photos.motogp.com/2015/02/11/silverstone.big.jpg'
      },
      {
        name: 'Red Bull Ring',
        country: 'Austria',
        recordLap: "Jorge Martin",
        image: ''
      },
      {
        name: 'Misano Marco Simoncelli',
        country: 'San Marino',
        recordLap: "Francesco Bagnaia",
        image: 'https://4.bp.blogspot.com/-WUgyxju2AmM/T9Ts-38wIcI/AAAAAAAAArg/XjNWPZGt2w8/w1200-h630-p-k-no-nu/misano-world-circuit-marco-simoncelli.jpg'
      },
      {
        name: 'Motorland Aragón',
        country: 'Spain',
        recordLap: "Francesco Bagnaia",
        image: 'https://www.2playbook.com/uploads/s1/12/04/motorland-arago-n-motogp.jpeg'
      },
      {
        name: 'Moteggi',
        country: 'Japan',
        recordLap: "Jorge Lorenzo",
        image: 'https://www.honda.es/hondadreams/wp-content/uploads/top-slide-003-600x313.jpg'
      },
      {
        name: 'Chang',
        country: 'Thailand',
        recordLap: "Mark Marquez",
        image: 'https://img.motoryracing.com/noticias/portada/26000/26225-n.jpg'
      },
      {
        name: 'Phillip Island',
        country: 'Australia',
        recordLap: "Jorge Lorenzo",
        image: 'https://qph.fs.quoracdn.net/main-qimg-cb8773e020b37954508789668e2ede05-lq'
      },
      {
        name: 'Sepang',
        country: 'Malasia',
        recordLap: "Francesco Bagnaia",
        image: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/23/40/2340038.jpeg'
      },
      {
        name: 'Ricardo Tormo',
        country: 'Spain',
        recordLap: "Jorge Lorenzo",
        image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/04/02/15226576889042.jpg'
      },


];

const circuitDocuments = circuits.map(element => new Circuit(element));
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
    const allCircuits = await Circuit.find();
		
		// Si existen personajes previamente, dropearemos la colección
    if (allCircuits.length) {
      await Circuit.collection.drop(); //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los personajes, usaremos el array characterDocuments
		// para llenar nuestra base de datos con todas los personajes.
		await Circuit.insertMany(circuitDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => {
    mongoose.disconnect();
    console.log('OK!');
  });