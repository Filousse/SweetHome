import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UidContext } from "../appContext"
// Routes auth and profil
import Signup from "../authentification/Signup"
import Login from "../authentification/Login"
// import ForgotPassword from "../authentification/ForgotPassword"
import UpdateProfil from "../profil/UpdateProfil"
// Routes pages
import Home from "../../pages/Home"
import Dashboard from "../../pages/Dashboard"
import ReadUsers from "../../pages/Employee"
import CreateUser from "../user/CreateUser"
import ReadGuests from "../../pages/Guest"
import NewGuest from "../guest/createGuest/NewGuest"
import PictureGuest from "../guest/createGuest/PictureGuest"
import RefsGuest from "../guest/createGuest/RefsGuest"

import FilesGuest from "../guest/filesGuest/FilesGuest"



// Routes widgets pages 
import CorrespondanceEducative from "../../pages/Widgets/CorrespondanceEducative"
import WidgetEduc_1 from "../../pages/Widgets/WidgetEduc_1"


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
                <Route path="/Cahier de correspondance" component={CorrespondanceEducative} />
                <Route path="/widgetEduc_1" component={WidgetEduc_1} />
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