import React, {useEffect, useState} from 'react';
import DoctorLocation from "../components/Doctor_Appointment/doctor_location";
import SearchDoctor from "../components/Doctor_Appointment/search_doctor";
import Department from "../components/Doctor_Appointment/department";
import User from "../api/User"
import {reactStrictMode} from "../next.config";
function DoctorAppointment(props) {

    return (
        <>
            <DoctorLocation/>
            <SearchDoctor/>
            <Department />
        </>
    );
}

export default DoctorAppointment;