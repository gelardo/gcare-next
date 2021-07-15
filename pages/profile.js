import React, {useState} from 'react';
import ProtectedPage from "./components/protectedPage";
import {useAuth} from "./hooks";
import {useRouter} from "next/router";

function Profile(props) {
    const router = useRouter()
    const {user, logout} = useAuth();

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
                                                    <span >140x140</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                <h4 className="pt-sm-2 pb-1 mb-0">Sabid Hasan</h4>
                                                <p className="mb-0">@sabid</p>
                                                <div className="text-muted"><small>Last order 2 days ago</small></div>
                                                <div className="mt-2">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa fa-fw fa-camera"></i>
                                                        <span>Change Photo</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-center text-sm-right">
                                                <span className="bg bg-secondary px-2 rounded">user</span>
                                                <div className="text-muted"><small>Joined 28 Feb 2021</small></div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item"><a href="" className="active nav-link">Settings</a></li>
                                    </ul>
                                    <div className="tab-content pt-3">
                                        <div className="tab-pane active">
                                            <form className="form" noValidate="">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>Full Name</label>
                                                                    <input className="form-control form-control-c p-3" type="text" name="name" placeholder="John Smith" />
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>Username</label>
                                                                    <input className="form-control form-control-c p-3" type="text" name="username" placeholder="johnny.s" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-12 col-md-6">
                                                                <div className="form-group">
                                                                    <label>Email</label>
                                                                    <input className="form-control form-control-c p-3" type="text" placeholder="user@example.com"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <label>Phone</label>
                                                                    <input className="form-control form-control-c p-3" type="text" placeholder="+880 1791081642"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col mb-3">
                                                        <label>Gender</label>
                                                        <select className="form-select form-control form-control-c p-3" aria-label="Default select example">
                                                            <option >Male</option>
                                                            <option >Female</option>
                                                            <option >Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-sm-6 mb-3">
                                                        <div className="mb-2"><b>Change Password</b></div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>Current Password</label>
                                                                    <input className="form-control form-control-c p-3" type="password" placeholder="••••••"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>New Password</label>
                                                                    <input className="form-control form-control-c p-3" type="password" placeholder="••••••"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                                                    <input className="form-control form-control-c p-3" type="password" placeholder="••••••"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                                        <div className="mb-2"><b>Keeping in Touch</b></div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <label>Email Notifications</label>
                                                                <div className="custom-controls-stacked px-2">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" id="notifications-blog" />
                                                                        <label className="custom-control-label" htmlFor="notifications-blog">Articles</label>
                                                                    </div>
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input type="checkbox" className="custom-control-input" id="notifications-offers" />
                                                                        <label className="custom-control-label" htmlFor="notifications-offers">Personal Offers</label>
                                                                    </div>
                                                                </div>
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