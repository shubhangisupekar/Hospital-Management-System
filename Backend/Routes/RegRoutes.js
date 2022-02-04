const express=require('express')

var router=express.Router()


var RegController=require('../controller/RegController')

 router.post('/RegDetails',RegController.RegDetails)
 router.post('/adminLogin',RegController.adminLogin)

 module.exports=router;



 

