import express from 'express';
import { createExercise, getExercise } from '../controllers/exercise.controller.js';

const router = express.Router();

router.route('/').get(getExercise);
router.route('/add').post(createExercise);

export default router;