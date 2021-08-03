import React, {useEffect, useState} from 'react';
import User from "../../api/User";
import TestAddModal from "./test_add_modal";

function TestList(props) {
    let testList = props.value
    const [hospitals,setHospitals] = useState('');

    console.log(testList)
    useEffect(()=>{
        User.listData('hospital').then(
            function (response){
                setHospitals(response.data.data)
            }
        ).catch()
    },[])
    console.log(hospitals)
    return (
        <>

        </>
    );
}


export default TestList;