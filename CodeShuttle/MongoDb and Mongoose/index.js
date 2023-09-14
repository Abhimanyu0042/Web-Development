const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

const mongoUrl = process.env.mongoUrl;
const user = require('./models/user');
try {
    mongoose.connect(mongoUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }, () => {
        console.log("mongoDB connected");
    })
} catch (error) {
    console.log(error);
}

async function createUser(newUser) {
    const User = new user(newUser); //in memory user document created
    
    // User.save().then(() => {
    //     console.log("user added");
    // });

    const data  = await User.save(); //user saved inside database
    console.log(data);
}

async function findUser() {
    // const User = await user.findById("65008cc9d245fca104de942b"); //find bi using object Id
    // const User = await user.find({email: "kashyapabhimanyu639@gmail.com"}); //Find by parameters
    //const User = await user.findOne({marks: {$gt : 12}}); find first one with matching parameters
    //const User = await user.find({marks: {$gte : 12}}); //all with marks greater than and equal to 12
    const User = await user.find({ email: {$regex: "6"}})

    console.log(User);
    return User;
}

async function updateMarks(userId, marks){
    const User = await user.findById(userId); 
    User.marks = marks;
    const updatedUser = await User.save(); //await is used if i want to do something with its data here we are taking its data to print in console.log
     console.log(updatedUser);
}

// updateMarks("6500a172bcd2c35a297de518",50);

async function deleteUser(userId){
    const User = await user.findById(userId);
    if(!User) return;
    await User.delete();
    console.log("User has been deleted");
}

deleteUser("6500a155537c2f712b28eecb");

// findUser();
// createUser({
//     email: "kashyapabhimanyu639@gmail.com",
//     password: '5678',
//     marks: 18
// })


// findUser("kashyapabhimanyu639@gmail.com");