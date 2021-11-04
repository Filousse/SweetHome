import React from 'react';
import Header from "../../components/Header";
import GridGuests from "../../components/dashboard/GridGuests"

const Treatment = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Traitement médicale" />
        </>
    );
};

export default Treatment;