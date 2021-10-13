import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridGuests from "../../components/dashboard/GridGuests"

const Contact = () => {
    return (
        <>
            <Header logout={false}></Header>
            <GridGuests widget="Répertoire de contact" />
            <Footer/>
        </>
    );
};

export default Contact;