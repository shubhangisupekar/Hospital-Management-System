import axios from 'axios';

const BaseUrl ="http://localhost:8989/"
export const getresiteruser = () =>{
    var data={
        "firstname":"shubhangi",
        "lastname":"supekar",
        "password":"Shub8@",
        "confirmPassword":"Shub8@"
    }
    axios.post('http://localhost:8989/reg/RegDetails', data )
    .then((data)=>{
  console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
    
}


