import React from 'react';

function LabtestCarousel(props) {
    return (
        <>
            <div className="container ">
                <div className="card card-custom shadow-sm rounded">

                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner rounded">
                            <div className="carousel-item active">
                                <img src="/static/assets/lab-slider-1.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="/static/assets/lab-slider-2.png" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="/static/assets/lab-slider-3.png" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default LabtestCarousel;