import React from 'react';
import Link from "next/link";
function Department(props) {
    return (
        <>
            <div className="container mt-4 mt-md-4">
                <div className="row row-cols-2 row-cols-md-4 g-4">
                    <div className="col">
                        <Link href="/doctorbooking">
                            <a className="card card-custom rounded shadow-sm a-custom-appoinment">
                                <img src="/static/images/cardiology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt=""/>
                                <div className="card-body px-2 pb-3">
                                    <p className="fs-6 fs-lg-4 card-title text-center">Cardiology</p>
                                </div>
                            </a>
                        </Link>

                    </div>
                    <div className="col">
                        <a href="#" className="card card-custom rounded shadow-sm a-custom-appoinment">
                            <img src="/static/images/dermatology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt="..."/>
                            <div className="card-body px-2 pb-3">
                                <p className="fs-6 fs-lg-4 card-title text-center">Dermatology</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="card card-custom rounded shadow-sm a-custom-appoinment">
                            <img src="/static/images/diabetology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt="..."/>
                            <div className="card-body px-2 pb-3">
                                <p className="fs-6 fs-lg-4 card-title text-center">Diabetology</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="card card-custom rounded shadow-sm a-custom-appoinment">
                            <img src="/static/images/ent.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt="..."/>
                            <div className="card-body px-2 pb-3">
                                <p className="fs-6 fs-lg-4 card-title text-center">ENT</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="card card-custom rounded shadow-sm a-custom-appoinment">
                            <img src="/static/images/cardiology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt="..."/>
                            <div className="card-body px-2 pb-3">
                                <p className="fs-6 fs-lg-4 card-title text-center">Gastroenterology</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="card card-custom rounded shadow-sm a-custom-appoinment">
                            <img src="/static/images/cardiology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt="..."/>
                            <div className="card-body px-2 pb-3">
                                <p className="fs-6 fs-lg-4 card-title text-center">General Medicine</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="card card-custom rounded shadow-sm a-custom-appoinment">
                            <img src="/static/images/cardiology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt="..."/>
                            <div className="card-body px-2 pb-3">
                                <p className="fs-6 fs-lg-4 card-title text-center">Gynecology</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="card card-custom rounded shadow-sm a-custom-appoinment">
                            <img src="/static/images/cardiology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt="..." />
                            <div className="card-body px-2 pb-3">
                                <p className="fs-6 fs-lg-4 card-title text-center">Orthopedics</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="card card-custom rounded shadow-sm a-custom-appoinment">
                            <img src="/static/images/cardiology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt="..." />
                            <div className="card-body px-2 pb-3">
                                <p className="fs-6 fs-lg-4 card-title text-center">Pediatrics</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="card card-custom rounded shadow-sm a-custom-appoinment">
                            <img src="/static/images/cardiology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt="..." />
                            <div className="card-body px-2 pb-3">
                                <p className="fs-6 fs-lg-4 card-title text-center">Mental Wellness</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" className="card card-custom rounded shadow-sm a-custom-appoinment">
                            <img src="/static/images/cardiology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt="..." />
                            <div className="card-body px-2 pb-3">
                                <p className="fs-6 fs-lg-4 card-title text-center">Consultant Physician</p>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <div className="srvice-card-img">
                            <img src="/static/images/dot.svg" className="my-5" width="" height="32px" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Department;