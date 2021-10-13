import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridGuests from "../../components/dashboard/GridGuests"


const Meal = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Fiche repas" />
            <Footer/>

        </>
    );
};

export default Meal;