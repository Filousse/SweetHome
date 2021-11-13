import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UidContext } from "../appContext"
import Footer from "../Footer"
//Modals
import Signup from "../authentification/Signup"
import Login from "../authentification/Login"
import CreateUser from "../user/CreateUser"
import UpdateProfil from "../profil/UpdateProfil"
import NewGuest from "../guest/CreateGuest/NewGuest"
import PictureGuest from "../guest/CreateGuest/PictureGuest"
import RefsGuest from "../guest/CreateGuest/RefsGuest"
import ValidationGuest from "../guest/CreateGuest/ValidationGuest"
// Pages
import Home from "../../pages/Home"
import Dashboard from "../../pages/Dashboard"
import ReadUsers from "../../pages/Employee"
import ReadGuests from "../../pages/Guest"
import Messaging from "../../pages/Messaging"
// Pages Widgets 
import Medical from "../../pages/Widgets/Medical"
import Treatment from "../../pages/Widgets/Treatment"
import MaterialMedical from "../../pages/Widgets/MaterialMedical"
import Needs from "../../pages/Widgets/Needs"
import Picto from "../../pages/Widgets/Picto"
import Planning from "../../pages/Widgets/Planning"
import Hygiene from "../../pages/Widgets/Hygiene"
import Meal from "../../pages/Widgets/Meal"
import Info from "../../pages/Widgets/Info"
import Abstreinte from "../../pages/Widgets/Abstreinte"
import Transmission from "../../pages/Widgets/Transmission"
import Staff from "../../pages/Widgets/Staff"
import ActionsFile from "../files/ActionsFile"

const Routes = () => {
    const uid = useContext(UidContext)
    return (
        <Router>
            { uid ? (
                <>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/update-profil" component={UpdateProfil} />
                        <Route path="/employee" component={ReadUsers} />
                        <Route path="/messaging" component={Messaging} />
                        <Route path="/new-user" component={CreateUser} />
                        <Route path="/guest" component={ReadGuests} />
                        <Route path="/new-guest" component={NewGuest} />
                        <Route path="/picture-guest" component={PictureGuest} />
                        <Route path="/references-guest" component={RefsGuest} />
                        <Route path="/validation-guest" component={ValidationGuest} />
                        <Route path="/widget-medical" component={Medical} />
                        <Route path="/widget-treatment" component={Treatment} />
                        <Route path="/widget-material" component={MaterialMedical} />
                        <Route path="/widget-needs" component={Needs} />
                        <Route path="/widget-picto" component={Picto} />
                        <Route path="/widget-planning" component={Planning} />
                        <Route path="/widget-hygiene" component={Hygiene} />
                        <Route path="/widget-meal" component={Meal} />
                        <Route path="/widget-info" component={Info} />
                        <Route path="/widget-abstreinte" component={Abstreinte} />
                        <Route path="/widget-transmission" component={Transmission} />
                        <Route path="/widget-staff" component={Staff} />
                        <Route path="/read-file/:Id/:Widget" component={ActionsFile} />
                    </Switch>
                    <Footer />
                </>
            ) : (
                <>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                    </Switch>
                    <Footer home={true} />
                </>
                )}
        </Router>
    );
};

export default Routes;