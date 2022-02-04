import React,{useState} from 'react';
import "./navbar.css";
import Patient from './Components/Patient';
import { useLinkClickHandler,useNavigate } from 'react-router-dom';
import img1 from "./images/adminic.png"
import img2 from "./images/doctoric.png"
import img3 from "./images/patientic.png"
import img4 from "./images/969131cc-aad7-4bb6-a336-dfa82bc9ebf6.jpg"
import { colours } from 'nodemon/lib/config/defaults';

const Navbar=()=>{
const[mode,setMode]=useState('dark')
const navigate=useNavigate()
return(

<>
    
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    
  <a class="navbar-brand" href="#">Life Care</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active">
  
  <a class="nav-link" href="#">Admin </a>
  </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Doctor</a>
       </li>
      <li class="nav-item">
        <a class={`nav-link ${window.location.href.includes('/Comonents/Patient')?'active':""}`} style={{cursor:"pointer"}}onClick={()=>navigate('/Components/Patient')}>Patient</a>
      </li>
      </ul>
      
</div>
</nav>


<div>
<img src={img4} className='image'/>
</div>
<br/><br/><br/>
<div>
{/* <img src={img1} className='image1'/>  */}

  <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={img1} alt="Card image cap" />
  <div className="card-body"></div>
  <button>View</button>
  
</div>

{/* <img src={img2}className='image1'/> */}

<div className="card" style={{width: '18rem'}}>
<img className="card-img-top" src={img2} alt="Card image cap"/>
<div className="card-body"></div>
<button>View</button>
</div>

{/* <div>
<img src={img3}className='image1'/>
<button>submit</button>
</div> */}

  <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={img3} alt="Card image cap" />
  <div className="card-body"></div>
  <button>View</button>
</div>

</div>
<br/><br/>


</>
)}



export default Navbar