const RegModal=require('../DB/Reg')
const bcrypt=require("bcrypt")
const res = require('express/lib/response')
const password ='Shub8@'

/*exports.RegDetails=(req,res)=>{
    res.send("hi")
}*/


exports.RegDetails=(req,res)=>{
    console.log("aaya")
    console.log(req.body)

    if(req.body.password.length>=6){
     bcrypt.genSalt(10,function(err,salt){
         bcrypt.hash(String(req.body.password),salt).then((hash)=>{

    

    //console.log(req.body)

    RegModal.insertMany({
        "firstname":req.body.firstname, "lastname": req.body.lastname,  "password": hash, 
        "confirmPassword":hash}).then((result)=>{
            console.log(result)
            res.send(" registeded")

        })
        .catch((error)=>{
            console.log(error)
            if(error.code==11000)
            { 

                res.send(" already registered")
            }
            else
            {   
            res.send("somthing went wrong")    
            }
        })
    }).catch((err)=>{
        console.log(err)
        res.send("error in gen hash")
    })
})
}
else
{
    res.send("passwoed must be six char or grater")
}
}
exports.adminLogin  =  (req,res) =>{

    RegModal.findOne({"username" : req.body.username}).then((data)=>{
        console.log(data)

        if(data  ===  null || data === undefined  )
        {

            res.send("You Are Not a Registered User")
        }
        else
        {
             //res.status(200).send({ msg :  "Data Found with hash "  , hash : data.password})

            bcrypt.compare(req.body.password , data.password  ,function(err , result){
                if(err ){

                    res.status(400).send("Password Wrong")
                }

                if(result  === true  )
                {
                    res.status(200).send({msg : "Login Successfully" , id : data.id })

                }
                 else 
                {
                    res.status(401).send({msg : "Login Failed" , id : null })

                }
               
            })
            
        }

    }).catch((err)=>{
        console.log(err)
        res.send("Error Occured")
    })

}

