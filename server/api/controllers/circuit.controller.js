import { Circuit } from "../models/Circuit.Model.js";
import { httpStatusCode } from "../../utils/httpStatusCode.js";

const getCircuits = async (req,res,next) =>{
    try {
      console.log('Entro');
        const circuits = await Circuit.find()
        .populate({
            path: 'recordLap', select :'name',populate:({ path: 'moto' , select :'mark'})
          });
        //  return res.status(200).json(circuits);
        // return res.json({
        //    status :200,
        //    message : httpStatusCode[200],
        //    data : { circuits: circuits},
        // });
        res.send(circuits);
    } catch (error) {
        return next(error);
    }
};
const createCircuit = async ( req, res, next) => {
    try {
        const newCircuit = new Circuit({
            name : req.body.name,
            country : req.body.country,
            image : req.body.image,
        })
        const newCircuitDB = await newCircuit.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            data: { circuit: newCircuitDB },
          });
    } catch (error) {
       return next(error);
    }
};
const getCircuitById = async (req, res, next) => {
    try {
      const { circuitId } = req.params;
      console.log(circuitId);
      const circuitById = await Circuit.findById(circuitId);
  
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: { circuit: circuitById },
      });
    } catch (error) {
      return next(error);
    }
};
const editCircuit = async (req, res, next) => {
    try {
      const { circuitId } = req.params;
      console.log(circuitId);
      const circuitModify = new Circuit(req.body);
      //Para evitar que se modifique el id de mongo:
      circuitModify._id = circuitId;
      const circuitUpdated = await Circuit.findByIdAndUpdate(
        circuitId,
        circuitModify
      );
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: { circuit: circuitUpdated },
      });
    } catch (error) {
      return next(error);
    }
};

const deleteCircuit = async (req, res, next) => {
    try {
      const { circuitId } = req.params;
      console.log(circuitId);
      const circuitDelete = await Circuit.findByIdAndDelete(circuitId);
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: { circuit: circuitDelete },
      });
    } catch (error) {
      return next(error);
    }
};

//añadimos pilotos de record del circito
const addRecordCircuit = async (req, res, next) => {
    try {
        
      const { pilotId } = req.body;
      const { circuitId } = req.body;
       console.log('circuitId =' + circuitId);
       console.log('pilotId =' + pilotId);
      const updatedCirtcuit = await Circuit.findByIdAndUpdate(circuitId,
          { $push: { recordLap: pilotId } },
          { new: true }
      );
      return res.status(200).json(updatedCirtcuit);
  } catch (error) {
      return next(error);
  }  
}
  

export { getCircuits, addRecordCircuit, createCircuit, getCircuitById, editCircuit, deleteCircuit};