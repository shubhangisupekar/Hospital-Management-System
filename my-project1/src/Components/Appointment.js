import React from 'react'

export const Appointment = () =>{
   return (
   <div>
      <br/><br/><br/>
  
    <marquee class="headapp" behavior="alternate" direction="left"><h3>Please Take Appointment Before Reach to Hospital</h3></marquee>
    <div class="container mt-5">
    <div class="row">
        <div class="col-md-6 offset-md-3 border p-4 shadow bg-light">
            <div class="col-12">
                <h3  class="fw-normal text-secondary fs-4 text-uppercase mb-4">Appointment</h3>
            </div>
            <form action="">
                <div class="row g-3">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Enter Your Name"/>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Age"/>
                    </div>
                    <div class="col-md-6">
                        <input type="tel" class="form-control" placeholder="Phone Number"/>
                    </div>
                    
                    <div class="col-md-6">
                        <select class="form-select">
                            <option selected>Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            
                        </select>
                    </div>

                    <div class="col-md-6">
                        <input type="date" class="form-control" placeholder="Enter Date"/>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Enter Weight"/>
                    </div>
                    <div class="col-12">
                        <select class="form-select">
                            <option selected>Purpose Of Appointment</option>
                            <option value="1">Treatments</option>
                            <option value="2">Operation</option>
                            <option value="3">Showing Reports</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <textarea class="form-control" placeholder="Message"></textarea>
                    </div>
                    <div class="col-12 mt-5">                        
                        <button id="btn" type="submit" class="btn btn-primary float-end">Book Appointment</button>
                        <button type="button" class="btn btn-outline-secondary float-end me-2">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>


       </div>
    
   )


}