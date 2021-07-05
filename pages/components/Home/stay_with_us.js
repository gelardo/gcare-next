import React from 'react';

function StayWithUs(props) {
    return (
        <>
            <div className="container a-transform">
                <p className="fs-1 text-uppercase text-center mt-4 mt-lg-5">Start with us</p>
                <p className="text-center p-color">A seamless experience that gives you access to curated services and transparent choices.</p>
                <div className="row">
                    <div className="col-12 col-lg-4 mt-3 mt-md-4">
                        <p className="fs-4 text-uppercase">BOOK APPOINTMENT</p>
                        <p className="p-color justify">Lorem ipsum dolor sit amet, ullamcorper. Mattis in pellentesque molestie vulputate pellentesque. Viverra id est mi amet tempor bibendum elit arcu. Ornare euismod dui aenean et vel lorem. Ornare euismod dui aenean et vel lorem. Ornare euismod dui aenean et vel lorem. Ornare euismod dui aenean et vel lorem.</p>
                        <div className="row">
                            <div className="col-4 col-lg-12 mt-lg-3">
                                <img src="/static/images/QR.svg" className="" width="80" height="80" alt="..."/>
                            </div>
                            <div className="col-8 col-lg-12 mt-2 mt-md-3">
                                <button type="button" className="btn btn-primary rounded py-3"><i className="fab fa-google-play pe-3"></i>Google Play</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="mt-3 mt-md-4">
                            <video className="video-fluid z-depth-1 rounded" autoPlay loop controls muted>
                                <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StayWithUs;