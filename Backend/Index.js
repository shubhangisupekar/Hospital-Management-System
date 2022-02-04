
const express=require('express');
const bodyparser=require('body-parser')
const RegRoutes=require('./Routes/RegRoutes')

var app=express()
// app.use(bodyparser.urlencoded({extended :}))
app.use(bodyparser.json())
const port=8989



const mongoose=require('mongoose')

const db=mongoose.connection;

mongoose.connect('mongodb://localhost:27017/UserDetails',{})
db.once('open',()=>{
console.log("database connected")
})


app.use((req , res , next )=> {
	res.setHeader('Access-Control-Allow-Origin' ,'*');
	res.setHeader('Access-Control-Allow-Methods' ,'GET , POST , PUT , PATCH , DELETE');
	res.setHeader('Access-Control-Allow-Headers' ,'Content-Type, X-Requested-With , Accept , Origin, authorization'  );
	res.setHeader('Access-Control-Expose-Headers' , 'authorization');
	next();

});





app.use('/reg',RegRoutes)


app.listen(port,()=>{
    console.log(`server is running on port :${port}`)
})

