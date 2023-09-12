const User = require("../models/user");

const signupController = async (req,res) => {
    console.log('signup controller called');

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        res.status(403).send('Email and password are required');
        return;
    }
    // const id = Math.floor(Math.random()*1000);

    //check if user email is already present or not
    const user = User.findOne({email});
    if(user){
        res.send('User is already present');    
        return;
    }

    const newUser = new User({ email , password });
    await newUser.save();

    res.status(200).json({newUser});
}

const loginController = async (req,res) => {
    console.log('login controller called');

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        res.status(403).send('Email and password are required');
        return;
    }
    const user =await User.findOne({email});
    console.log(user);
    if(!user){
        res.status(404).send('User not found!');
        return;
    }
    if(user.password !== password){
        res.status(401).send('Incorrect Password');
        return;
    }
    
    res.status(200).json({
        email: user.email
    }); 
}

const getUserController = (req,res) => {
    const id = req.params.id;
    if(!id){
         res.status(403).send('User id is required'); 
         return;
    }
    const user =  User.findById({id});

    if(!user){
        res.status(404).send('User not found');
        return;
    }

    res.status(200).json(user);
}

module.exports = {
    signupController,
    loginController,
    getUserController
}