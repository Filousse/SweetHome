import React from 'react';
import Header from "../../components/Header";
import GridGuests from "../../components/dashboard/GridGuests"


const Medical = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Fiche médicale" />
        </>
    );
};

export default Medical;