// import { Moto } from "../models/Moto.Model.js";
// import { httpStatusCode } from "../../utils/httpStatusCode.js";


// const getMotos = async (req,res,next) =>{

//     try {
//         const motos = await Moto.find();
//         return res.json({
//            status :200,
//            message : httpStatusCode[200],
//            data : { motos: motos},
//         });
//     } catch (error) {
//         return next(error)
        
//     }
// };

// export { getMotos};