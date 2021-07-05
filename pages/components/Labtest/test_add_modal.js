import React from 'react';

function TestAddModal(props) {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content modal-content-custom rounded">
                        <div className="modal-body">
                            <div className="card card-custom shadow-sm rounded">
                                <div className="row row-custom">
                                    <div className="col-2 col-md-1 p-3">
                                        <a href="#">
                                            <img src="/static/images/location-icon.svg" width="24" height="24" alt=""/>
                                        </a>
                                    </div>
                                    <div className="col-8 col-md-10">
                                        <input type="text" className="form-control p-3" id="inputAddress1" placeholder="Place"/>
                                    </div>
                                    <div className="col-2 col-md-1 p-3 d-flex justify-content-end">
                                        <a href="#">
                                            <img src="/static/images/location-edit-icon.svg" width="24" height="24" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 mt-md-4">
                                <div className="card card-custom rounded shadow-sm">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="pt-3 ps-3 p-custom-modal fs-6">Test Selected</p>
                                        </div>
                                        <div className="col-6 d-flex justify-content-end">
                                            <a className="pt-3 pe-3 a-custom-test fs-6">Add More</a>
                                        </div>
                                    </div>
                                    <div className="row row-custom">
                                        <div className="col-12 col-lg-8 p-3 d-flex">
                                            <img src="/static/images/test.svg" width="80" height="80" alt="..."/>
                                            <div className="row row-custom">
                                                <div className="col-12">
                                                    <p className="fs-4 ps-3 p-custom-test">Covid Antibody Test</p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="ps-3 p-custom">three test included</p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="ps-3 p-color-test text-uppercase"><i className="fas fa-award pe-2"></i>Nabl</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 p-3">
                                            <p className="p-color">Home sample collection available</p>
                                            <div className="col-12 d-flex justify-content-center">
                                                <a className="btn pe-4" href="#" role="button"><i className="fas fa-trash icon-custom"></i></a>
                                                <a className="btn ps-4" href="#" role="button"><i className="fas fa-edit icon-custom-edit"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 mt-md-4">
                                <div className="row row-custom">
                                    <div className="col-12 col-lg-8">
                                        <p className="fs-2">Select Lab</p>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="input-group rounded card card-custom shadow-sm">
                                            <div className="row row-custom">
                                                <div className="col-9 col-md-10">
                                                    <input type="search" className="form-control form-control-custom p-3 search-color"
                                                           placeholder="Search for Labs" aria-label="Search" aria-describedby="search-addon" />
                                                </div>
                                                <div className="col-3 col-md-2 d-flex justify-content-center py-3" >
                                                    <i className="fas fa-search search-color"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 mt-md-4">
                                <div className="card card-custom rounded shadow-sm">
                                    <div className="row row-custom">
                                        <div className="col-12 col-lg-8 p-3 d-flex">
                                            <img src="/static/images/lab.svg" className="img-custom" alt="..."/>
                                            <div className="row row-custom">
                                                <div className="col-12">
                                                    <p className="ps-3 p-custom">Available Today</p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="fs-4 ps-3 p-custom-test">Chevron</p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="ps-3">GEC Branch 3.93km</p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="ps-3">Working Hours: 7AM - 10PM</p>
                                                </div>
                                                <div className="col-12 ps-3">
                                                    <input className="form-check-input fs-5" type="checkbox" value="" id="defaultCheck1"/>
                                                    <label className="form-check-label fs-5 ps-2 p-custom" htmlFor="defaultCheck1">Home Collection</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 p-3">
                                            <div className="col-12">
                                                <p className="p-color-test text-uppercase"><i className="fas fa-award pe-2"></i>Nabl</p>
                                            </div>
                                            <div className="col-12">
                                                <p className="p-color-test text-uppercase"><i className="fas fa-file-medical pe-2"></i>e-report 1-3 working days</p>
                                            </div>
                                            <div className="col-12">
                                                <p className="p-custom fs-4">750.00 TK</p>
                                            </div>
                                            <div className="col-12">
                                                <p className="p-custom-modal"><a className="text-decoration-line-through a-lab-card fs-6">900 </a>You have save 150.00 TK</p>
                                            </div>
                                            <div className="col-12">
                                                <a className="btn btn-primary w-100 rounded fs-6 py-2" href="#" role="button">CONTINUE</a>
                                            </div>
                                        </div>
                                    </div>
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

export default TestAddModal;