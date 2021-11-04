import React from 'react';
import Header from "../../components/Header";
import GridGuests from "../../components/dashboard/GridGuests"


const Planning = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Planning des résidents" />
        </>
    );
};

export default Planning;