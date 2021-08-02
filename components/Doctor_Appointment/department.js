import React, {useEffect, useState} from 'react';
import Link from "next/link";
import User from "../../api/User";
function Department(props) {
    const[departmentList, setDepartmentList] = useState([]);
    useEffect(()=>{
        User.listDepartment().then(
            function (response){
                setDepartmentList(response.data.data)
            }
        ).catch()
    },[])
    return (
        <>
            <div className="container mt-4 mt-md-4">
                <div className="row row-cols-2 row-cols-md-4 g-4">
                    {departmentList.map((department,index   ) => (
                        <div className="col" key={index}>
                            <Link href='/doctor/[sid]' as={`/doctor/${department.id}`} >
                                <a className="card card-custom rounded shadow-sm a-custom-appoinment">
                                    <img src="/static/images/cardiology.svg" className="card-img-top px-5 px-lg-5 pt-3 pt-lg-4" width="" height="120px" alt=""/>
                                    <div className="card-body px-2 pb-3">
                                        <p className="fs-6 fs-lg-4 card-title text-center">{department.name}</p>
                                    </div>
                                </a>
                            </Link>

                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Department;