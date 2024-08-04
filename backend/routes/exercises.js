import express from 'express';
import { createExercise, deleteExercise, getAllExercise, getOneExercise, updateExercise } from '../controllers/exercise.controller.js';

const router = express.Router();

router.route('/').get(getAllExercise);
router.route('/:id').get(getOneExercise);
router.route('/add').post(createExercise);
router.route('/update/:id').post(updateExercise);
router.route('/:id').delete(deleteExercise);


export default router;