const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

const express = require('express');
const app = express();
app.use(express.json());

const dbconnect = require("./dbConnect");


const mainRouter = require('./routes/index');
app.use('/api',mainRouter); //here we have put all routers in a single one to reduce clutter

// const postRouter = require('./routes/post');
// app.use('/post',postRouter);


// function middleware1(req,res,next){

// }
// app.use(middleware1);


//Middlewares
app.use((req,res,next) => {
    console.log(req.method,req.url, new Date().toTimeString());
    next();
    // if(req.body && req.body.name === 'Abhi'){
    //     next();
    // }else{
    //     res.send('Not allowed')
    // }
})


 
app.get("/",(req,res) => {
     res.send({
        data:'nice',
     })
})

dbconnect(); 

const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log('started listening on port:',PORT); 
})