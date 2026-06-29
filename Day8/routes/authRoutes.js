import express from "express";
import { addStudent, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/student",addStudent)
export default router;


//https://localhost:5000/api/auth/register


