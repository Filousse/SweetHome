import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridGuests from "../../components/dashboard/GridGuests"


const Staff = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Roulement du personnel" />
            <Footer/>

        </>
    );
};

export default Staff;