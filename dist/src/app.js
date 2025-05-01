"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const sectionRoutes_1 = __importDefault(require("./routes/sectionRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)({ credentials: true, origin: "https://next-js-home-page-frontend.vercel.app" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Routes
app.use('/api/sections', sectionRoutes_1.default);
// Routes
app.use('/api/admin', authRoutes_1.default);
// Error Handler
app.use(errorHandler_1.errorHandler);
// Connect Database
(0, db_1.connectDB)();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
