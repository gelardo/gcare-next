import React, {useState} from 'react';
import Link from "next/link";
import User from "../api/User";
import {useRouter} from "next/router";

function Register(props) {
    const initialError = []
    const router = useRouter();
    let [ name, setUsername ] = useState('');
    let [ email, setUseremail ] = useState('');
    let [ phone, setUserphone ] = useState('');
    let [ password, setUserpassword ] = useState('');
    let [ confirmpassword, setConfirmpassword ] = useState('');
    let [errormessage, setErrorMessage] = useState([]);
    let newError = [];
    const  clearState = () => {
         setErrorMessage(errormessage => [...initialError])
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        clearState()
        let data = new FormData();
        data.append('name',name);
        data.append('email',email);
        data.append('phone',phone);
        data.append('password',password);
        data.append('confirm_password',confirmpassword);
        let response = User.register(data).then(function (response){
            // console.log(response.data.success);
            if(response.data.success){
                    alert('Successfully Register')
                    router.push('/login')
                } else {
                    newError = response.data.data;
                        Object.keys(newError).forEach(function (error,index){
                            setErrorMessage(errormessage => [...errormessage,newError[error][0]])
                        })
                   // console.log(errormessage)
                    console.log('registration failed')
                }
            return {};
        }).catch(function (error){
            return {};
        })

    }
    return (
        <>
            <div className="container mt-4 mt-md-5 d-flex justify-content-center">
                <div className="card card-custom rounded shadow-sm col-12 col-md-6">
                    <p className="fs-3 text-center mt-3 mt-md-5">Register</p>
                    <div className="err">
                        {errormessage.map((errors,index) =>
                            <p className="text-danger text-center small mb-0 pb-0"  key={index}>{errors}</p>)}
                    </div>
                    <div className="card-body">
                        <form onSubmit={ ( e ) => handleSubmit( e ) } action="" method="post"   >
                            <div className="input-group-lg mt-3">
                                <input type="text" required className="form-control form-control-c"
                                       onInput={ ( e ) => setUsername( e.target.value ) } placeholder="User Name"
                                       aria-label="Username" aria-describedby="input-username"/>
                            </div>
                            <div className="input-group-lg mt-3">
                                <input type="email" required className="form-control form-control-c"
                                       onInput={ ( e ) => setUseremail( e.target.value ) } placeholder="User Email"
                                       aria-label="Useremail" aria-describedby="input-username"/>
                            </div>
                            <div className="input-group-lg mt-3">
                                <input type="number" required className="form-control form-control-c"
                                       onInput={ ( e ) => setUserphone( e.target.value ) } placeholder="User Phone"
                                       aria-label="Userphone" aria-describedby="input-userphone"/>
                            </div>
                            <div className="input-group-lg mt-3">
                                <input type="password" required className="form-control form-control-c"
                                       onInput={ ( e ) => setUserpassword( e.target.value ) } placeholder="Password"
                                       aria-label="Password" aria-describedby="input-password"/>
                            </div>
                            <div className="input-group-lg mt-3">
                                <input type="password" required className="form-control form-control-c"
                                       onInput={ ( e ) => setConfirmpassword( e.target.value ) } placeholder="Confirm Password"
                                       aria-label="Confirm Password" aria-describedby="input-password"/>
                            </div>


                            <div className="mt-4 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary w-100 p-2" value="login">Register</button>
                            </div>
                            <div className="text-center pt-4 text-muted">Already have an account?
                                <br/>
                                <Link href="/login">
                                    <a  className="a-custom-appoinment">Sign IN</a>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;