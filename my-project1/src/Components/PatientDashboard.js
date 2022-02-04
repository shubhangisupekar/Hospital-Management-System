import {useEffect,useState} from 'react';

 
 
 
export const PatientDashboard = () => {
   
   const[record,setRecord] = useState([])
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },)
    
 
    return (
        <>
    <div class="col main pt-5 mt-3">
         
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">PATIENT DASHBOARD</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/Appointmentt">APPOINTMENT <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Dicharge">DISCHARGE</a>
      </li>
      
    </ul>
  </div>
</nav>

        <div  class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            
        </div>
        <div class="row ">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-danger" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h1 class="text-uppercase"> </h1>
                        <h1 id="one" class="display-4">DOCTOR NAME</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-warning">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h1 class="text-uppercase"> </h1>
                        <h1 class="display-4">PAIN</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-3x"></i>
                        </div>
                        <h1 class="text-uppercase"> </h1>
                        <h1 class="display-4">DOCTOR MOBILE</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body bg-success">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h1 class="text-uppercase"></h1>
                        <h1 class="display-4">DOCTOR ADDRESS</h1>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white h-100">
                    <div class="card-body bg-danger">
                        <div class="">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h1 class="text-uppercase"></h1>
                        <h1 class="display-4">DOCTOR DEPARTMENT</h1>
                    </div>
                </div>
            </div>
            
            
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white  h-100">
                    <div class="card-body bg-warning">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h1 class="text-uppercase"></h1>
                        <h1 class="display-3">ADMIN DATE</h1>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/>
        
            <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              
            </div>
            </div>
            </div>
       
        </>
            
 
    
    )
}
 
