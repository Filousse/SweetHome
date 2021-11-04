import React from 'react';
import Header from "../../components/Header";
import GridGuests from "../../components/dashboard/GridGuests"


const MaterialMedical = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Matériel médical" />
        </>
    );
};

export default MaterialMedical;