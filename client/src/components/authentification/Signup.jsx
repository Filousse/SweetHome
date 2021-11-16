import React, { useState } from "react";
import { Form, Button, Card, Row, Container } from "react-bootstrap"
import axios from "axios";
import Login from "./Login";
import { useSelector } from 'react-redux'
import { useHistory, Link } from "react-router-dom"


const Signup = (props) => {
  const createEmployee = props.createEmployee;
  const userData = useSelector((state) => state.userReducer);
  const history = useHistory();
  const [formSubmit, setFormSubmit] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [association, setAssociation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");
  const [team, setTeam] = useState("Éducative");
  const [job, setJob] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const adminName = userData.name;
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    passwordConfirmError.innerHTML = "";
    if (password !== controlPassword) {
      passwordConfirmError.innerHTML =
        "Les mots de passe ne correspondent pas.";
    }
    else {
      if (createEmployee) {
        await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}api/user/register`,
          data: {
            name,
            surname,
            email,
            password,
            adminName,
            team,
            job,
          },
        })
          .then((res) => {
            console.log("res=>", res);
            if (res.data.errors) {
              emailError.innerHTML = res.data.errors.email;
              passwordError.innerHTML = res.data.errors.password;
            } else {
              setFormSubmit(true);
            }
          })
          .catch((err) => console.log(err));
      } else {
        await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}api/user/register`,
          data: {
            name,
            surname,
            association,
            email,
            password,
            job,
          },
        })
          .then((res) => {
            console.log("res=>", res);
            if (res.data.errors) {
              emailError.innerHTML = res.data.errors.email;
              passwordError.innerHTML = res.data.errors.password;
            } else {
              setFormSubmit(true);
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const handelBackEmployee = () => {
    history.push("/employee")
    window.location.reload();
  }

  return (
    <>
      {formSubmit ? (
        <>
          <Container style={{ "backgroundColor": "rgb(252, 230, 248)", "minHeight": 650 }} className="justify-content-center p-4">
            {createEmployee
              ? <>
                <Row className="justify-content-center m-4">
                  <div class="alert alert-success m-4" role="alert">Enregistrement réussi, un email de bienvenue a été envoyé au nouvel employer.</div>
                </Row>
                <Row className="justify-content-center">
                  <Button onClick={handelBackEmployee}>retour à la liste des employés</Button>
                </Row>
              </>
              : <>
                <Login formSubmit={true} />
                <Row className="justify-content-center pb-4">
                  <div class="alert alert-success" role="alert">Enregistrement réussi, veuillez-vous connecter!</div>
                </Row>
              </>
            }
          </Container>
        </>
      ) : (
          <Container style={{ "backgroundColor": "rgb(252, 230, 248)" }} className="justify-content-center pt-4 pb-4">
            <Row className="justify-content-center ">
              <img src="./assets/img/pinkCat.png" style={{ "maxWidth": 280, "paddingRight": 15 }} />
            </Row>
            <Row className="justify-content-center ">
              <Card className="w-75" style={{ "maxWidth": "400px" }}>
                <Card.Header className="pt-4" >
                  {createEmployee
                    ? <h2 className="text-center mb-4">Je crée un compte employé : </h2>
                    : <h2 className="text-center mb-4">Je créer mon compte :</h2>
                  }
                </Card.Header>
                <Card.Body >
                  <Form onSubmit={handleRegister}>
                    <Form.Label>Noms</Form.Label>
                    <br />
                    <Form.Control
                      required
                      type="text"
                      name="surname"
                      id="surname"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <br />
                    <Form.Label>Prénom</Form.Label>
                    <br />
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      id="name"
                      onChange={(e) => setSurname(e.target.value)}
                      value={surname}
                    />
                    {!createEmployee &&
                      <>
                        <br />
                        <Form.Label htmlFor="bio">Association</Form.Label>
                        <br />
                        <Form.Control
                          required
                          type="text"
                          rows={3}
                          name="association"
                          id="association"
                          onChange={(e) => setAssociation(e.target.value)}
                          value={association}
                        />
                      </>
                    }
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
                    <div style={{ "color": "red" }} className="email error"></div>
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
                    <div style={{ "color": "red" }} className="password error"></div>
                    <br />
                    <Form.Label htmlFor="password-conf">Confirmer mot de passe</Form.Label>
                    <br />
                    <Form.Control
                      required
                      type="password"
                      name="password"
                      id="password-conf"
                      onChange={(e) => setControlPassword(e.target.value)}
                      value={controlPassword}
                    />
                    <div style={{ "color": "red" }} className="password-confirm error"></div>
                    <br />
                    {createEmployee &&
                      <>
                        <div class="form-group">
                          <Form.Label>Équipe</Form.Label>
                          <br />
                          <select
                            className="form-control"
                            type="select"
                            name="team"
                            id="team"
                            onChange={(e) => setTeam(e.target.value)}
                            value={team}>
                            <option>Éducative</option>
                            <option>Médical</option>
                          </select>
                        </div>
                        <div style={{ "color": "red" }} className="team error"></div>
                      </>
                    }
                    <br />
                    <Form.Label>Fonction</Form.Label>
                    <br />
                    <Form.Control
                      required
                      type="text"
                      name="job"
                      id="job"
                      onChange={(e) => setJob(e.target.value)}
                      value={job}
                    />
                    <br /><br />
                    <Button className="w-100" type="submit">
                      Créer
                  </Button>
                  </Form >
                  <div className="w-100 text-center mt-3">
                    {createEmployee
                      ? <Link to="/employee">Retour à la liste des employés</Link>
                      : <Link to="/home">Acceuil</Link>
                    }
                  </div>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        )
      }</>)
}

export default Signup;

