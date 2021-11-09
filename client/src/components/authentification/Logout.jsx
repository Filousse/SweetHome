import React from "react";
import axios from "axios";
import cookie from "js-cookie";

const Logout = () => {
  // Front remove 
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    // Back remove
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    
    window.location = "/";
  };

  return (
      <img 
        onClick={logout} 
        src="./assets/icon/btn_Logout.png" 
        alt="btn_Logout"
        style={{"height":"30px", "width":"30px", cursor:"pointer"}}
      />
  );
};

export default Logout;
