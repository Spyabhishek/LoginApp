import { Router } from 'express';
const router = Router();

/** Import all controllers */
import * as controller from '../controller/appController.js';
import { resgisterMail } from '../controller/mailer.js';
import Auth1, { localVariables } from '../middleware/auth.js';


/** POST Methods*/
router.route('/register').post(controller.register); // register user
router.route('/registerMail').post(resgisterMail); // send the email
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(controller.verifyUser, controller.login); // login in app


/** GET Methods*/
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all the variables

/** PUT Methods*/
import Auth from '../middleware/auth.js';
router.route('/updateuser').put(Auth1, controller.updateUser); // is use to update the user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // use to reset password

export default router;