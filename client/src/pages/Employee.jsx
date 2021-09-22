import React from 'react';
import Header from '../components/dashboard/Header'
import ReadUsers from '../components/employee/ReadUsers';
import Footer from '../components/Footer';

const Employee = () => {
    return (
        <>
            <Header />
            <ReadUsers />
            <Footer />
        </>
    );
};

export default Employee;