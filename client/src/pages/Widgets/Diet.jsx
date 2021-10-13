import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import GridGuests from "../../components/dashboard/GridGuests"

const Diet = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Régime alimentaire" />
            <Footer/>
        </>
    );
};

export default Diet;