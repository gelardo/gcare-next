import React, {useRef, useState} from 'react';
import {useAuth} from "../../hooks";
import User from "../../api/User";
import { Modal, Button } from 'react-bootstrap'

function DoctorBookingForm(props) {
    const [show, setShow] = useState(false);
    const nodeRef = useRef(null);
    let status = 0;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const auth = useAuth()
    let doctor = props.value
    let doctor_id = doctor[0].id
    let patient_id = 0
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    if(auth.user) {
        patient_id = auth.user.id
    }
    console.log(bookingTime)
    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('date',bookingDate);
        data.append('time',bookingTime);
        data.append('status',status);
        data.append('user_id',parseInt(patient_id));
        data.append('doctor_id',parseInt(doctor_id));
        try {
            User.bookDoctorAppointment(data).then(function(response){
                if(response.data) {
                    alert(response.data)
                }
            }).catch()
        }catch{

        }
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                BOOK NOW
            </Button>
            <Modal noderef={nodeRef} show={show} onHide={handleClose} anmiation="false" size="lg">
                <Modal.Body>
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
                                    <p className="p-custom p-color-test p-booktest"><i
                                        className="fas fa-user-clock pe-2"></i>5:30 PM, Everyday</p>
                                </div>
                                <div className="col-12">
                                    <p className="p-custom fs-4 pt-2">Fee: {doctor[0].fees}.00 TK</p>
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
                    <form  onSubmit={ ( e ) => handleSubmit( e ) } action="" method="post" >
                        <div className="mt-3 mt-md-4">
                            <div className="card card-custom rounded shadow-sm">
                                <div className="col-12 d-flex justify-content-center pt-3">
                                    <input type="date" id={`picker`+doctor[0].id} onChange={ ( e ) => setBookingDate( e.target.value ) } className="card-custom fs-4 date-custom"/>
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
                                                <input type="radio" value={`7:00 AM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) } name="morning"
                                                       id={`morning1`+doctor[0].id} autoComplete="off"/>
                                                <label className="btn btn-outline-time me-2 me-md-3 my-2"
                                                       htmlFor={`morning1`+doctor[0].id}>7:00 AM</label>

                                                <input type="radio" value={`7:30 AM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) } name="morning"
                                                       id={`morning2`+doctor[0].id} autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`morning2`+doctor[0].id}>7:30 AM</label>

                                                <input type="radio" value={`8:00 AM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) } name="morning"
                                                       id={`morning3`+doctor[0].id} autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`morning3`+doctor[0].id}>8:00 AM</label>

                                                <input type="radio" value={`8:30 AM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="morning" id={`morning4`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`morning4`+doctor[0].id}>8:30 AM</label>

                                                <input type="radio" value={`9:00 AM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="morning" id={`morning5`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`morning5`+doctor[0].id}>9:00 AM</label>

                                                <input type="radio" value={'9:30 AM'} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="morning" id={`morning6`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`morning6`+doctor[0].id}>9:30 AM</label>

                                                <input type="radio"
                                                       className="btn-check" value="10:00 AM" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="morning" id={`morning7`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`morning7`+doctor[0].id}>10:00
                                                    AM</label>

                                                <input type="radio"
                                                       className="btn-check" value="11:00 AM"  onClick={ ( e ) => console.log(e.target.value) }
                                                       name="morning" id={`morning8`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`morning8`+doctor[0].id}>11:00
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
                                                <input type="radio" value={`12:00 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) } name="afternoon"
                                                       id={`afternoon1`+doctor[0].id} autoComplete="off"/>
                                                <label className="btn btn-outline-time me-2 me-md-3 my-2"
                                                       htmlFor={`afternoon1`+doctor[0].id}>12:00 PM</label>

                                                <input type="radio" value={`12:30 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) } name="afternoon"
                                                       id={`afternoon2`+doctor[0].id} autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`afternoon2`+doctor[0].id}>12:30 PM</label>

                                                <input type="radio" value={`1:00 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="afternoon" id={`afternoon3`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`afternoon3`+doctor[0].id}>1:00 PM</label>

                                                <input type="radio" value={`2:30 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="afternoon" id={`afternoon4`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`afternoon4`+doctor[0].id}>2:30 PM</label>

                                                <input type="radio" value={`3:00 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="afternoon" id={`afternoon5`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`afternoon5`+doctor[0].id}>3:00 PM</label>

                                                <input type="radio" value={`3:30 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="afternoon" id={`afternoon6`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`afternoon6`+doctor[0].id}>3:30 PM</label>

                                                <input type="radio" value={`4:00 PM`}
                                                       className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="afternoon" id={`afternoon7`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`afternoon7`+doctor[0].id}>4:00 PM
                                                   </label>

                                                <input type="radio" value={`05:00 `}
                                                       className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="afternoon"
                                                       id={`afternoon8`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`afternoon8`+doctor[0].id}>05:00
                                                PM</label>
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
                                                <input type="radio" value={`7:00 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) } name="evening"
                                                       id={`evening1`+doctor[0].id} autoComplete="off"/>
                                                <label className="btn btn-outline-time me-2 me-md-3 my-2"
                                                       htmlFor={`evening1`+doctor[0].id}>7:00 PM</label>

                                                <input type="radio" value={`7:30 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) } name="evening"
                                                       id={`evening2`+doctor[0].id} autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`evening2`+doctor[0].id}>7:30 PM</label>

                                                <input type="radio" value={`8:00 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) } name="evening"
                                                       id={`evening3`+doctor[0].id} autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`evening3`+doctor[0].id}>8:00 PM</label>

                                                <input type="radio" value={`8:30 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="evening" id={`evening4`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`evening4`+doctor[0].id}>8:30 PM</label>

                                                <input type="radio" value={`9:00 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="evening" id={`evening5`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`evening5`+doctor[0].id}>9:00 PM</label>

                                                <input type="radio" value={`9:30 PM`} className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="evening" id={`evening6`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`evening6`+doctor[0].id}>9:30 PM</label>

                                                <input type="radio" value={`10:00 PM`}
                                                       className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="evening" id={`evening7`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`evening7`+doctor[0].id}>10:00
                                                    PM</label>

                                                <input type="radio" value={`11:00`}
                                                       className="btn-check" onChange={ ( e ) => setBookingTime( e.target.value ) }
                                                       name="evening" id={`evening8`+doctor[0].id}
                                                       autoComplete="off"/>
                                                <label
                                                    className="btn btn-outline-time me-2 me-md-3 my-2"
                                                    htmlFor={`evening8`+doctor[0].id}>11:00
                                                    PM</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-7 col-md-4 mt-3">
                                <button type="submit" className="btn btn-primary w-100 rounded fs-6 py-2" href="#"
                                   role="button">Continue</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                </Modal.Footer>

            </Modal>

        </>
    );
}

export default DoctorBookingForm;