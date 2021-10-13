import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridGuests from "../../components/dashboard/GridGuests"


const Info = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Information général" />
            <Footer/>

        </>
    );
};

export default Info;