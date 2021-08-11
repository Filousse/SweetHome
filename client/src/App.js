import React, { useEffect, useState } from "react";
import { UidContext } from "./components/appContext";
import axios from "axios";
import Routes from "./components/routes/Routes"

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes/>  
    </UidContext.Provider>
  );
};

export default App;

// import React from "react"
// import { AuthProvider } from "./components/appContext"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// // Routes
// import Home from "./pages/Home"
// import Signup from "./components/authentification/Signup"
// import Login from "./components/authentification/Login"
// import ForgotPassword from "./components/authentification/ForgotPassword"
// // Routes privates
// import PrivateRoute from "./components/routes/PrivateRoute"
// import Dashboard from "./pages/Dashboard"
// import UpdateProfile from "./components/authentification/UpdateProfile"
// import NewStaff from "./components/dashboard/NewStaff"
// import CorrespondanceEducative from "./pages/Widgets/CorrespondanceEducative"
// import WidgetEduc_1 from "./pages/Widgets/WidgetEduc_1"


// const App = () => {

//   return (

//     <Router>
//       <AuthProvider>
//         <Switch>
//           <Route path="/home" component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/signup" component={Signup} />
//           <Route path="/login" component={Login} />
//           <Route path="/forgot-password" component={ForgotPassword} />
//           <PrivateRoute path="/dashboard" component={Dashboard} />
//           <PrivateRoute path="/update-profile" component={UpdateProfile} />
//           <PrivateRoute path="/create-staff" component={NewStaff} />
//           <PrivateRoute path="/Cahier de correspondance" component={CorrespondanceEducative} />
//           <PrivateRoute path="/widgetEduc_1" component={WidgetEduc_1} />
//         </Switch>
//       </AuthProvider>
//     </Router>
//   );
// };

// export default App;