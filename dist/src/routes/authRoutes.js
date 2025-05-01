"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/admin.js or routes/admin.ts
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controllers/adminController");
const router = express_1.default.Router();
router.route('/login')
    .get(adminController_1.getAdmin)
    .post(adminController_1.getAdmin);
exports.default = router;
