import { Circuit } from "../models/Circuit.Model.js";
import { httpStatusCode } from "../../utils/httpStatusCode.js";


const getCircuits = async (req,res,next) =>{

    try {
        const motos = await Circuit.find().populate({
            path: 'recordLap', select :'name',populate:({ path: 'moto' , select :'mark'})
          });
        return res.json({
           status :200,
           message : httpStatusCode[200],
           data : { motos: motos},
        });
    } catch (error) {
        return next(error)
        
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
  

export { getCircuits, addRecordCircuit};