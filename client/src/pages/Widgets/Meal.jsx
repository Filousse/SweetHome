import React from 'react';
import Header from "../../components/Header";
import GridGuests from "../../components/dashboard/GridGuests"


const Meal = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Fiche repas" />
        </>
    );
};

export default Meal;