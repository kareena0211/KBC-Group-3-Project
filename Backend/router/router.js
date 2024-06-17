import express from 'express';
// import { login, signup, getAllUsers, GetLoginData, UpdateLoginData, DeleteUserData, logout} from '../controller/loginSignup.js';
import * as loginSignup from '../controller/loginSignup.js';
import * as question from '../controller/Question.js';
import * as lifelines from '../controller/Lifeline.js';
import { verifyToken } from '../Midlewere/authentication.js';
import {signup_Validation, login_Validation} from '../VailidationLiginSignup/liginSignupVailidation.js'

const router = express.Router();

// login/Signup
router.post('/post', signup_Validation, loginSignup.signup);
router.post('/Login', loginSignup.login);
router.get('/Get/signup/All/user', loginSignup.getAllUsers);
router.get('/find/Login/user', verifyToken, loginSignup.GetLoginData);
router.put('/update/login/user/by/email', verifyToken, loginSignup.UpdateLoginData);
router.delete('/delete/login/user/by/email', verifyToken, loginSignup.DeleteUserData);
router.post('/logout/Login/data', verifyToken, loginSignup.logout);

// Question
router.post('/Create/Questions', verifyToken, question.PutQuestion);
router.get('/Get/All/Questions', verifyToken, question.getAllQuestions);
router.get('/Get/Random/Questions', question.getRandomQuestions);
router.delete('/Delete/Question/name', verifyToken, question.deleteQuestion);

// Lifeline
router.post('/Create/LifeLine', verifyToken, lifelines.createLifeline);
router.get('/GetAll/Lifelines', verifyToken, lifelines.getLifelines);
router.delete('/delete/Lifeline/by/name', verifyToken, lifelines.deleteLifeline);

export default router;