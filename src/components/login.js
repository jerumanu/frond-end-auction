import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../action/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
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
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }


    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={e => onSubmit(e)} >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
                    className="form-control"
                     placeholder="Enter email"
                     name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                     />
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

               

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
           < button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue With Google
            </button>
            <br />
            <button className='btn btn-primary mt-3' onClick={continueWithFacebook}>
                Continue With Facebook
            </button>
            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p className='mt-3'>
                Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
            </div>
        
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth?.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
