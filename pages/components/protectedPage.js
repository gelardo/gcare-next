import React, {useEffect} from 'react'
import Notloggedin from "./notloggedin";
import Login from "../login";
import {useRouter} from "next/router";
import {useAuth} from "../hooks";

export default function ProtectedPage({children}) {
    const auth = useAuth();
    return (
        <>
            {(auth.user === false) ? (
                <div>
                    <Notloggedin/>
                    <Login/>
                </div>
                ):(children)}
        </>
    );
}