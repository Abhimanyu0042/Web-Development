// const users = [{
//     id:'123',
//     email:'abhi@gmail.com',
//     password:'1234',
// },
// {
//     id:'761',
//     email:'akash@gmail.com',
//     password:'5424',
// }]

// module.exports = users;

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true, //if we try to save a user without email then it shows error
    },
    password: String,
    marks: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('user',userSchema);