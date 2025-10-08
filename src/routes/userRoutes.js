import express from 'express';
import { 
  getAllUsers, 
  getUserById 
} from '../controllers/users/getUsers.js';
import { createUser } from '../controllers/users/createUser.js';
import { 
  deleteUser, 
  deleteMultipleUsers 
} from '../controllers/users/deleteUser.js';
import { updateUser } from '../controllers/users/updateUser.js';
const router = express.Router();
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.post('/delete-multiple', deleteMultipleUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;
