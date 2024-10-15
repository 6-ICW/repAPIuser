const express = require("express");
const userController = require("../controller/users");
const router = express.Router();

router.get("/allUserInfo", userController.getusersInfo);
router.get("/gitUserRights", userController.getUserRights)
router.post("/controleURNWW", userController.controleURNWW);
router.post("/addUser", userController.addUser);

module.exports = router;
