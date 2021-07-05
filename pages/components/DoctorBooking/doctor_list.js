import React from 'react';

function DoctorList(props) {
    return (
        <>
            <div className="container mt-4 mt-md-5">
                <div className="card card-custom rounded shadow-sm">
                    <div className="row row-custom">
                        <div className="col-12 col-lg-9 p-3 d-flex">
                            <div className="row row-custom-image">
                                <div className="col-10">
                                    <img src="/static/images/doctor.svg" width="80" height="80" alt="..."/>
                                </div>
                                <div className="col-12">
                                    <a className="a-custom-profile">View Profile</a>
                                </div>
                            </div>
                            <div className="row row-custom">
                                <div className="col-12">
                                    <p className="fs-4 ps-3 p-custom-test">DR. SABID HASAN NABIL</p>
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom">Cardiologist</p>
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom p-color-test">14 years of experience.</p>
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom p-color-test">Speaks: English, Bangla.</p>
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom p-color-test">Clinic: XYZ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 p-3">
                            <div className="col-12">
                                <p className="p-custom-test fs-5">Next Available</p>
                            </div>
                            <div className="col-12">
                                <p className="p-custom p-color-test p-booktest"><i
                                    className="fas fa-user-clock pe-2"></i>5:30 PM, Tomorrow</p>
                            </div>
                            <div className="col-12">
                                <p className="p-custom fs-4 pt-2">Fee: 900.00 TK</p>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-primary w-100 fs-6 py-2 rounded mt-2"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">BOOK NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3 mt-md-4">
                <div className="card card-custom rounded shadow-sm">
                    <div className="row row-custom">
                        <div className="col-12 col-lg-9 p-3 d-flex">
                            <div className="row row-custom-image">
                                <div className="col-10">
                                    <img src="/static/images/doctor.svg" width="80" height="80" alt="..."/>
                                </div>
                                <div className="col-12">
                                    <a className="a-custom-profile">View Profile</a>
                                </div>
                            </div>
                            <div className="row row-custom">
                                <div className="col-12">
                                    <p className="fs-4 ps-3 p-custom-test">DR. SABID HASAN NABIL</p>
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom">Cardiologist</p>
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom p-color-test">14 years of experience.</p>
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom p-color-test">Speaks: English, Bangla.</p>
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom p-color-test">Clinic: XYZ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 p-3">
                            <div className="col-12">
                                <p className="p-custom-test fs-5">Next Available</p>
                            </div>
                            <div className="col-12">
                                <p className="p-custom p-color-test p-booktest"><i
                                    className="fas fa-user-clock pe-2"></i>5:30 PM, Tomorrow</p>
                            </div>
                            <div className="col-12">
                                <p className="p-custom fs-4 pt-2">Fee: 900.00 TK</p>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-primary w-100 fs-6 py-2 rounded mt-2"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">BOOK NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DoctorList;