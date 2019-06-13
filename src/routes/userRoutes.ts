import { Request, Response, Router } from "express";
import { UserController } from "../controllers/userController"
const userController: UserController = new UserController();

export const userRoutes: Router = Router();
userRoutes.get('/',userController.getUser);
userRoutes.get('/:userId',userController.getUserWithID);
userRoutes.put('/:userId',userController.updateUser);
userRoutes.delete('/:userId',userController.deleteUser); 