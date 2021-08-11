// import React from "react"
// import { Route, Redirect } from "react-router-dom"
// import { useAuth } from "../appContext"

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { uid } = useAuth()

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return uid ? (<Component {...props} />) : (<Redirect to="/home" />)
//       }}
//     ></Route>
//   )
// }





// // import React, { useContext } from "react"
// // import { Route, Redirect } from "react-router-dom"
// // // 2 recupérer currentUser 
// // import { UidContext } from "../appContext"

// // export default function PrivateRoute({ component: Component, ...rest }) {
// //   const uid = useContext(UidContext);
// //   const test = () => {
// //     console.log("uid from privateroute=>", uid);
// //   }
// //   test();

// //   return (
// //     <Route
// //       {...rest}
// //       render={props => {
// //         // 3 utiliser currentuser
// //         return uid ? (<Component {...props} />) : (<Redirect to="/home" />)
// //       }}
// //     ></Route>
// //   )
// // }