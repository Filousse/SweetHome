import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridGuests from "../../components/dashboard/GridGuests"


const Needs = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Fiche besoins" />
            <Footer/>

        </>
    );
};

export default Needs;