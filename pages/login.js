import React,{ useState } from 'react';
import Link from "next/link";
import User from "./api/User";
function Login(props) {
    let [ useremail, setUseremail ] = useState('');
    let [ userpassword, setPassword ] = useState('');
    let login_token = null;
    const handleSubmit = async (e) =>{
        e.preventDefault();
            let data = new FormData();
            data.append('useremail',useremail);
            data.append('userpassword',userpassword);
            let response = User.login(data);
            if( (await response).data.success ){
                console.log("Login Successful");
                login_token = response['token'];
            } else {
                console.log("Failed to Login");
            }

    }
    return (
        <>
            <div className="container mt-4 mt-md-5 d-flex justify-content-center">
                <div className="card card-custom rounded shadow-sm col-12 col-md-6">
                    <p className="fs-3 text-center mt-3 mt-md-5">Log In</p>
                    <div className="card-body">
                        <form onSubmit={ ( e ) => handleSubmit( e ) } action="" method="post"   >
                            <div className="input-group-lg mt-3">
                                <input type="email" className="form-control form-control-c"
                                       onInput={ ( e ) => setUseremail( e.target.value ) } placeholder="Useremail"
                                       aria-label="Username" aria-describedby="input-username"/>
                            </div>
                            <div className="input-group-lg mt-3">
                                <input type="password" className="form-control form-control-c"
                                       onInput={ ( e ) => setPassword( e.target.value ) } placeholder="Password"
                                       aria-label="Password" aria-describedby="input-password"/>
                            </div>
                            <div className="form-inline mt-3">
                                <input type="checkbox" name="remember" id="remember"/>
                                    <label htmlFor="remember" className="text-muted">&nbsp; Remember me</label>
                                    <Link href="/forgotpassword">
                                        <a  className="a-custom-appoinment" id="forgot"
                                           className="font-weight-bold">Forgot password?</a>
                                    </Link>

                            </div>

                            <div className="mt-4 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary w-100 p-2" value="login">Log In</button>
                            </div>
                            <div className="text-center pt-4 text-muted">Don't have an account?
                                <Link href="/register">
                                    <a  className="a-custom-appoinment">Sign up</a>
                                </Link>
                            </div>

                            {/*<div className="row row-custom mt-3 d-flex justify-content-center">*/}
                            {/*    <div className="col-3 col-md-2 d-flex justify-content-center">*/}
                            {/*        <a href="#" className="icon-login a-custom"><i className="fab fa-google"></i></a>*/}
                            {/*    </div>*/}
                            {/*    <div className="col-3 col-md-2 d-flex justify-content-center">*/}
                            {/*        <a href="#" className="icon-login a-custom"><i className="fab fa-facebook"></i></a>*/}
                            {/*    </div>*/}
                            {/*    <div className="col-3 col-md-2 d-flex justify-content-center">*/}
                            {/*        <a href="#" className="icon-login a-custom"><i*/}
                            {/*            className="fab fa-linkedin-in"></i></a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;