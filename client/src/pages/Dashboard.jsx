import React from 'react';
import Header from '../components/Header'
import Grid from '../components/dashboard/Grid'
import Footer from "../components/Footer"
import SwitchUser from "../components/dashboard/SwitchUser"

const Dashboard = () => {

  return (
  
    <>
      <Header logout={true}></Header>
      <SwitchUser />
      <Grid></Grid>
      <Footer/>
    </>
  );
};

export default Dashboard;