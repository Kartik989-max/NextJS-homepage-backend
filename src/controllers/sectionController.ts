import { Request, Response } from 'express';
import { SectionModel } from '../models/sectionModel';

export const getSections = async (req: Request, res: Response) => {
  const sections = await SectionModel.find().sort({ order: 1 });
  res.json(sections);
};

export const createSection = async (req: Request, res: Response) => {
  const section = await SectionModel.create(req.body);
  res.status(201).json(section);
};

export const updateSection = async (req: Request, res: Response) => {
  const section = await SectionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(section);
};

export const deleteSection = async (req: Request, res: Response) => {
  await SectionModel.findByIdAndDelete(req.params.id);
  res.json({ message: 'Section deleted' });
};
