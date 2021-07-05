import React from 'react';
import Link from "next/link";

function Hero(props) {
    return (
        <>
            <div className="bgimage">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8 mt-4 mt-md-5">
                            <h1 className="fs-1 text-uppercase text-start text-white">Coronavirus <br/> Outbreak</h1>
                            <p className="text-start text-white">Don't rely on social media forwards.<br/>Consult our trusted doctors instead.</p>
                            <div className="d-flex justify-content-start">
                                <Link href="/"><a className="btn btn-primary rounded-pill px-3"  role="button">Chat With a Doctor Now</a></Link>
                            </div>
                            <a className="d-flex justify-content-start link pt-2 pt-md-3" href="#">Read more about COVID-19</a>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="row row-cols-1 g-3 my-2">
                               <Link href="/doctor_appointment">
                                   <a  className="a-custom">
                                   <div className="col">
                                       <div className="card card-custom p-3 rounded shadow-sm">
                                           <img src="/static/images/appoinment.svg" width="32" height="32" alt="..."/>
                                           <div className="card-body card-body-custom">
                                               <p className="card-title fs-4 text-uppercase pt-2">Book
                                                   Appoinment</p>
                                               <p className="card-text p-color">Clinic</p>
                                               <div className="row">
                                                   <p className="link p-color-appoinment col-10" href="#">Curated
                                                       Doctors</p>
                                                   <i className="fas fa-caret-square-right col-2 d-flex justify-content-end i-color"></i>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </a>
                               </Link>
                            </div>
                            <div className="row row-cols-1 g-3 my-2">
                                <Link href="/labtest">
                                    <a  className="a-custom-lab">
                                        <div className="col">
                                            <div className="card card-custom p-3 rounded shadow-sm">
                                                <img src="/static/images/labtest.svg" width="22" height="32" alt="..."/>
                                                <div className="card-body card-body-custom">
                                                    <p className="card-title fs-4 text-uppercase pt-2">Book Lab Test</p>
                                                    <p className="card-text p-color">NABL Certified Partners</p>
                                                    <div className="row">
                                                        <p className="link p-color-lab col-10" href="#">Safe &
                                                            Hygienic</p>
                                                        <i className="fas fa-caret-square-right col-2 d-flex justify-content-end i-color-lab"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;