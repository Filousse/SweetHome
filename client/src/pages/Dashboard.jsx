import React, {useState} from 'react';
import Header from '../components/dashboard/Header'
import Grid from '../components/dashboard/Grid'
import Footer from "../components/Footer"

const Dashboard = () => {
  const [team, updateTeam ]= useState("")

  return (
  
    <>
      <Header team={team}></Header>
      <Grid team={team} updateTeam={updateTeam}></Grid>
      <Footer/>
    </>
  );
};

export default Dashboard;