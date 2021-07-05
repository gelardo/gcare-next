import React from 'react';
import LocationFinder from "./components/DoctorBooking/location_finder";
import DoctorSearch from "./components/DoctorBooking/doctor_search";
import DoctorList from "./components/DoctorBooking/doctor_list";
import DoctorBookingForm from "./components/DoctorBooking/doctor_booking_form";

function Doctorbooking(props) {
    return (
        <>
            <LocationFinder/>
            <DoctorSearch/>
            <DoctorList/>
            <DoctorBookingForm/>
        </>
    );
}

export default Doctorbooking;