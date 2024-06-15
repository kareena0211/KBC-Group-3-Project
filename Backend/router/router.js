import express from 'express';
import { login, signup, getAllUsers, GetLoginData, UpdateLoginData, DeleteUserData, logout} from '../controller/controller.js';
import  {verifyToken}  from '../midlewere/authentication.js';

const router = express.Router();

router.post('/post', signup);
router.post('/Login', login);
router.get('/signupAllData', getAllUsers);
router.get('/findLogin/data',verifyToken, GetLoginData)
router.put('/update/user', verifyToken, UpdateLoginData)
router.delete('/delete/userData', verifyToken, DeleteUserData)
router.post('/logoutLogin/data', verifyToken, logout); 

export default router;  