const mongoose =require("mongoose")

const RegSchema =new mongoose.Schema({
    firstname:{
        type : String,
        required : true
    },

    lastname :{
        type : String,
        required : true,
        
    },
    
    password:{
        type : String,
        required : true
    },

    confirmPassword :{
        type : String,
        required : true,
        
    }
});


const Reg=mongoose.model("Reg",RegSchema)
module.exports=Reg