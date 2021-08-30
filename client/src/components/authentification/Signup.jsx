import React, { useState } from "react";
import { Form, Button, Card, Row } from "react-bootstrap"
import axios from "axios";
import Login from "./Login";
import { Link} from "react-router-dom"


const Signup = () => {
const [loading, /*setLoading*/] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [photoProfil, setPhotoProfil] = useState("photo");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [ adminName, /*setAdminName*/ ] = useState("admin name")
  const [team, setTeam] = useState("");
  const [job, setJob] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    passwordConfirmError.innerHTML = "";

    if (password !== controlPassword ) {
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";
      } 
      else {
        await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}api/user/register`,
          data: {
            name,
            surname,
            photoProfil,
            bio,
            email,
            password,
            adminName,
            team,
            job,
          },
        })
          .then((res) => {
            console.log("res=>",res);
            if (res.data.errors) {
              emailError.innerHTML = res.data.errors.email;
              passwordError.innerHTML = res.data.errors.password;
            } else {
              setFormSubmit(true);
            }
          })
          .catch((err) => console.log(err));
      }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <Row className="justify-content-center m-4">
              <span style={{"color":"#5cb85c"}}>Enregistrement réussi, veuillez-vous connecter</span>
          </Row>
          <Login />
        </>
      ) : (
        <Row className="justify-content-center m-4">
        <Card className="w-75" style={{"maxWidth": "400px"}}>
            <Card.Body className="card-body" >
              <h2 className="text-center mb-4">Créer un compte</h2>
              <Form onSubmit={handleRegister}>
          <Form.Label>Noms</Form.Label>
          <br />
          <Form.Control
            required
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <Form.Label>Prénom</Form.Label>
          <br />
          <Form.Control
            required
            type="text"
            name="surname"
            id="surname"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
          />
          <br />
          <Form.Label htmlFor="photoProfil">photoProfil</Form.Label>
          <br />
          <Form.Control
            required
            type="text"
            name="photoProfil"
            id="photoProfil"
            onChange={(e) => setPhotoProfil(e.target.value)}
            value={photoProfil}
          />
          <br />
          <Form.Label htmlFor="bio">Biographie</Form.Label>
          <br />
          <Form.Control
            required
            type="text"
            name="bio"
            id="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
          <br />
          <Form.Label htmlFor="email">Email</Form.Label>
          <br />
          <Form.Control
            required
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div style={{"color":"red"}} className="email error"></div>
          <br />
          <Form.Label htmlFor="password">Mot de passe</Form.Label>
          <br />
          <Form.Control
            required
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div style={{"color":"red"}} className="password error"></div>
          <br />
          <Form.Label htmlFor="password-conf">Confirmer mot de passe</Form.Label>
          <br/>
          <Form.Control
            required
            type="password"
            name="password"
            id="password-conf"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div style={{"color":"red"}} className="password-confirm error"></div>
          <br />
          <Form.Label>Equipe</Form.Label>
          <br />
          <Form.Control
            required
            type="text"
            name="team"
            id="team"
            onChange={(e) => setTeam(e.target.value)}
            value={team}
          />
          <br />
          <Form.Label>Métier</Form.Label>
          <br />
          <Form.Control
            required
            type="text"
            name="job"
            id="job"
            onChange={(e) => setJob(e.target.value)}
            value={job}
          />
          <br/><br/>
          <Button disabled={loading} className="w-100" type="submit">
              Créer
            </Button>
          </Form > 
          <div className="w-100 text-center mt-3">
            <Link to="/home">Acceuil</Link>
          </div>
        </Card.Body>
      </Card>
    </Row>
  )
}</>)
}

export default Signup;

