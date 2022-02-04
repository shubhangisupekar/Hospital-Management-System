import {useEffect,useState} from 'react';

export const AdminDashboard = () => {
   
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
         
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            
        </ol>
        </nav>
        
 
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">1 TOTAL DOCTOR</h6>
                        <h6 class="display-4">APPROVE REQUIRED:1</h6>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">1 TOTAL PAIENT</h6>
                        <h6 class="display-4">WANTS TO ADMIN:1</h6>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">1 TOTAL APPOINTMENT</h6>
                        <h6 class="display-4">APPROVE APPOINTMENT:0</h6>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">ADMIN</h6>
                        <h1 class="display-4">1 DOCTOR</h1>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/>
        
       
        <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               RECENT DOCTORS
              </h5>
              <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">DEPARTMENT</th>
      <th scope="col">MOBILE</th>
      <th scope="col">STATUS</th>
      <th scope="col">EMAIL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Cardiology</td>
      <td>9874563210</td>
      <td>Active</td>
      <td>mark123@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Homiothapic</td>
      <td>8745632109</td>
      <td>Active</td>
      <td>jacob345@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>SURGEN</td>
      <td>7456321089</td>
      <td>Active</td>
      <td>larry567@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Garry</td>
      <td>HEART SPECIALIST</td>
      <td>8965741230</td>
      <td>Active</td>
      <td>garry5678@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Steave</td>
      <td>Diabetic</td>
      <td>8996852347</td>
      <td>Active</td>
      <td>steave892@gmail.com</td>
    </tr>
  </tbody>
</table>
                
            <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               RECENT PATIENT
              </h5>
              <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">SYMPTOMS</th>
      <th scope="col">MOBILE</th>
      <th scope="col">ADDRESSS</th>
      <th scope="col">EMAIL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Leanne</td>
      <td>Maleria</td>
      <td>8956237410</td>
      <td>12/1a,Alola</td>
      <td>leanne123@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Ervin</td>
      <td>Heart Problem</td>
      <td>7845120369</td>
      <td>54/1b,Beed</td>
      <td>ervin345@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Clementine</td>
      <td>Diabetic</td>
      <td>8745963201</td>
      <td>55/7t,Solapur</td>
      <td>clementic567@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Patricia</td>
      <td>Dengue</td>
      <td>8965741230</td>
      <td>89/8u,Satara</td>
      <td>patricia5678@gmail.com</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Chelsey</td>
      <td>Canser</td>
      <td>8996852347</td>
      <td>96/1d,Bhore</td>
      <td>chelsey892@gmail.com</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
</div>
</div>
 </>
)
}
