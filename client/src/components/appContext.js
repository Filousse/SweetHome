import { createContext } from 'react';

export const UidContext = createContext();
export const uid = UidContext.value
// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";

// const AuthContext = React.createContext()

// export function useAuth() {
// return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {
//        const [loading, setLoading] = useState(false)
//        const [uid, setUid] = useState(null);

//        useEffect(() => {
//          const fetchToken = async () => {
//            await axios({
//              method: "get",
//              url: `${process.env.REACT_APP_API_URL}jwtid`,
//              withCredentials: true,
//            })
//              .then((res) => {
//                console.log("res.data=>",res.data);
//                setUid(res.data);
//                setLoading(true);
//              })
//              .catch((err) => console.log("No token"));
//              setLoading(false);

//          };
//          fetchToken();
//        }, [uid]);

//       const value = {
//         uid,

//        }

//       return (
//         <AuthContext.Provider value={value}>
//           {!loading && children}
//         </AuthContext.Provider>
//       )
// }



