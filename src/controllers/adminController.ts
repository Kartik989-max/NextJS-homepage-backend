import { Request, Response } from 'express';
import Admin  from '../models/adminModel'; // MongoDB model
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const getAdmin = async (req: Request, res: Response)=>{
    // const { username, password } = req.body;
    const admin = await Admin.findOne(req.body);
    const JWT_SECRET ="secret"
    try
        {
            if (!admin)  {res.status(400).json({ message: "Invalid credentials" }); 
        return;}
            else{ res.json({ message: "Logged in successfully" }); return;}
        }
    catch (error) {
        console.error(error);
         res.status(500).json({ message: "Server error" })
        return;
    }
  
    // const isMatch =true;
    // //  await bcrypt.compare(password, admin.password);
    // if (!isMatch)  res.status(400).json({ message: "Invalid credentials" });
  
    // const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: "1d" });
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
  
  
    
    

    
}




  