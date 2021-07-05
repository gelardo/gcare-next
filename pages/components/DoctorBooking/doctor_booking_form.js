import React from 'react';

function DoctorBookingForm(props) {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content modal-content-custom rounded">
                        <div className="modal-body">
                            <div className="card card-custom rounded shadow-sm">
                                <div className="row">
                                    <div className="col-6">
                                        <p className="pt-3 ps-3 p-custom-modal fs-6">Doctor Selected</p>
                                    </div>
                                    <div className="col-6 d-flex justify-content-end">
                                        <a className="pt-3 pe-3 a-custom-test fs-6">Edit</a>
                                    </div>
                                </div>
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
                                        <div className="col-12 d-flex justify-content-center mt-2">
                                            <a className="btn pe-4" href="#" role="button"><i
                                                className="fas fa-trash icon-custom"></i></a>
                                            <a className="btn ps-4" href="#" role="button"><i
                                                className="fas fa-edit icon-custom-edit"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 mt-md-4">
                                <div className="card card-custom rounded shadow-sm">
                                    <div className="col-12 d-flex justify-content-center pt-3">
                                        <input type="date" id="picker" className="card-custom fs-4 date-custom"/>
                                    </div>
                                    <hr/>
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingOne">
                                                    <button className="accordion-button collapsed fs-6 custom-color"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseOne" aria-expanded="false"
                                                            aria-controls="flush-collapseOne"><img
                                                        src="/static/images/morning-icon.svg" className="me-3" width="24"
                                                        height="24" alt="..."/>Morning</button>
                                                </h2>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                     aria-labelledby="flush-headingOne"
                                                     data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <input type="radio" className="btn-check" name="morning"
                                                               id="morning1" autoComplete="off"/>
                                                        <label className="btn btn-outline-time me-2 me-md-3 my-2"
                                                               htmlFor="morning1">7:00 AM</label>

                                                        <input type="radio" className="btn-check" name="morning"
                                                               id="morning2" autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="morning2">7:30 AM</label>

                                                        <input type="radio" className="btn-check" name="morning"
                                                               id="morning3" autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="morning3">8:00 AM</label>

                                                        <input type="radio" className="btn-check"
                                                               name="morning" id="morning4"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="morning4">8:30 AM</label>

                                                        <input type="radio" className="btn-check"
                                                               name="morning" id="morning5"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="morning5">9:00 AM</label>

                                                        <input type="radio" className="btn-check"
                                                               name="morning" id="morning6"
                                                               autoComplete="off"/>
                                                            <label
                                                                className="btn btn-outline-time me-2 me-md-3 my-2"
                                                                htmlFor="morning6">9:30 AM</label>

                                                        <input type="radio"
                                                               className="btn-check"
                                                               name="morning" id="morning7"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="morning7">10:00
                                                            AM</label>

                                                        <input type="radio"
                                                               className="btn-check"
                                                               name="morning" id="morning8"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="morning8">11:00
                                                            AM</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingTwo">
                                                    <button className="accordion-button collapsed fs-6 custom-color"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                            aria-controls="flush-collapseTwo"><img
                                                        src="/static/images/afternoon-icon.svg" className="me-3" width="24"
                                                        height="24" alt="..."/>Afternoon</button>
                                                </h2>
                                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                     aria-labelledby="flush-headingTwo"
                                                     data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <input type="radio" className="btn-check" name="afternoon"
                                                               id="afternoon1" autoComplete="off"/>
                                                        <label className="btn btn-outline-time me-2 me-md-3 my-2"
                                                               htmlFor="afternoon1">7:00 AM</label>

                                                        <input type="radio" className="btn-check" name="afternoon"
                                                               id="afternoon2" autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="afternoon2">7:30 AM</label>

                                                        <input type="radio" className="btn-check"
                                                               name="afternoon" id="afternoon3"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="afternoon3">8:00 AM</label>

                                                        <input type="radio" className="btn-check"
                                                               name="afternoon" id="afternoon4"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="afternoon4">8:30 AM</label>

                                                        <input type="radio" className="btn-check"
                                                               name="afternoon" id="afternoon5"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="afternoon5">9:00 AM</label>

                                                        <input type="radio" className="btn-check"
                                                               name="afternoon" id="afternoon6"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="afternoon6">9:30 AM</label>

                                                        <input type="radio"
                                                               className="btn-check"
                                                               name="afternoon" id="afternoon7"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="afternoon7">10:00
                                                            AM</label>

                                                        <input type="radio"
                                                               className="btn-check"
                                                               name="afternoon"
                                                               id="afternoon8"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="afternoon8">11:00
                                                            AM</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingThree">
                                                    <button className="accordion-button collapsed fs-6 custom-color"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                                                            aria-controls="flush-collapseThree"><img
                                                        src="/static/images/evening-icon.svg" className="me-3" width="24"
                                                        height="24" alt="..."/>Evening</button>
                                                </h2>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                     aria-labelledby="flush-headingThree"
                                                     data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <input type="radio" className="btn-check" name="evening"
                                                               id="evening1" autoComplete="off"/>
                                                        <label className="btn btn-outline-time me-2 me-md-3 my-2"
                                                               htmlFor="evening1">7:00 PM</label>

                                                        <input type="radio" className="btn-check" name="evening"
                                                               id="evening2" autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="evening2">7:30 PM</label>

                                                        <input type="radio" className="btn-check" name="evening"
                                                               id="evening3" autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="evening3">8:00 PM</label>

                                                        <input type="radio" className="btn-check"
                                                               name="evening" id="evening4"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="evening4">8:30 PM</label>

                                                        <input type="radio" className="btn-check"
                                                               name="evening" id="evening5"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="evening5">9:00 PM</label>

                                                        <input type="radio" className="btn-check"
                                                               name="evening" id="evening6"
                                                               autoComplete="off"/>
                                                        <label
                                                                className="btn btn-outline-time me-2 me-md-3 my-2"
                                                                htmlFor="evening6">9:30 PM</label>

                                                        <input type="radio"
                                                               className="btn-check"
                                                               name="evening" id="evening7"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="evening7">10:00
                                                            PM</label>

                                                        <input type="radio"
                                                               className="btn-check"
                                                               name="evening" id="evening8"
                                                               autoComplete="off"/>
                                                        <label
                                                            className="btn btn-outline-time me-2 me-md-3 my-2"
                                                            htmlFor="evening8">11:00
                                                            PM</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-7 col-md-4 mt-3">
                                    <a className="btn btn-primary w-100 rounded fs-6 py-2" href="#"
                                       role="button">Continue</a>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DoctorBookingForm;