import React, { useEffect, useState } from "react";
import { UidContext } from "./components/appContext";
import axios from "axios";
import Routes from "./components/routes/Routes";
import { useDispatch } from "react-redux";
import { getUser } from './actions/user.action';

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

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
    if (uid) dispatch(getUser(uid));
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes/>  
    </UidContext.Provider>
  );
};

export default App;