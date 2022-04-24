import { Pilot } from "../models/Pilot.Model.js";
import { httpStatusCode } from "../../utils/httpStatusCode.js";


const getPilots = async ( req, res, next) =>{
    try {
        const pilots = await Pilot.find().populate(({path:'moto', select :'team'}));;
        //return res.status(200).json(pilots);
        console.log(pilots);
        return res.json({
           status : 200,
           message : httpStatusCode[200],
           data : { pilots: pilots },
        });        
    } catch (error) {
        return next(error)
    }
};

const createPilots = async ( req, res, next) => {
    try {
        const newPilot = new Pilot({
            name : req.body.name,
            age : req.body.age,
            nacionality : req.body.nacionality,
            team : req.body.team,
            image : req.body.image,
        })

        const newPilotDB = await newPilot.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            data: { pilot: newPilotDB },
          });
    } catch (error) {
        
    }
};

const getPilotById = async (req, res, next) => {
    try {
      const { pilotID } = req.params;
      console.log(pilotID);
      const pilotoByID = await Pilot.findById(pilotID);
  
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: { pilot: pilotoByID },
      });
    } catch (error) {
      return next(error);
    }
};

const findPilotByName = async(req,res,next) => {
    const {name} = req.params;
    console.log(name);
    try {
      const pilotByName = await Pilot.find({name: name});
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: {pilot: pilotByName}
      })
    } catch (error) {
      next(error)
    }
}
  const editPilot = async (req, res, next) => {
    try {
      const { pilotID } = req.params;
      console.log(pilotID);
      const pilotModify = new Pilot(req.body);
      //Para evitar que se modifique el id de mongo:
      pilotModify._id = pilotID;
      const pilotUpdated = await Pilot.findByIdAndUpdate(
        pilotID,
        pilotModify
      );
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: { pilot: pilotUpdated },
      });
    } catch (error) {
      return next(error);
    }
};

  const deleteMoto = async (req, res, next) => {
    try {
      const { pilotID } = req.params;
      console.log(pilotID);
      const pilotDelete = await Pilot.findByIdAndDelete(pilotID);
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: { pilot: pilotDelete },
      });
    } catch (error) {
      return next(error);
    }
};

const addMoto = async (req, res, next) => {
  try {
      
    const { motoId } = req.body;
    const { pilotId } = req.body;
    console.log('motoId =' + motoId);
    console.log('pilotId =' + pilotId);
    const updatedPilot = await Pilot.findByIdAndUpdate(
      pilotId,
        { $push: { moto: motoId } },
        { new: true }
    );
    return res.status(200).json(updatedPilot);
} catch (error) {
    return next(error);
}
}

// router.put('/add-movie', async (req, res, next) => {
//   try {
      
//       const { actorId } = req.body;
//       const { movieId } = req.body;
//       const updatedMovie = await Movie.findByIdAndUpdate(
//           movieId,
//           { $push: { actor: actorId } },
//           { new: true }
//       );
//       return res.status(200).json(updatedMovie);
//   } catch (error) {
//       return next(error);
//   }
// });


export { getPilots, createPilots, getPilotById, findPilotByName, editPilot, deleteMoto, addMoto };