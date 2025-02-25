const signIn = require("../models/signin.schema");

const signup = async (req, res) => {
  let { username, email, password } = req.body;
  try {
    console.log(req.body);
    await signIn.create({ username, email, password });
    console.log("User created successfully");
    return res.redirect("/login");
  } catch (error) {
    console.error(error);
  }
};

const signupPage = async (req, res) => {
  await res.render("signup");
};



const login = async (req, res) => {
  const { username, password } = req.body;
  let user = await signIn.findOne({ username: username });

  if (user) {
    if (user.password === password) {
      return res.cookie("username", user.username).redirect("/");
    } else {
      console.log("Password Invalid");
      return res.redirect("/login");
    }
  } else {
    console.log("Invalid Username");
    return res.redirect("/login");
  }
}

const loginPage = async (req, res) => {
  await res.render("login");
};


const logout = (req, res) => {
  req.logOut((error) => {
    if (error) {
      return next(error);
    }
    else {
      res.redirect('/login');
    }

  });
}

module.exports = { signup, signupPage, login, loginPage, logout }