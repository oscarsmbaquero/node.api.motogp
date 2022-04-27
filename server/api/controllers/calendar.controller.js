import { Calendar } from "../models/Calendar.Model.js";
import { httpStatusCode } from "../../utils/httpStatusCode.js";
import { Circuit } from "../models/Circuit.Model.js";


const getCalendar = async (req,res,next) =>{

    try {
        //const calendar = await Calendar.find()
        const calendar = await Calendar.find().populate({path: 'name' , select :'country', populate:({ path:'recordLap', select : 'name', populate:({ path:'moto', select : 'team'})})});
        return res.status(200).json(calendar); 
        // return res.json({
        //    status :200,
        //    message : httpStatusCode[200],
        //    data : { calendary: calendar},
        // });
    } catch (error) {
        return next(error)
        
    }
};

const createCalendary = async ( req, res, next) => {
    //console.log(req.body.date);
    try {
        const newCircuit = new Calendar({
            date : req.body.date,
        })

        const newCircuitDB = await newCircuit.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            data: { calendar: newCircuitDB },
          });
    } catch (error) {
       return next(error) ;
    }
};


const createRace = async ( req, res, next) => {
    try {
      
        const { circuitId } = req.body;
        const { calendarId } = req.body;
        const createRace = await Calendar.findByIdAndUpdate(
            calendarId,
            { $push: { name: circuitId } },
            { new: true }
        );
        return res.status(200).json(createRace);
    } catch (error) {
        return next(error);
    }
};
  

export { getCalendar, createRace, createCalendary };