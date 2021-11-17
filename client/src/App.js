import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from './actions/user.actions';
import { UidContext } from "./components/appContext";
import Routes from "./components/routes/Routes";


const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     await axios({
  //       method: "get",
  //       url: `${process.env.REACT_APP_API_URL}jwtid`,
  //       withCredentials: true,
  //     })
  //       .then((res) => {
  //         setUid(res.data);
  //       })
  //       .catch((err) => console.log("No token"));
  //   };
  //   fetchToken();
  //   if (uid) dispatch(getUser(uid));
  // }, [uid, dispatch]);

// METTRE AXIOS GET ID USER DE INFOUSER POUR SETUID
  useEffect(() => {
    const fetchToken = async () => {
      const testUid = "6137669dc72c006b6015d845";
      setUid(testUid)
      // await axios({
      //   method: "get",
      //   url: `${process.env.REACT_APP_API_URL}jwtid`,
      //   withCredentials: true,
      // })
      //   .then((res) => {
      //     setUid(res.data);
      //   })
      //   .catch((err) => console.log("No token"));


        // useEffect(() => {
  //   const fetchToken = async () => {
  //     await axios({
  //       method: "get",
  //       url: `${process.env.REACT_APP_API_URL}jwtid`,
  //       withCredentials: true,
  //     })
  //       .then((res) => {
  //         setUid(res.data);
  //       })
  //       .catch((err) => console.log("No token"));
  //   };
  //   fetchToken();
  //   if (uid) dispatch(getUser(uid));
  // }, [uid, dispatch]);
    };
    console.log(uid);
    fetchToken();
    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes/>  
    </UidContext.Provider>
  );
};

export default App;