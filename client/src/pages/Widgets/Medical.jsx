import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridGuests from "../../components/dashboard/GridGuests"


const Medical = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Fiche médicale" />
            <Footer/>

        </>
    );
};

export default Medical;