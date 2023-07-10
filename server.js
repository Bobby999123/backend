// Create a server 
const express = require('express');  // takes a instance of expess 

const app = express(); //save it as app

// bodyparser is requires to parse it 
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.listen(5000,()=>{         //listen to server
    console.log("Server start at port no: 5000");
})

app.get('/',(req,res)=>{      //get request
    res.send("Bobby's server");
})

app.post('/api/cars',(req,res)=>{       //post request

    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("Car submitted sucessfully");

})

// Connecting mongodb database
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/firstConnect',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("Data Connected Sucessfully")})
.catch((error)=>{console.log("Error Received")
console.log(error)});







