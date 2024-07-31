import express from 'express';
import { createUser, getUser } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getUser);
router.route('/add').post(createUser);

export default router;