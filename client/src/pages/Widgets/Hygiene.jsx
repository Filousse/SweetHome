import React from 'react';
import Header from "../../components/Header";
import GridGuests from "../../components/dashboard/GridGuests"


const Hygiene = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Fiche hygiène" />
        </>
    );
};

export default Hygiene;