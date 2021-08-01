import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        <Slider {...settings} className="slide-carousel mt-3 mt-md-4">

                <div className="col mb-2">
                    <div className="card card-custom-health rounded me-3 shadow-sm ">
                        <img src="/static/images/card1.png" className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <a className="card-text a-custom-health fs-6">5 way to keep COVID-19 away</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="card card-custom-health rounded me-3 shadow-sm ">
                        <img src="/static/images/card2.png" className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <a className="card-text a-custom-health fs-6">Healthy and Effective Tips To ...</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="card card-custom-health rounded me-3 shadow-sm ">
                        <img src="/static/images/card3.png" className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <a className="card-text a-custom-health fs-6">Healthy and Effective Tips To ...</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="card card-custom-health rounded me-3 shadow-sm ">
                        <img src="/static/images/card4.png" className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <a className="card-text a-custom-health fs-6">Healthy and Effective Tips To ...</a>
                        </div>
                    </div>
                </div>

        </Slider>
    );
}