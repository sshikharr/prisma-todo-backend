import { Router } from "express";
import { controllerSignin, controllerSignup } from "../controllers/authController";
const router = Router();

router.post('/signup', controllerSignup);
router.post('/signin', controllerSignin);

export default router;