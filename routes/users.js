const express = require("express");
const userController = require("../controller/users");
const router = express.Router();

router.get("/allUserInfo", userController.getusersInfo);
router.get("/getRights", userController.getRights);
router.get("/getUserRights", userController.getUserRights);
router.post("/controleURNWW", userController.controleURNWW);
router.post("/addUser", userController.addUser);
router.post("/addUserRight", userController.addUserRight);

module.exports = router;
