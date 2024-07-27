import { Router } from "express";
import { controllerCreate, controllerDelete, controllerGet, controllerUpdate } from "../controllers/todoController";
import { authMiddleware } from "../middlewares/authMiddleware";
const router = Router();

router.post('/create',authMiddleware, controllerCreate);
router.post('/delete/:id', controllerDelete);
router.put('/update/:id', controllerUpdate);
router.get('/get',authMiddleware, controllerGet);

export default router;


