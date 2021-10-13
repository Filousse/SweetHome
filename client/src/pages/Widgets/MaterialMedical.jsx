import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridGuests from "../../components/dashboard/GridGuests"


const MaterialMedical = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Matériel médical" />
            <Footer/>

        </>
    );
};

export default MaterialMedical;