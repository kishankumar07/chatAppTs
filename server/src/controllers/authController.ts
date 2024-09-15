import { Express,Request,Response } from "express"

const registerUser = async(req:Request,res:Response)=>{
      res.send('user registered')
}

const loginUser = async(req:Request,res:Response) =>{
      res.send('User logged in')
}

// const logoutUser = async(req:Request,res:Response)=>{
//       console.log('logged out')
//       res.send('Logged out')
// }

const logoutUser = async(req:Request,res:Response) =>{
      res.send('Logged out');
}

export {
      registerUser,
      loginUser,
      logoutUser,
}