"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sectionController_1 = require("../controllers/sectionController");
const router = express_1.default.Router();
router.route('/')
    .get(sectionController_1.getSections)
    .post(sectionController_1.createSection);
router.route('/:id')
    .put(sectionController_1.updateSection)
    .delete(sectionController_1.deleteSection);
exports.default = router;
