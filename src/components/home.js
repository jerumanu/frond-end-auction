import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const home = () => {
    return (
        <div>
            <h1>vehicle bid</h1>
            <p>Our Business Solutions offer a range of loans and financing options, sustained by 
                guidance from a team of business professionals who concentrate on helping improve cash flow,
                 providing credit solutions,and on managing payroll. go ahead and discover solutions
                  that'll help you business run effectively.</p>

                  <div className ="row">
                   <div className ="col-1-of-3 card  "  >
                       <div className="card-image">
                        <img  src=""  alt="" />
                       </div>

                       <div card-title>
                        <h3> this is my car</h3>
                       </div>
                       <div card-detail>
                        <h3>Price</h3>
                        <h3>mileage</h3>
                        <h3>Location</h3>
                       </div>
                       <a href="detail" class=" btn-text"> More Details &rarr;</a>
                       </div> 
                       <div className ="col-1-of-3 card ">
                       <div className="card-image">
                        <img  src=""  alt="" />
                       </div>

                       <div card-title>
                        <h3> this is my car</h3>
                       </div>
                       <div card-detail>
                        <h3>Price</h3>
                        <h3>mileage</h3>
                        <h3>Location</h3>
                       </div>
                       <a href="detail" class=" btn-text"> More Details &rarr;</a>
                       </div> 
                       <div className ="col-1-of-3  card  ">
                       <div className="card-image">
                        <img  src=""  alt="" />
                       </div>

                       <div card-title>
                        <h3> this is my car</h3>
                       </div>
                       <div card-detail>
                        <h3>Price</h3>
                        <h3>mileage</h3>
                        <h3>Location</h3>
                       </div>
                       <a href="detail" class=" btn-text"> More Details &rarr;</a>
                       </div> 
                  </div>
        </div>
        
       
    )
}

export default home
