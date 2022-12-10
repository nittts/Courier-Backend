import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import getLoggedInUserController from "../../controllers/users/getLoggedInUser.controller";
import getSingleUserController from "../../controllers/users/getSingleUser.controller";
import getUsersController from "../../controllers/users/getUsers.controller";
import queryUserByTypeController from "../../controllers/users/queryUserByType.controller";
import updateLoggedInUserController from "../../controllers/users/updateLoggedInUser.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import userLoginController from "../../controllers/users/userLogin.controller";

import verifyAuthTokenMiddleware from "../../middlewares/verifyToken.middleware";
import verifyAdmMiddleware from "../../middlewares/verifyUser.middleware";

const router = Router();

router.get("/all", verifyAuthTokenMiddleware, verifyAdmMiddleware, getUsersController);
router.get("/:id", verifyAuthTokenMiddleware, getSingleUserController);
router.get("/type", verifyAuthTokenMiddleware, verifyAdmMiddleware, queryUserByTypeController);
router.get("/profile", verifyAuthTokenMiddleware, getLoggedInUserController);
router.post("/", createUserController);
router.post("/login", userLoginController);
router.patch("/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, updateUserController);
router.patch("/profile/update", verifyAuthTokenMiddleware, updateLoggedInUserController);
router.delete("/:id", verifyAuthTokenMiddleware, verifyAdmMiddleware, deleteUserController);

export default router;
