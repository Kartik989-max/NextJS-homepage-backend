"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdmin = void 0;
const adminModel_1 = __importDefault(require("../models/adminModel")); // MongoDB model
const getAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { username, password } = req.body;
    const admin = yield adminModel_1.default.findOne(req.body);
    const JWT_SECRET = "secret";
    try {
        if (!admin) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        else {
            res.json({ message: "Logged in successfully" });
            return;
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
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
});
exports.getAdmin = getAdmin;
