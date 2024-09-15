import express from 'express'
import { registerUser,loginUser,logoutUser } from '../controllers/authController';

const router = express.Router();

//@desc      register a user
//route      POST   /api/auth/signup
//access     Public
router.post('/signup',registerUser)

//@desc      login a user
//route      POST   /api/auth/login
//access     Public
router.post('/login',loginUser)

//@desc      Logout a user
//route      POST   /api/auth/logout
//access     Public
router.post('/logout',logoutUser);


export default router;