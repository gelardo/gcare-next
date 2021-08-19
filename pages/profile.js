import React, {useEffect, useState} from 'react';
import ProtectedPage from "../components/protectedPage";
import {useAuth} from "../hooks";
import User from "../api/User";
import cookie from "cookie";
import Moment from 'react-moment';

function Profile(props) {
    const initialError = []
    const [user,setUser] = useState();
    const {logout} = useAuth();
    const [update,setUpdate] = useState(false)
    const [userName,setUserName] = useState('')
    const [userEmail,setUserEmail] = useState('')
    const [userPhone,setUserPhone] = useState('')
    const [userDob,setUserDob] = useState('')
    const [userLocation,setUserLocation] = useState('')
    const [userAge,setUserAge] = useState('')
    const [userGender,setUserGender] = useState('')
    const [joinedDate,setJoinedDate] = useState('')
    const [ userCurrentpassword, setCurrentPassword ] = useState('');
    const [ userNewpassword, setNewPassword ] = useState('');
    const [ userConfirmpassword, setConfirmPassword ] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    let [errormessage, setErrorMessage] = useState([]);
    let newError = [];
    const  clearState = () => {
        setErrorMessage(errormessage => [...initialError])
    }
    const fetchProfileImage = async () => {
        const header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'] || false,
        }
        try {
            const response = await User.profileImage(header);
            if (response.status === 200) {
                // const data =  response.data;
                setProfileImage("https://backend.gcare.com.bd/uploads/"+response.data.data.image_name)
                // setProfileImage(data);
            }
            else {
                setProfileImage(false)
            }
        } catch (error) {
            setProfileImage(false);
        }

    };
    useEffect(() =>{
            fetchProfileImage();
        },[profileImage]
    )
    useEffect(() => {
         User.auth().then((response)=>{
             if (response.status === 200) {
                 const data =  response.data;
                     setUser(data);
                     setUserName(response.data.name)
                     setUserEmail(response.data.email)
                     setUserPhone(response.data.phone)
                     setJoinedDate(response.data.created_at)
             }
             else {
                 setUser(false)
             }
         })
     },[])
    useEffect(() => {
         User.auth().then((response)=>{
             if (response.status === 200) {
                 const data =  response.data;
                     setUser(data);
                     setUserName(response.data.name)
                     setUserEmail(response.data.email)
                     setUserAge(response.data.age)
                     setUserLocation(response.data.location)
                     setUserDob(response.data.date_of_birth)
                     setUserGender(response.data.gender)
                     setUserPhone(response.data.phone)
                     setJoinedDate(response.data.created_at)
             }
             else {
                 setUser(false)
             }
         })
     },[update])
    const submitHandler = async (e) => {

        e.preventDefault();
        const data = new FormData();
        const imagedata = e.target.files[0];
        data.append('images', imagedata)
        try {
              User.uploadProfileImages(data).then(response => {
                if (response.status === 200) {
                            // const data =  response.data;
                    setProfileImage("https://backend.gcare.com.bd/uploads/"+response.data.image_name)
                            // setProfileImage(data);
                             document.querySelector("#inputProfileImage").value = "";
                        }
                        else {
                            setProfileImage(false)
                        }
            });


        } catch (error) {
            setProfileImage(false);
        }
    }
    const clickFileUpload = () => {
        document.getElementById("inputProfileImage").click()
    }

    const dateToFormat = new Date((joinedDate) && (joinedDate));

    const formSubmitHandler = async (e) => {
        e.preventDefault()
        clearState()
        let data = new FormData();
        data.append('name',userName);
        data.append('email',userEmail);
        data.append('phone',userPhone);
        data.append('age',userAge);
        data.append('location',userLocation);
        data.append('date_of_birth',userDob);
        data.append('gender',userGender);
        data.append('current_password',userCurrentpassword);
        data.append('new_password',userNewpassword);
        data.append('confirm_new_password',userConfirmpassword);
        User.updateProfile(data).then(function (response){
            if(response.data.success){
                alert('Successfully Updated')
                setUpdate(!update)
            } else {
                newError = response.data.data;
                Object.keys(newError).forEach(function (error,index){
                    setErrorMessage(errormessage => [...errormessage,newError[error][0]])
                })
            }
        }).catch(function (error){
            return {};
        })
    }
    return (
        <>
            <ProtectedPage >
                <div className="container mt-4 mt-md-5">
                <div className="row">
                    <div className="col mb-3">
                        <div className="card card-custom shadow-sm rounded">
                            <div className="card-body">
                                <div className="e-profile">
                                    <div className="row">
                                        <div className="col-12 col-sm-auto mb-3">
                                            <div className="mx-auto" >
                                                <div className="d-flex justify-content-center align-items-center rounded" >
                                                    <span >
                                                        <img className="thumbnail" src={profileImage} alt=""/>

                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                <h4 className="pt-sm-2 pb-1 mb-0">{(user) && user.name}</h4>
                                                <div className="text-muted"><small>Last order 2 days ago</small></div>
                                                <div className="mt-2">
                                                        <input type="file" name="image" className="hidden" id="inputProfileImage" onChange={submitHandler}/>
                                                    <button className="btn btn-primary" type="button" onClick={clickFileUpload}>
                                                        <i className="fa fa-fw fa-camera"></i>
                                                        <span>Change Photo</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-center text-sm-right">
                                                <span className="bg bg-secondary px-2 rounded">user</span>
                                                <div className="text-muted"><small>Joined <Moment format="Do MMMM YYYY">{dateToFormat}</Moment></small></div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item"><a href="" className="active nav-link">Settings</a></li>
                                    </ul>
                                    <div className="err">
                                        {errormessage.map((errors,index) =>
                                            <p className="text-danger text-center small mb-0 pb-0"  key={index}>{errors}</p>)}
                                    </div>
                                    <div className="tab-content pt-3">
                                        <div className="tab-pane active">
                                            <form className="form" noValidate="" onSubmit={formSubmitHandler}>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>Username</label>
                                                                    <input className="form-control form-control-c p-3" type="text"  value={userName} onChange={(e) => setUserName(e.target.value)} name="username"  />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-12 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Email</label>
                                                                    <input disabled className="form-control form-control-c p-3" value={userEmail} />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <label>Phone</label>
                                                                    <input className="form-control form-control-c p-3" value={userPhone || ""} onChange={(e) => setUserPhone(e.target.value)} type="text" placeholder="Enter Phone"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-12 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Date of birth</label>
                                                                    <input type="date" className="form-control date-custom form-control-c p-3" value={userDob || ""} onChange={(e)=> setUserDob(e.target.value)} id={`picker`} placeholder="Enter Date of Birth"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <label>Location</label>
                                                                    <input className="form-control form-control-c p-3" value={userLocation || ""} onChange={(e) => setUserLocation(e.target.value)} type="text" placeholder="Enter Your Location"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-12 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Age</label>
                                                                    <input className="form-control date-custom form-control-c p-3" value={userAge || ""} onChange={(e)=> setUserAge(e.target.value)} type="text" placeholder="Enter Age"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <label>Gender</label>
                                                                    <select className="form-select form-control  form-control-c p-3" onChange={(e) => setUserAge(e.target.value)}
                                                                            aria-label="Default select example">
                                                                        <option>select gender</option>
                                                                        <option value="male">Male</option>
                                                                        <option value="female">Female</option>
                                                                        <option value="others">Others</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-sm-6 mb-3">
                                                        <div className="mb-2"><b>Change Password</b></div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>Current Password</label>
                                                                    <input className="form-control form-control-c p-3" onChange={(e)=>{setCurrentPassword(e.target.value)}} type="password" placeholder="••••••"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>New Password</label>
                                                                    <input className="form-control form-control-c p-3" onChange={(e)=>{setNewPassword(e.target.value)}} type="password" placeholder="••••••"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                                                    <input className="form-control form-control-c p-3" type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="••••••"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col d-flex justify-content-end">
                                                        <button className="btn btn-primary" type="submit">Save Changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 mb-3">
                        <div className="card card-custom shadow-sm rounded mb-3">
                            <div className="card-body">
                                <div className="px-xl-3 d-flex justify-content-center">
                                    <button className="btn btn-block btn-secondary" onClick={(event) => logout()} >
                                        <i className="fa fa-sign-out"></i>
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card card-custom shadow-sm rounded">
                            <div className="card-body">
                                <h6 className="card-title font-weight-bold">Support</h6>
                                <p className="card-text">Get fast, free help from our friendly assistants.</p>
                                <a className="btn btn-primary rounded fs-6 py-2" href="#" role="button">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ProtectedPage>
        </>
    );
}

export default Profile;