import React from "react";
import { useRouter } from 'next/router'
import LocationFinder from "../../components/DoctorBooking/location_finder";
import DoctorSearch from "../../components/DoctorBooking/doctor_search";
import DoctorList from "../../components/DoctorBooking/doctor_list";

import DoctorBookingForm from "../../components/DoctorBooking/doctor_booking_form";
import User from "../../api/User";
import Api from "../../api/Api";
const Doctor = ({doctorList}) => {
    const router = useRouter()
    const { sid } = router.query
    let doctors = doctorList.data[0].doctors
    // User.listSpecialities().then(function (response){
    //     console.log(response)
    //     // Get the paths we want to pre-render based on posts
    //     // const paths = response.data.data.map((speciality) => (
    //     //     {
    //     //          params: { sid: speciality.id.toString() },
    //     //     }
    //     //
    //     // ))
    //     // console.log(paths)
    //     // return { paths, fallback: 'blocking' }
    // })
    // console.log(doctors)
        return (
            <>
            <LocationFinder/>
            <DoctorSearch/>

                {(doctors) && (doctors.map((doctor,index  ) => (
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
    const res = await fetch('https://backend.gcare.com.bd/api/speciality/show/'+params.sid)
    const doctorList = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            doctorList,
        },
    }
}
export async function getStaticPaths() {
    const request  = await Api.get('https://backend.gcare.com.bd/api/speciality/index')

    // console.log(request.data.data)
    //const paths = movies.map(movie =>`/movies/${movie.show.id}`)

    const paths = request.data.data.map(speciality =>({
        params: {sid: speciality.id.toString()},
    }))

    return {
        paths,
        fallback: false
    }

}

export default Doctor