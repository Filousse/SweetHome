import React, { useState } from "react"
import { Form, Button, Card, Row, Container } from "react-bootstrap"
import axios from 'axios'
import { useHistory, Link } from "react-router-dom"

export default function Login(props) {
  const data = { ...props };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const history = useHistory();


  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          console.log(res.data.errors.email);
          setEmailError(res.data.errors.email);
          setPasswordError(res.data.errors.password);
          setLoading(false);
        } else {
          setLoading(true);
          history.push("/dashboard");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container style={{ "backgroundColor": "rgb(252, 230, 248)" }} className="justify-content-center pb-4 pt-4">
        <Row className="justify-content-center ">
          <img src="./assets/img/pinkCat.png" style={{ "maxWidth": 280 }} />
        </Row>
        <Row className="justify-content-center">
          <Card className="w-75" style={{ "maxWidth": "400px" }}>
            <Card.Header>
              <h2 className="text-center">Se connecter :</h2>
            </Card.Header>
            <Card.Body className="card-body" >
              <Form onSubmit={handleLogin}>
                <Form.Group className="" id="email">
                  <Form.Label className="">Email :</Form.Label>
                  {emailError && <p style={{ "color": "red" }}>{emailError}</p>}
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </Form.Group>
                <Form.Group className="" id="password">
                  <Form.Label className="">Mot de passe :</Form.Label>
                  {passwordError && <p style={{ "color": "red" }}>{passwordError}</p>}
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Connection
                </Button>
              </Form >
            </Card.Body>
            {!data.formSubmit &&
              <p className="w-100 text-center pt-2">
                Besoin d'un compte? <Link to="/signup"><br></br>S'inscrire</Link>
              </p>
            }
          </Card>
        </Row>
      </Container>
    </>
  )
}