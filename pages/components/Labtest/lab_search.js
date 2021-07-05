import React from 'react';

function LabSearch(props) {
    return (
        <>
            <div className="container mt-4 mt-md-5">
                <div className="row row-custom">
                    <div className="col-12 col-lg-8">
                        <p className="fs-2">Labtest & Body Checkup Packages</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="input-group rounded card card-custom shadow-sm">
                            <div className="row row-custom">
                                <div className="col-9 col-md-10">
                                    <input type="search" className="form-control form-control-custom p-3 search-color" placeholder="Search for Labs" aria-label="Search" aria-describedby="search-addon" />
                                </div>
                                <div className="col-3 col-md-2 d-flex justify-content-center py-3" >
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

export default LabSearch;