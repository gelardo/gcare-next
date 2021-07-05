import React from 'react';
import DoctorLocation from "./components/Doctor_Appointment/doctor_location";
import SearchDoctor from "./components/Doctor_Appointment/search_doctor";
import Department from "./components/Doctor_Appointment/department";

function DoctorAppointment(props) {
    return (
        <>
            <DoctorLocation/>
            <SearchDoctor/>
            <Department/>
        </>
    );
}

export default DoctorAppointment;