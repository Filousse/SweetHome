import React from "react"
import { useSelector } from 'react-redux'
import { useHistory, Link } from "react-router-dom"
import { Navbar, Nav, Button } from "react-bootstrap"
import Logout from './authentification/Logout'
import { switchColorTeam } from "../components/Utils"


export default function Header(props) {
  const home = props.home;
  const logout = props.logout;
  const history = useHistory();
  const userData = useSelector((state) => state.userReducer);

  const handleSignIn= () => {
      history.push("/signup")
  }

  const handleLogin= () => {
      history.push("/login")
  }

  return (
      <>
      {home 
      ?(
        <Navbar fixed="top" bg="info" variant="light" expand="md">
            <Navbar.Brand>
                <Button onClick={handleLogin} size="sm" style={{ "marginRight": "10px" }} variant="light" >Se connecter</Button>
                <Button onClick={handleSignIn} size="sm" style={{ "marginRight": "10px" }} variant="warning" >Essai Gratuit</Button>
                <Button onClick={handleSignIn} size="sm" variant="danger" >Visite Gratuite</Button>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Service" active="active" style={{ "color": "white" }}>Nos services</Nav.Link>
                    <Nav.Link href="#Widget" style={{ "color": "white" }}>Nos Widgets</Nav.Link>
                    <Nav.Link href="#Contact" style={{ "color": "white" }}>Nous contacter</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

      ):(
        <Navbar style={switchColorTeam(userData.team)} expand="md">
        <Navbar.Brand>
          <Link to="/update-profil">
            <img
              alt=""
              src={userData.photoProfil}
              width="60"
              height="60"
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
          <Nav className="d-flex justify-content-around w-50">
            {!userData.team ?
              (
                <>
                  <Navbar.Brand >
                    <Link to="/guest">
                      <img src="./assets/icon/beneficiaries.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Brand >
                    <Link to="/employee">
                      <img src="./assets/icon/settingsEmployee.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
                    </Link>
                  </Navbar.Brand>
                </>
              ) : (
                <>
                  <Navbar.Brand >
                    <Link to="/guest">
                      <img src="./assets/icon/references.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
                    </Link>
                  </Navbar.Brand>
                </>
  
              )
            }
            <Navbar.Brand >
              <Link to="/">
                <img src="./assets/icon/chat.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/">
                {/* <Badge className="badge-warning">4</Badge> */}
                <img src="./assets/icon/bell.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
              </Link>
  
            </Navbar.Brand>
            {logout
              ? (<Navbar.Brand>
                <Logout />
              </Navbar.Brand>)
              : (<Navbar.Brand>
                <Link to="/dashboard">
                  <img src="./assets/icon/apps.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
                </Link>
              </Navbar.Brand>)
            }
          </Nav>
        </Navbar.Collapse>  
      </Navbar>
      )}
    </>
  )
}