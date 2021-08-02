import React, {useEffect, useState} from 'react';
import Link from "next/link";
import User from "../api/User";
import {useAuth} from "../hooks";
import {useRouter} from "next/router";

const Login = () => {
    const router = useRouter()
    let {login} = useAuth()
    const initialError = []
    let [ useremail, setUseremail ] = useState('');
    let [ userpassword, setPassword ] = useState('');
    let [ errormessage, setErrorMessage] = useState([]);
    let newError = [];
    const  clearState = () => {
        setErrorMessage(errormessage => [...initialError])
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
            let data = new FormData();
            clearState()
            data.append('email',useremail);
            data.append('password',userpassword);
            try {
                const loginAttempt = await login(useremail, userpassword).then(function (response){
                    console.log(response.data)
                    if (response.ok === true) {
                        router.push('/profile');
                    } else {
                        alert('Login failed');
                    }
                });

            } catch (error) {
                console.error(error);
            }

    }
    return (
        <>
                <div  className="container mt-4 mt-md-5 d-flex justify-content-center">
                    <div className="card card-custom rounded shadow-sm col-12 col-md-6">
                        <p className="fs-3 text-center mt-3 mt-md-5">Log In</p>
                        <div className="err">
                            {errormessage.map((errors,index) =>
                                <p className="text-danger text-center small mb-0 pb-0"  key={index}>{errors}</p>)}
                        </div>
                        <div className="card-body">
                            <form onSubmit={ ( e ) => handleSubmit( e ) } action="" method="post"   >
                                <div className="input-group-lg mt-3">
                                    <input type="email" className="form-control form-control-c"
                                           onBlur={ ( e ) => setUseremail( e.target.value ) } placeholder="Useremail"
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
                                    <br/>
                                    <Link href="/register">
                                        <a  className="a-custom-appoinment">Sign up</a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Login;
// export async function getServerSideProps({ res, req }) {
//     // Is there a better way to know the user is already logged in?
//     try {
//         const isAuthed = await fetch(`https://gcare.com.bd/api/user`, {
//             credentials: "include",
//             headers: {
//                 accept: 'application/json',
//                 referer: 'https://gcare.com.bd',
//                 cookie: req.headers.cookie,
//             }
//         });
//         if (isAuthed.status === 200) {
//             res.setHeader('Location', "/");
//             res.statusCode = 302;
//
//             return { props: { } };
//         }
//     } catch (error) {
//         console.error(error);
//     }
//
//     const csrf = await fetch(`https://gcare.com.bd/sanctum/csrf-cookie`)
//     res.setHeader('set-cookie', csrf.headers.raw()['set-cookie']);
//
//     return { props: { } };
// }