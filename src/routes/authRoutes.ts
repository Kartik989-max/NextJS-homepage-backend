// routes/admin.js or routes/admin.ts
import express from "express";
import { getAdmin } from "../controllers/adminController";

const router = express.Router();

router.route('/login')
  .get(getAdmin)
  .post(getAdmin);


export default router;
