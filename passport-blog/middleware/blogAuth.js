const passport = require("passport");
const signIn = require("../models/signin.schema");
const LocalStrategy = require("passport-local").Strategy;

// form
const formAuth = (req, res, next) => {
  const { title, image, bname, type, date, dsc } = req.body;

  if (title && image && bname && type && date && dsc) {
    next();
  } else {
    return res.redirect('/');
  }
}

// signup
const singAuth = (req, res, next) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    next();
  } else {
    res.send("All fields are required.");
  }
}

//check the user is authenticated
const isAuth = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

// Passport configuration for local authentication
const localAuth = (passport) => {
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      let user = await signIn.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      let user = await signIn.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}


module.exports = {formAuth, singAuth, isAuth, localAuth};