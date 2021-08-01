import React from 'react';

function SearchDoctor(props) {
    return (
        <>
            <div className="container">
                <div className="row row-custom">
                    <div className="col-12 col-lg-8">
                        <p className="fs-2 p-custom-title py-1">Popular Specialities</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="input-group rounded card card-custom shadow-sm">
                            <div className="row row-custom">
                                <div className="col-9 col-md-10">
                                    <input type="search" className="form-control form-control-custom p-3 search-color" placeholder="Search for Doctors & Clinics" aria-label="Search" aria-describedby="search-addon" />
                                </div>
                                <div className="col-3 col-md-2 d-flex justify-content-end p-3">
                                    <i className="fas fa-search search-color"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchDoctor;