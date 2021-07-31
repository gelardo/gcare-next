import React, {useRef, useState} from 'react';
import DoctorBookingForm from "./doctor_booking_form";
import { Modal, Button } from 'react-bootstrap'
function DoctorList(props) {
    let doctor = props.value

    return (
        <div>
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
                                    <p className="fs-4 ps-3 p-custom-test">{doctor[0].name}</p>
                                </div>
                                <div className="col-12">
                                    {doctor[0].specialities.map((special,index) => (
                                        <span key={index} className="ps-3 small p-custom">{special.name} </span>
                                    ))}
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom p-color-test">14 years of experience.</p>
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom p-color-test">Speaks: English, Bangla.</p>
                                </div>
                                <div className="col-12">
                                    <p className="ps-3 p-custom p-color-test">Clinic: {doctor[0].hospitals.map((hospital,index) => (
                                        <small key={index} className="small">{hospital.name},&nbsp;</small>
                                    ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 p-3">
                            <div className="col-12">
                                <p className="p-custom-test fs-5">Available</p>
                            </div>
                            <div className="col-12">
                                <p className="p-custom p-color-test p-booktest">
                                    <i className="fas fa-user-clock pe-2">

                                </i>5:30 PM, Tomorrow</p>

                            </div>
                            <div className="col-12">
                                <p className="p-custom fs-4 pt-2">Fee: {doctor[0].fees}.00 TK</p>
                            </div>
                            <div className="col-12">
                                <DoctorBookingForm key={doctor[0].id} value={doctor}/>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default DoctorList;