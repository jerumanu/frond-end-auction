import React, { useState } from 'react';
// import { Link ,Redirect} from 'react-router-dom'
// import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../action/auth';
import axios from 'axios';

const Registration = ({signup , isAuthenticated}) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    });
    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(first_name, last_name, email, password, re_password);
            setAccountCreated(true);
        }
    };
    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    const continueWithFacebook = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };  if (isAuthenticated) {
        return <Redirect to='/' />
    }
    if (accountCreated) {
        return <Redirect to='/login' />
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={e => onSubmit(e)}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="First name"
                    name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text"
                     className="form-control"
                      placeholder="Last name"
                      name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                       />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required/>
                </div>
               <div className="form-group">
                    <label>Password</label>
                    <input type="password" 
                    className="form-control" 
                    placeholder="Enter password"
                    name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                     />
                </div>
                <div className="form-group">
                    <label> Validate Password</label>
                    <input type="password"
                     className="form-control" 
                     placeholder="Validate password"
                     name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                      />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
            <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue With Google
            </button>
            <br />
            <button className='btn btn-primary mt-3' onClick={continueWithFacebook}>
                Continue With Facebook
            </button>
            <p className='mt-3'>
                Already have an account? <Link to='/sign-in'>Sign In</Link>
            </p>
                </div>
                 </div>
    );
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth?.isAuthenticated
});

export default connect(mapStateToProps, {signup  })(Registration)
