import React from 'react';
import Header from '../components/dashboard/Header'
import ReadGuests from '../components/guest/ReadGuests'
import Footer from '../components/Footer';

const Employee = () => {
    return (
        <>
            <Header />
            <ReadGuests />
            <Footer />
        </>
    );
};

export default Employee;