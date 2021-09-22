import React, { useState } from "react"
import { Form, Button, Card, Row } from "react-bootstrap"
import axios from 'axios'
import { Link } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

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
          window.location = "/dashboard";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Row className="justify-content-center m-1 mt-4">
        <Card className="w-75" style={{ "maxWidth": "400px" }}>
          <Card.Header>
            <h2 className="text-center">Se connecter:</h2>
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
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Mot de passe oublié?</Link>
            </div>
          </Card.Body>
        </Card>
      </Row>
      <div className="w-100 text-center mt-2">
        Besoin d'un compte?  <Link to="/signup">S'inscrire</Link>
      </div>
      <br></br>
    </>
  )
}