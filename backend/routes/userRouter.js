const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const {hashPassword} = require('../passwordHashing');
const { User, Account } = require('../db');
const {JWT_SECRET} = require('../config');
const {router} = require('./mainRouter');

const userRouter = express.Router();

const signupSchema = zod.object({
    userName : zod.string().email(),
    password : zod.string().min(6),
    firstName : zod.string(),
    lastName : zod.string()
})

const signinSchema = zod.object({
    userName : zod.string().email(),
    password : zod.string().min(6)
});

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

    body.password = hashPassword(body.password);

    const dbUser = await User.create(body);
    const userId = user._id;

    await Account.create({
        userId,
        balance : 1 + Math.random() * 10000
    })

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

    const {success} = signinSchema.safeParse(body);

    if (!success)
    {
        return res.status(411).json({
            message : "Invalid Inputs"
        });
    }

    body.password = hashPassword(body.password);

   const dbUser = await User.findOne({
    userName : body.userName,
    password : body.password
   });

   if (dbUser == null)
   {
    return res.status(411).json({
        message : "Invalid userName or password"
    });
   }

   const token = jwt.sign({
    userId : dbUser._id
   }, JWT_SECRET);

   res.json({
    message : "Logged in",
    token : token
   });
});

const updateBody = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
})

router.put('/', authMiddleware, async (req, res) => {
    const body = req.body;

    const {success} = updateBody.safeParse(body);

    if (!success)
    {
        res.status(411).json({
            message : "Error while updating information"
        });
    }

    await User.updateOne(body, {
        id : User.userId
    });

    res.json({
        message : "Updated successfully"
    });
});

userRouter.get('/bulk', async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or : [
            {firstName : {
                '$regex' : filter
            }},
            {lastName : {
                '$regex' : filter
            }}
        ]
    });

    res.json({
        user : users.map(user => ({
            userName : user.userName,
            firstName : user.firstName,
            lastName : user.lastName,
            _id : user._id
        }))
    });
});

module.exports = {userRouter};