import React from 'react';
import Image from "next/image";
function Footer(props) {
    return (
        <>
        <div className="container-fluid container-fluid-custom mt-4 mt-md-5 c-transform">
            <div className="container">
                <div className="row">
                    <div className="col-8 col-md-3 d-flex">
                        <img src="/static/images/phone.svg" width="41" height="41" className="my-3" alt="..."/>
                            <div className="row">
                                <div className="col-10 col-custom">
                                    <p className="p-custom mt-3 fs-6 ms-4">Call Us 24/7</p>
                                </div>
                                <div className="col-10 col-custom">
                                    <p className="p-custom mb-3 ms-3">+880 1791081642</p>
                                </div>
                            </div>
                    </div>

                    <div className="col-2 col-md-2 d-flex justify-content-start">
                        <img src="/static/images/facebook.svg" width="41" height="41" className="my-3" alt="..."/>
                    </div>

                    <div className="col-2 col-md-2 d-flex justify-content-start">
                        <img src="/static/images/in.svg" width="41" height="41" className="my-3" alt="..."/>
                    </div>

                    <div className="col-10 col-md-3 d-flex">
                        <img src="/static/images/mail.svg" width="41" height="41" className="my-3" alt="..."/>
                            <div className="row">
                                <div className="col-10 col-custom">
                                    <p className="p-custom mt-3 fs-6 ms-4">Mail Us</p>
                                </div>
                                <div className="col-10 col-custom">
                                    <p className="p-custom mb-3 ms-4">info@gcare.com.bd</p>
                                </div>
                            </div>
                    </div>

                    <div className="col-2 col-md-2 d-flex justify-content-center">
                        <img src="/static/images/google.svg" width="41" height="41"  className="my-3" alt="..."/>
                    </div>

                </div>
            </div>
        </div>
        <div className="container d-transform">
            <div className="row">
                <div className="col-12 col-md-3">
                    <img src="/static/images/logo.svg"  className="pt-4 pt-md-5" alt="..."/>
                        <p className="pt-4 a-custom-footer ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deleniti fugiat perspiciatis repudiandae velit!</p>
                </div>
                <div className="col-12 col-md-3">
                    <p className="pt-4 pt-md-5 fs-3">Patients Services</p>
                    <p><a className="a-custom-footer" href="#">Search for doctors</a></p>
                    <p><a className="a-custom-footer" href="#">View all tests</a></p>
                    <p><a className="a-custom-footer" href="#">Health articles</a></p>
                </div>
                <div className="col-12 col-md-4">
                    <p className="pt-4 pt-md-5 fs-3">Consult by Speciality</p>
                    <p><a className="a-custom-footer" href="#">Cardiology</a></p>
                    <p><a className="a-custom-footer" href="#">Dermatology</a></p>
                    <p><a className="a-custom-footer" href="#">ENT</a></p>
                    <p><a className="a-custom-footer" href="#">Gastroenterology</a></p>
                </div>
                <div className="col-12 col-md-2">
                    <p className="pt-4 pt-md-5 fs-3">More</p>
                    <p><a className="a-custom-footer" href="#">privacy Policy</a></p>
                    <p><a className="a-custom-footer" href="#">Terms & Conditins</a></p>
                    <p><a className="a-custom-footer" href="#">Contact Us</a></p>
                    <p><a className="a-custom-footer" href="#">Customer Support</a></p>
                </div>
            </div>
        </div>
        <div className="container pt-3 pt-md-4 e-transform">
            <div className="row">
                <div className="col-12 text-center pt-3 pb-3">
                    <p className="a-custom-footer"><a className="fs-6 a-custom-footer">GCARE</a> © 2021 All right reserved</p>
                </div>
            </div>
        </div>

    <script type="text/javascript" src="/static/js/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="/static/js/custom.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>

</>
    );
}

export default Footer;