import React from "react";
import { useRouter } from 'next/router'
import LocationFinder from "../components/DoctorBooking/location_finder";
import DoctorSearch from "../components/DoctorBooking/doctor_search";
import DoctorList from "../components/DoctorBooking/doctor_list";
import DoctorBookingForm from "../components/DoctorBooking/doctor_booking_form";
const Doctor = ({doctorList}) => {
    const router = useRouter()
    const { sid } = router.query
     console.log(doctorList)
        return (
            <>
            <LocationFinder/>
            <DoctorSearch/>

                {(doctorList) && (doctorList.map((doctor,index  ) => (
                    <DoctorList key={index} value={doctor}/>
                )))}
            </>
        )
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({params}) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:8000/api/doctor/'+params.sid)
    const doctorList = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            doctorList,
        },
    }
}
export async function getStaticPaths(params) {
    return {
        paths: [
            { params: { sid: '1' } },
        ],
        fallback: true,
    }
}

export default Doctor