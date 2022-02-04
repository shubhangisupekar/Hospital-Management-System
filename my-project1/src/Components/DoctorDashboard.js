import {useEffect,useState} from 'react';
import MaterialTable from 'material-table';

 
 
 
export const DoctorDashboard = () => {
   
   const[record,setRecord] = useState([])
   const [data, setData] = useState([])
    const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Web Link", field: 'website' },
    ]
   
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setData(res))
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },)
    
 
    return (
        <>
        
    <div class="col main pt-5 mt-3">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">DOCTOR</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/Appointmentt">TOTAL DOCTOR<span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Dicharge">APPOIENTMENT</a>
      </li>
      
    </ul>
  </div>
</nav>
</div>
<br/>
<br/>


   
    <div class="row placeholders mb-3">
    <div class="col-6 col-sm-3 placeholder text-center">
    <img src="//placehold.it/200/dddddd/fff?text=1" class="mx-auto img-fluid rounded-circle 1" alt="Generic placeholder thumbnail"/>
    <h4>Responsive</h4>
    <span class="text-muted">DOCTOR</span>
    </div>
    <div class="col-6 col-sm-3 placeholder text-center">
    <img src="//placehold.it/200/e4e4e4/fff?text=2" class="mx-auto img-fluid rounded-circle 2" alt="Generic placeholder thumbnail"/>
    <h4>Frontend</h4>
    <span class="text-muted">HEALTH CARE</span>
    </div>
    <div class="col-6 col-sm-3 placeholder text-center">
    <img src="//placehold.it/200/d6d6d6/fff?text=3" class="mx-auto img-fluid rounded-circle 3" alt="Generic placeholder thumbnail"/>
    <h4>HTML5</h4>
    <span class="text-muted">DIGNOSTIC</span>
    </div>
    <div class="col-6 col-sm-3 placeholder text-center">
    <img src="//placehold.it/200/e0e0e0/fff?text=4" class="center-block img-fluid rounded-circle 4" alt="Generic placeholder thumbnail"/>
    <h4>Framework</h4>
    <span class="text-muted">CARDIOLOGY</span>
    </div>
    </div> 
    <div class="Apps" style={{padding:"50px"}}>
      <h1 align="center">DOCTORS INFORMATION</h1>
      
      <MaterialTable
        title="Doctor Data"
        data={data}
        columns={columns}
      />
      <div class="Apps" style={{padding:"50px"}}>
      <h3 align="center">RECORDS OF DOCTOR</h3>
      <h4 align='center'>Appointments</h4>
      <MaterialTable
        title="Appointment Data"
        data={data}
        columns={columns}
      />
      </div>
      </div>
      </>
    )
 }
            


export default DoctorDashboard ;
