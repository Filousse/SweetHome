import React from "react"
import { useSelector } from 'react-redux'
import { useHistory, Link } from "react-router-dom"
import { Navbar, Badge, Nav } from "react-bootstrap"
import Logout from '../authentification/Logout'


export default function Header(props) {
  const team = props.team
  const history = useHistory()
  const userData = useSelector((state) => state.userReducer);

  const handleStaffSetting = () => {
    history.push("/create-staff")
  }

  const switchColorTeam = (team) =>{
    switch(team){
        case 'Equipe educative': {
            return {"backgroundColor": "#61a6fb"}
        }
        case 'Equipe Médical': {
            return  {"backgroundColor": "#28da69"}
        }
        case 'Administrateur': {
             return  {"backgroundColor": "#e826b1"}
        }
        default:
        return  {"backgroundColor": "#e826b1"}
    }
  }

  return (
        <Navbar style={switchColorTeam(team)}  expand="md">
            <Navbar.Brand>
              <Link to="/update-profil"> 
                <img   
                    alt=""
                    src={userData.photoProfil}
                    width="40"
                    height="40"
                    style={{'borderRadius':'20px'}}
                    className="d-inline-block align-top" 
                  />
              </Link>   
            </Navbar.Brand>
            <Navbar.Text className="text-light" >
              Bonjour {userData.name} 
            </Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">     
              <Nav.Link className="text-light" href="#Service" active="active" ></Nav.Link>
              { team === "Administrateur" && 
               <Nav.Link className="text-light" onClick={handleStaffSetting} >Employés</Nav.Link>
              }   
              { team === ""  && 
               <Nav.Link className="text-light" onClick={handleStaffSetting} >Employés</Nav.Link>
              }   
                <Nav.Link className="text-light" href="#Contact">Messages</Nav.Link>
                <Nav.Link className="text-light" href="#Contact">Notification  <Badge className="badge-warning">4</Badge></Nav.Link>
                <Navbar.Brand>
                  <Logout />
                </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar> 
  )
}