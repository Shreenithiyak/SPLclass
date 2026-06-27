import express from "express";
import { getProfile, getUser, searchUser, sendData } from "../controllers/authController.js";

const router = express.Router();

//1. Make the API and take the data Process and (Params,body,headers,query)
router.post("/register",sendData);
// Params
router.get("/user/:id", getUser);

// Query
router.get("/search", searchUser);

// Headers
router.get("/profile", getProfile);
export default router;


//https://localhost:5000/api/auth/register
//https://localhost:5000/api/auth/user/1
//https://localhost:5000/api/auth/search
//https://localhost:5000/api/auth/profile