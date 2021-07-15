import React from 'react';
import LabAddress from "./components/Labtest/lab_address";
import LabtestCarousel from "./components/Labtest/labtest_carousel";
import LabSearch from "./components/Labtest/lab_search";
import TestList from "./components/Labtest/test_list";
import TestAddModal from "./components/Labtest/test_add_modal";

function Labtest() {
    return (
        <>

            <LabAddress/>
            <LabtestCarousel/>
            <LabSearch/>
            <TestList/>
            <TestAddModal/>

        </>
    );
}

export default Labtest;