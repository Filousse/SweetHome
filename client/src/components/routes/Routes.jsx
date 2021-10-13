import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UidContext } from "../appContext"

import Signup from "../authentification/Signup"
import Login from "../authentification/Login"
import CreateUser from "../user/CreateUser"
import UpdateProfil from "../profil/UpdateProfil"
import NewGuest from "../guest/createGuest/NewGuest"
import PictureGuest from "../guest/createGuest/PictureGuest"
import RefsGuest from "../guest/createGuest/RefsGuest"
import FilesGuest from "../guest/createGuest/FilesGuest"
// Pages
import Home from "../../pages/Home"
import Dashboard from "../../pages/Dashboard"
import ReadUsers from "../../pages/Employee"
import ReadGuests from "../../pages/Guest"
// Pages Widgets 
import Medical from "../../pages/Widgets/Medical"
import Treatment from "../../pages/Widgets/Treatment"
import MaterialMedical from "../../pages/Widgets/MaterialMedical"
import Diet from "../../pages/Widgets/Diet"
import Family from "../../pages/Widgets/Family"
import Needs from "../../pages/Widgets/Needs"
import Picto from "../../pages/Widgets/Picto"
import Planning from "../../pages/Widgets/Planning"
import Hygiene from "../../pages/Widgets/Hygiene"
import Meal from "../../pages/Widgets/Meal"
import Info from "../../pages/Widgets/Info"
import Abstreinte from "../../pages/Widgets/Abstreinte"
import Transmission from "../../pages/Widgets/Transmission"
import Meeting from "../../pages/Widgets/Meeting"
import Staff from "../../pages/Widgets/Staff"
import Room from "../../pages/Widgets/Room"
import LayoutWidget from "../files/LayoutFiles"

// import ForgotPassword from "../authentification/ForgotPassword"

const Routes = () => {
     const uid = useContext(UidContext)
  return (
    <Router>
        { uid ? (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/update-profil" component={UpdateProfil} />
                <Route path="/employee" component={ReadUsers} />
                <Route path="/employee-create" component={CreateUser} />
                <Route path="/guest" component={ReadGuests} />
                <Route path="/new-guest" component={NewGuest} />
                <Route path="/picture-guest" component={PictureGuest} />
                <Route path="/references-guest" component={RefsGuest} />
                <Route path="/files-guest" component={FilesGuest} />
                <Route path="/widget-medical" component={Medical} />
                <Route path="/widget-treatment" component={Treatment} />
                <Route path="/widget-material" component={MaterialMedical} />
                <Route path="/widget-diet" component={Diet} />
                <Route path="/widget-family" component={Family} />
                <Route path="/widget-needs" component={Needs} />
                <Route path="/widget-picto" component={Picto} />
                <Route path="/widget-planning" component={Planning} />
                <Route path="/widget-hygiene" component={Hygiene} />
                <Route path="/widget-meal" component={Meal} />
                <Route path="/widget-info" component={Info} />
                <Route path="/widget-abstreinte" component={Abstreinte} />
                <Route path="/widget-transmission" component={Transmission} />
                <Route path="/widget-meeting" component={Meeting} />
                <Route path="/widget-staff" component={Staff} />
                <Route path="/widget-room" component={Room} />
                <Route path="/read-file/:dataWidget/:dataName" component={LayoutWidget} />
            </Switch>
        ) : (
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
            </Switch>
        )} 
    </Router>
  );
};

export default Routes;