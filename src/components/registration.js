import React from 'react'
// import { Link ,Redirect} from 'react-router-dom'
// import { connect } from 'react-redux'


const registration = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option></option>
                    <option>Seller</option>
                    <option>Deller</option>
                    <option>Buyer</option>

                    
                    </select>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label> Validate Password</label>
                    <input type="password" className="form-control" placeholder="Validate password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
                </div>
                 </div>
    )
}

export default registration
