import { Router } from "express";
import userRouter from "./user_router.js";

const router = Router();

router.use(userRouter);

export default router;