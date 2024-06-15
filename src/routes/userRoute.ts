import { Router } from "express";
import userController from "../controller/userController.js";

const router = Router();

router.get("/user", userController.getUsers);
router.post("/user", userController.addUser);
router.put("/user/:id", userController.updateUser);
router.get("/user/:id", userController.findOneUser);
router.delete("/user/:id", userController.deleteUser);

export default router;
