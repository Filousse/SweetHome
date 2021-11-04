import React from 'react';
import Header from "../../components/Header";
import GridGuests from "../../components/dashboard/GridGuests"


const Info = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Information générale" />

        </>
    );
};

export default Info;