const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { User } = require('../db');
const {JWT_SECRET} = require('../config');

const userRouter = express.Router();

const signupSchema = zod.object({
    userName : zod.string().email(),
    password : zod.string().min(6),
    firstName : zod.string(),
    lastName : zod.string()
})

userRouter.post('/signup', async (req, res) => {
    const body = req.body;

    const {success} = signupSchema.safeParse(body);

    if (!success)
    {
        return res.status(411).json({
            message : "Incorrect inputs"
        });
    }

    const user = User.findOne({
        userName : body.userName
    });

    if (user._id)
    {
        return res.status(411).json({
            message : "Email already taken"
        });
    }

    const dbUser = await User.create(body);

    const token = jwt.sign({
        userId :  dbUser
    }, JWT_SECRET);

    res.json({
        message : "User created successfully",
        token : token
    });
});

userRouter.post('/signin', async (req, res) => {
   const body = req.body;

   const user = await User.findOne({
    userName : body.userName,
    password : body.password
   });

   if (user === null)
   {
    res.status(411).json({
        message : "Invalid email or password"
    });
   }

   const token = jwt.sign({
    userId : user.userName
   });

   res.json({
    message : "Logged in",
    token : token
   });
});

module.exports = userRouter;