import React, {useEffect, useRef, useState} from 'react';
import {Button, Modal} from "react-bootstrap";

function TestAddModal({tests,hospitals,modalShow}) {
    const [show, setShow] = useState(false);
    const nodeRef = useRef(null);
    let status = 0;

    useEffect(
        () => {
                setShow(modalShow)
            console.log(modalShow)
        },[show]
    )
    console.log(modalShow)
    return (
        <>


        </>
    );
}

export default TestAddModal;