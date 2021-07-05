import React from 'react';

function DoctorLocation(props) {
    return (
        <>
            <div className="heroimge-appoinment">
                <h1 className="fs-1 text-uppercase pt-">Book your doctor’s Appointment</h1>
            </div>
            <div className="container">
                <div className="card card-custom-place shadow-sm rounded">
                    <div className="row row-custom">
                        <div className="col-2 col-md-1 p-3">
                            <a href="#">
                                <img src="/static/images/location-icon.svg" width="24" height="24" alt=""/>
                            </a>
                        </div>
                        <div className="col-8 col-md-10">
                            <input type="text" className="form-control p-3" id="inputAddressPlace" placeholder="Place"/>
                        </div>
                        <div className="col-2 col-md-1 p-3 d-flex justify-content-end">
                            <a href="#">
                                <img src="/static/images/location-edit-icon.svg" width="24" height="24" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DoctorLocation;