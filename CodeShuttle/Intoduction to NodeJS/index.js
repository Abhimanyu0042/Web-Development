// import multiply from './utils'  //ES6 syntax

// const utils = require("./utils"); //Normal JS Syntax
// const {multiply,log} = require("./utils");

// console.log(utils.multiply(3,4));
// utils.log.warning('this is a INFO');
// log.error('Error or woet')

const express = require('express');

const app = express();

app.use(express.json()); //its middleware to use req.body functionality

app.get('/user',(req,res) => {
    console.log('User was called');
    res.send({
        name: 'Abhimanyu',
        age: 20
    });
})

app.get("/random",(req,res) => {
    const max = 6;
    const Random = Math.floor(Math.random() * max)
    console.log(Random); 
})

app.post("/sum",(req,res) => {
    console.log(req.body);
    const n = req.body.a;
    const x = n + 1;

    res.json({
        name: "Abhimanyu",
        age: 20,
        Result: n*x/2,
    })
})

app.post("/average",(req,res) => {
    console.log(req.body);
    const n = req.body.a;
    const x = n + 1;
    const sum = n*x/2

    res.json({
        name: "Abhimanyu",
        age: 20,
        Average: sum/n
    })
})

app.get("/",(req,res) => {
    // res.send("Server is not working"); 
    // res.sendFile(__dirname+"/index.html");
    //dirname is file path
    res.json({
        success: true,
    })
})

app.listen(5000, () => {
    console.log("Listening on port: 5000");
})