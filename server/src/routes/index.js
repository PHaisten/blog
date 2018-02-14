import { Router } from "express";
import blogRouter from "./blog";

let router = Router();

router.use("/blog", blogRouter);

export default router;
