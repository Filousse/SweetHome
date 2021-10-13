import React from 'react';
import Header from '../components/Header'
import GridWidgets from '../components/dashboard/GridWidgets'
import Footer from "../components/Footer"
import SwitchUser from "../components/dashboard/SwitchUser"

const Dashboard = () => {

  return (
    <>
      <Header logout={true}></Header>
      <SwitchUser />
      <GridWidgets />
      <Footer />
    </>
  );
};

export default Dashboard;