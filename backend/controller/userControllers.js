const asyncHandler=require('express-async-handler');

const User=require('../models/userModel')

const generateToken=require('../config/generateToken');

const registerUser=asyncHandler(async(req, res)=>{
    const {name,email, password, pic }=req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please Enter all the fields");
    }
    const userExists= await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error(" User exist please login");
    }

    const user = await User.create({ name , email, password ,pic});
    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name, 
            email:user.email,
            pic:user.pic,
            token: generateToken(user._id),
        }) 
    }
    else{
        res.status(400);
        throw new Error("Failed to Creat the user");
    }
})

const authUser=asyncHandler(async(req, res)=>{
    const {email, password}=req.body;

    const user=await User.findOne({email});

    console.log(user.password , await user.matchPassword(password));

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user.id,
            name:user.name, 
            email:user.email,
            pic:user.pic,
            token: generateToken(user._id),
        })
    }
    else{
        res.status(400);
        throw new Error("Invalid email/password");
    }
})

module.exports={registerUser, authUser}