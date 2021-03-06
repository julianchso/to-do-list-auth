// routes for authentication

const express = require("express");
const passport = require("passport");
const router = express.Router();

// @desc Auth with Google
// @route GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] })); // only asking for profile data

// @desc Google auth callback
// @route GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/todos");
  }
);

// @desc Logout user
// @route /auth/logout

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;

// can copy and paste this file. No reason to type from scratch.