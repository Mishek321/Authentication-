import express from "express";
import { loginUser, registerUser  } from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.post('/login', loginUser)
authRoutes.post('/register', registerUser)

export default authRoutes;