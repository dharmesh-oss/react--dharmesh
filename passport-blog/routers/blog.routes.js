const { Router } = require("express");
const { index, form, submit, deleteData, getEditData, editData } = require("../controllers/form.controllers");
const { formAuth, singAuth, isAuth } = require("../middleware/blogAuth");
const { signup, signupPage, loginPage, login, logout } = require("../controllers/user.controller");
const passport = require("passport");

const router = Router();

router.get("/", isAuth, index);

router.get("/form", isAuth, form);
router.post("/submit", formAuth, isAuth, submit);
router.get("/deleteData/:id", deleteData);
router.get("/editData", isAuth, getEditData);
router.post("/editData/:id", formAuth, editData);

router.get("/signup", signupPage);
router.post("/signup", singAuth, signup);
router.post("/local", passport.authenticate('local', { successRedirect: "/", failureRedirect: "/login" }));
router.get("/login", loginPage);
router.post("/login", login);
router.get("/logout", logout);

module.exports = { router };
