const express = require("express");
const userController = require("../controller/users");
const router = express.Router();

router.get("/allUserInfo", userController.getusersInfo);
router.get("/gitUserRights", userController.getUserRights);
router.post("/controleURNWW", userController.controleURNWW);
router.post("/addUser", userController.addUser);
router.post("/addUserRight", userController.addUserRight);

module.exports = router;
