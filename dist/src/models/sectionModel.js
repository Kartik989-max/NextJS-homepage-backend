"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const sectionSchema = new mongoose_1.default.Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: mongoose_1.default.Schema.Types.Mixed, required: true },
    order: { type: Number, required: true },
});
exports.SectionModel = mongoose_1.default.model('Section', sectionSchema);
