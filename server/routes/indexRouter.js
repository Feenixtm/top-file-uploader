// Login, Login-demo, Log-out, Sign-up

const express = require("express");
const indexRouter = express.Router();

const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.indexGet);

indexRouter.get("/login", indexController.logInGet);
indexRouter.post("/login", indexController.logInPost);
indexRouter.get("/login/demo", indexController.logInWithDemo);

indexRouter.post("/log-out", indexController.logOutPost);

indexRouter.get("/sign-up", indexController.signUpGet);
indexRouter.post("/sign-up", indexController.signUpPost);

module.exports = indexRouter;