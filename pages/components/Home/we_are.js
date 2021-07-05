import React from 'react';

function WeAre(props) {
    return (
        <>
            <div className="container transform">
                <p className="fs-1 text-uppercase text-center mt-4 mt-md-5">why we are here !</p>
                <p className="text-center p-color">We are here to Improving the Quality of Your Life at Home</p>
                <div className="row">
                    <div className="col-12 col-md-4 mt-3 mt-md-4 mt-lg-5 text-center">
                        <img src="/static/images/vector_assets.png" className="img-fluid"  alt="..."/>
                        <p className="fs-5 text-center mt-3 mt-md-5">Your Health in Your Hands</p>
                        <p className="text-center p-color px-3">Comprehensive healthcare at your fingertips, to put you in charge of your health.</p>
                    </div>
                    <div className="col-12 col-md-4 mt-3 mt-md-4 mt-lg-5 text-center">
                        <img src="/static/images/vector_assets.png" className="img-fluid"  alt="..."/>
                        <p className="fs-5 text-center mt-3 mt-md-5">Caring to the Core</p>
                        <p className="text-center p-color px-3">A seamless experience that gives you access to curated services and transparent choices.</p>
                    </div>
                    <div className="col-12 col-md-4 mt-3 mt-md-4 mt-lg-5 text-center">
                        <img src="/static/images/vector_assets.png" className="img-fluid"  alt="..."/>
                        <p className="fs-5 text-center mt-3 mt-md-5">The Smart Way to Health</p>
                        <p className="text-center p-color px-3">Verified information and trustworthy tips, to guide you to better health every day.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeAre;