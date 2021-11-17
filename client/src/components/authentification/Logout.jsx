import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useHistory } from "react-router-dom"


const Logout = () => {
  const history = useHistory();
  // Back remove 
  // const removeCookie = (key) => {
  //   if (window !== "undefined") {
  //     cookie.remove(key, { expires: 1 });
  //   }
  // };

  const handelLogout = async () => {
    // Front remove
    // await axios({
    //   method: "get",
    //   url: `${process.env.REACT_APP_API_URL}api/user/logout`,
    //   withCredentials: true,
    // })
    //   .then(() => removeCookie("jwt"))
    //   .catch((err) => console.log(err));
      history.push("/");
  };

  return (
      <img 
        onClick={handelLogout} 
        src="./assets/icon/btn_Logout.png" 
        alt="btn_Logout"
        style={{"height":"50px", "width":"50px", cursor:"pointer"}}
      />
  );
};

export default Logout;
