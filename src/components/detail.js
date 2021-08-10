import React from 'react'
// import carousel from carousel
// 

const detail = () => {
    return (
        <div className="row">
            <div className=" col-1-of-2">
            <h1>Title</h1>
            <h2>Price</h2>
            <h2>Registration:</h2>
            <h2>Location: </h2>
            
            <h1>Overview</h1>
            
            <div className="row">

                
                <div className=" col-1-of-2">
                    <h3 >Mileage</h3>
                    <h3>Body Type</h3>
                   
                    <h3>Colour</h3>

               </div>
                <div className=" col-1-of-2">
                <h3>Year</h3>
                <h3>Transmission</h3>
                </div>
                </div>
            </div>
            <div className=" col-1-of-2">

            <form>
                <h3>Interested in this vehicle?</h3>
        
                <p>Please fill the form below and submit to complete your bid.</p>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter your Name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter your Phone Number" />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" className="form-control" placeholder="Enter your Location" />
                </div>

               

                <button type="submit" className="btn btn-primary btn-block">bid</button>
                
            </form>

        <vehicle />
            </div>
        </div>
    )
}

export default detail
