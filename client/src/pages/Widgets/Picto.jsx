import React from 'react';
import Header from "../../components/Header";
import GridGuests from "../../components/dashboard/GridGuests"

const Picto = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Pictogrammes" />
        </>
    );
};

export default Picto;