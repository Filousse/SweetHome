import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridGuests from "../../components/dashboard/GridGuests"

const Treatment = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Traitements et médicaments" />
            <Footer/>

        </>
    );
};

export default Treatment;