import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridGuests from "../../components/dashboard/GridGuests"


const Picto = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Pictogramme" />
            <Footer/>

        </>
    );
};

export default Picto;