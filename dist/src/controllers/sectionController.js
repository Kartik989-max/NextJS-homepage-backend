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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSection = exports.updateSection = exports.createSection = exports.getSections = void 0;
const sectionModel_1 = require("../models/sectionModel");
const getSections = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sections = yield sectionModel_1.SectionModel.find().sort({ order: 1 });
    res.json(sections);
});
exports.getSections = getSections;
const createSection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const section = yield sectionModel_1.SectionModel.create(req.body);
    res.status(201).json(section);
});
exports.createSection = createSection;
const updateSection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const section = yield sectionModel_1.SectionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(section);
});
exports.updateSection = updateSection;
const deleteSection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield sectionModel_1.SectionModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Section deleted' });
});
exports.deleteSection = deleteSection;
