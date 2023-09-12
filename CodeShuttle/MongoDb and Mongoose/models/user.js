const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    // name: String,
    marks: Number,
    // hobbies: [String]
});

module.exports = mongoose.model('user',userSchema);