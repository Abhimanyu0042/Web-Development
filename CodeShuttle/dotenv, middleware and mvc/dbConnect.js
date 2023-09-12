const mongoose = require('mongoose');

module.exports = () => {
const mongoUrl = "mongodb+srv://kashyapabhimanyu639:8g6zArY2LmZbjbdB@cluster0.qdjoxdi.mongodb.net/?retryWrites=true&w=majority"

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
}