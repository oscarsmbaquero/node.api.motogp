import { Pilot } from "../models/Pilot.Model.js";
import { httpStatusCode } from "../../utils/httpStatusCode.js";


const getPilots = async ( req, res, next) =>{

    try {
        const pilots = await Pilot.find();
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


export { getPilots };