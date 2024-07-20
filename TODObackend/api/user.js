const express = require("express");
const { user } = require("../middleware/validation");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { ZodError } = require("zod");


dotenv.config();
const key = process.env.SECRET_KEY;
const router = express.Router();

// Create user
router.post("/signUp", async (req, res) => {
  const body = req.body;
  try {
    const valid = await user.parseAsync(body);
    if (!valid) {
      res.status(400).json({
        message: "error"
      });
    }

    let newUser = await User.findOne({ email: body.email });
    if (newUser) {
      res.status(403).json({
        message: "User already exists"
      });
      return;
    }
    newUser = await User.create({
      email: body.email,
      password: body.password
    });
    if (!key) {
      throw new Error("Secret Key is not set");
    }
    const userId = newUser._id;
    const token = jwt.sign({ userId }, key);

    res.json({
      message: "User Created Successfully",
      newUser,
      token
    });
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("err");
      return res.status(404).json({
        message: error.errors[0].message
      });
    }
    res.status(404).json({
      message: "Backend Issue"
    });
  }
});

// Sign in
router.post("/signin", async (req, res) => {
  const body = req.body;
  try {
    await user.parseAsync(body);

    const existUser = await User.findOne({
      email: body.email,
      password: body.password
    });

    if (!existUser) {
      return res.status(401).json({
        message: "Wrong Credentials"
      });
    }
    if (!key) {
      throw new Error("Secret key is not set");
    }
    const id = existUser._id;
    const token = jwt.sign({ id }, key);
    res.json({
      message: "User logged in successfully",
      token,
      existUser
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(401).json({
        message: error.errors[0].message
      });
    } else {
      res.json({
        message: "Backend Issue"
      });
    }
  }
});

// Practice route
router.get("/", async (req, res) => {
  res.json({
    message: "hello from user"
  });
});

module.exports = router;

