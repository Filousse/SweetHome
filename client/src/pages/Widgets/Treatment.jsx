import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridGuests from "../../components/dashboard/GridGuests"

const Treatment = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Traitement médicale" />
            <Footer/>
        </>
    );
};

export default Treatment;