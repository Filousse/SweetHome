import React from "react"
import { useSelector } from 'react-redux'
import { useHistory, Link } from "react-router-dom"
import { Navbar, Badge, Nav } from "react-bootstrap"
import Logout from '../authentification/Logout'

export default function Header(props) {
  const logout = props.logout
  const history = useHistory()
  const userData = useSelector((state) => state.userReducer);


  const handleStaffSetting = () => {
    history.push("/employee")
  }

  const switchColorTeam = (team) => {
    switch (team) {
      case 'Éducative': {
        return { "backgroundColor": "#61a6fb" }
      }
      case 'Médical': {
        return { "backgroundColor": "#28da69" }
      }
      case '': {
        return { "backgroundColor": "#e826b1" }
      }
      default:
        return { "backgroundColor": "#e826b1" }
    }
  }

  return (
    <Navbar style={switchColorTeam(userData.team)} expand="md">
      <Navbar.Brand>
        <Link to="/update-profil">
          <img
            alt=""
            src={userData.photoProfil}
            width="40"
            height="40"
            style={{ 'borderRadius': '20px' }}
            className="d-inline-block align-top"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Text className="text-light" >
        {userData.surname} {userData.name}
      </Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link className="text-light" href="#Service" active="active" ></Nav.Link>
        {!userData.team &&
          <Nav.Link className="text-light" onClick={handleStaffSetting} >Employés</Nav.Link>
        }
        <Nav.Link className="text-light" href="#Contact">Messages</Nav.Link>
        <Nav.Link className="text-light" href="#Contact">Notification  <Badge className="badge-warning">4</Badge></Nav.Link>
        {logout
          ? (<Navbar.Brand>
            <Logout />
          </Navbar.Brand>)
          : (<Navbar.Brand>
            <Link to="/dashboard">
              <img src="./assets/img/launchpad.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
            </Link>
          </Navbar.Brand>)
        }
      </Navbar.Collapse>
    </Navbar>
  )
}