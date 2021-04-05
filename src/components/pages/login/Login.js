import React, { useState } from 'react'
import '../login/Login.css'

function Login() {

    const [state, setState] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    })

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        setState({
            [name]:value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-5 mb-5">
                    <div className="sign-left">
                        <div className="left-side">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="sign-right">
                        <div className="title text-center mb-4">
                            <h1>Create Account</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-2">
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    class="form-control" 
                                    placeholder="enter your firstname"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    class="form-control" 
                                    placeholder="enter your lastname"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input 
                                    type="email" 
                                    name="email" 
                                    class="form-control" 
                                    placeholder="enter your email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input 
                                    type="password" 
                                    name="password" 
                                    class="form-control" 
                                    placeholder="enter your pasword"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-btn text-center mb-3">
                                <button type="submit" className="btn btn-success">Sign Up</button>
                            </div>
                            <div className="login-link text-center mb-3">
                                <a href="#">Forgot Password ?</a>
                            </div>
                            <div className="login-text text-center mb-4">
                                <p>Or login with</p>
                            </div>
                        </form>
                    </div>
                    <div className="row text-center">
                        <div className="col-4">
                            <div className="icon-one">
                                <a href="#"><i class="fab fa-facebook-square"></i></a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="icon-two">
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="icon-three">
                                <a href="#"><i class="fab fa-google-plus-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;