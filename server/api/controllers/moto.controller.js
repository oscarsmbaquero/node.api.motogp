import { Moto } from "../models/Moto.Model.js";
import { httpStatusCode } from "../../utils/httpStatusCode.js";


//Funcion para obtener todas las motos de la bd
const getMotos = async (req,res,next) =>{
    try {
        const motos = await Moto.find();
        return res.json({
           status :200,
           message : httpStatusCode[200],
           data : { motos: motos},
        });
    } catch (error) {
        return next(error)
    }
};

const createMotos =  async  (req, res, next) =>{  
    try {
        const newMoto = new Moto({

            mark : req.body.mark,
            cv : req.body.cv,
            weight : req.body.weight,
            team : req.body.team,
            //image : picture
            image : req.body.image
        });
        const newMotoDB = await newMoto.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            data: { moto: newMotoDB },
          });
    } catch (error) {
        return next(error);
    }
};
const getMotoById = async (req, res, next) => {
    try {
      const { motoID } = req.params;
      console.log(motoID);
      const motoByID = await Moto.findById(motoID);
  
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: { moto: motoByID },
      });
    } catch (error) {
      return next(error);
    }
};

const findMotoByName = async(req,res,next) => {
    const {mark} = req.params;
    console.log(mark);
    try {
      const motoByName = await Moto.find({mark: mark});
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: {moto: motoByName}
      })
    } catch (error) {
      next(error)
    }
}
  const editMoto = async (req, res, next) => {
    try {
      const { motoID } = req.params;
      console.log(motoID);
      const motoModify = new Moto(req.body);
      //Para evitar que se modifique el id de mongo:
      motoModify._id = motoID;
      const motoUpdated = await Moto.findByIdAndUpdate(
        motoID,
        motoModify
      );
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: { moto: motoUpdated },
      });
    } catch (error) {
      return next(error);
    }
};

  const deleteMoto = async (req, res, next) => {
    try {
      const { motoID } = req.params;
      console.log(motoID);
      const motoDelete = await Moto.findByIdAndDelete(motoID);
      return res.json({
        status: 200,
        message: httpStatusCode[200],
        data: { moto: motoDelete },
      });
    } catch (error) {
      return next(error);
    }
};







export { getMotos, createMotos, getMotoById, findMotoByName, editMoto, deleteMoto };