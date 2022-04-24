import { User } from "../models/User.Model.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { httpStatusCode } from "../../utils/httpStatusCode.js";


const getUsers = async (req,res,next) =>{
  try {
      const motos = await User.find();
      return res.json({
         status :200,
         message : httpStatusCode[200],
         data : { motos: motos},
      });
  } catch (error) {
      return next(error)        
  }
};


const  registerUser = async(req, res, next) =>{
  try {
    const { body } = req;
    console.log('Entro');
    // Comprobar usuario
    const previousUser = await User.findOne({ email: body.email });

    if (previousUser) {
      const error = new Error('The user is already registered!');
      return next(error);
    }

    // Encriptar password
    const pwdHash = await bcrypt.hash(body.password, 10);

    // Crear usuario en DB
    const newUser = new User({
      email: body.email,
      password: pwdHash,
    });
    const savedUser = await newUser.save();

    // Respuesta
    return res.status(201).json({
      status: 201,
      message: httpStatusCode[201],
      data: {
        id: savedUser._id
      }
    });

  } catch (error) {
    return next(error);
  }
};

const loginUser = async (req, res, next)=>{
  try {
          const { body } = req;
      
          // Comprobar email
          const user = await User.findOne({ email: body.email });
      
          // Comprobar password
          const isValidPassword = await bcrypt.compare(body.password, user?.password ?? '');
          // Control de LOGIN
          if (!user || !isValidPassword) {
            const error = {
              status: 401,
              message: 'The email & password combination is incorrect!'
            };
            return next(error);
          }
      
          // TOKEN JWT
          const token = jwt.sign(
            {
              id: user._id,
              email: user.email,
              rol: 'ADMIN'
            },
            req.app.get("secretKey"),
            { expiresIn: "1h" }
          );
      
          // Response
          return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: {
              userId: user._id,
              token: token
            },
          });
        } catch (error) {
          console.log(error);
          return next(error);
        }


};



  export { registerUser, getUsers, loginUser };