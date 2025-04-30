import express from 'express';
import { getSections, createSection, updateSection, deleteSection } from '../controllers/sectionController';

const router = express.Router();

router.route('/')
  .get(getSections)
  .post(createSection);

router.route('/:id')
  .put(updateSection)
  .delete(deleteSection);

export default router;
