import React, { useState } from 'react';
import { Container, Card, Form, Row, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FilesGuest = () => {
  const [educRef, setEducRef] = useState("");
  const [medicalRef, setMedicalRef] = useState("");
  const [picture, setPicture] = useState("");


  return (
    <Container className="justify-content-center p-4" style={{ maxWidth: "600px" }}>
    <Card className="justify-content-center" >
      <Card.Header className="justify-content-center">
        <h2 className="text-center">Créer les fiches du bénéficiare :</h2>
      </Card.Header>
      <Form>
        <Card.Body style={{ backgroundColor: "#FCE6F8" }}>
          {educRef && medicalRef
            ? (
              <Alert className="text-white m-2" style={{ backgroundColor: "#e826b1", textAlign: "center" }}>
                Info :<br></br>Ces fiches peuvent être créer et mise à jour plus tard par {medicalRef} et {educRef}qui sera notifié !
              </Alert>
            ) : (
              <Alert className="text-white m-2" style={{ backgroundColor: "#e826b1", textAlign: "center" }}>
                Info :<br></br>Ces fiches peuvent être créer et mise à jour plus tard par le référent éducatif et le référent médical qui sera notifié !
              </Alert>
            )
          }
          <br></br>
          <Form.Group>
            <Form.Label>
              Fiche information général :
                              </Form.Label>
            <Form.Control
              type="file"
              name="picture"
              value={picture}
              onChange={(e) => { setPicture(e.target.value) }}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Fiche contacts :
                              </Form.Label>
            <Form.Control
              type="file"
              name="picture"
              value={picture}
              onChange={(e) => { setPicture(e.target.value) }}
            >
            </Form.Control>
          </Form.Group>
        </Card.Body>
        <Card.Body style={{ backgroundColor: "#D1E5FF" }}>
          {educRef
            ? (
              <Alert className="text-white m-2" style={{ backgroundColor: "#61a6fb", textAlign: "center" }}>
                Info :<br></br>Ces fiches peuvent être créer et mise à jour plus tard par {educRef} qui sera notifié !
              </Alert>
            ) : (
              <Alert className="text-white m-2" style={{ backgroundColor: "#61a6fb", textAlign: "center" }}>
                Info :<br></br>Ces fiches peuvent être créer et mise à jour plus tard par le référent éducatif qui sera notifié !
              </Alert>
            )
          }
          <br></br>
          <Form.Group>
            <Form.Label>
              Fiche plannings :
                              </Form.Label>
            <Form.Control
              type="file"
              name="picture"
              value={picture}
              onChange={(e) => { setPicture(e.target.value) }}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Fiche pictogramme :
                              </Form.Label>
            <Form.Control
              type="file"
              name="picture"
              value={picture}
              onChange={(e) => { setPicture(e.target.value) }}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Fiche Repas :
            </Form.Label>
            <Form.Control
              type="file"
              name="picture"
              value={picture}
              onChange={(e) => { setPicture(e.target.value) }}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Fiche Toilette :
                              </Form.Label>
            <Form.Control
              type="file"
              name="picture"
              value={picture}
              onChange={(e) => { setPicture(e.target.value) }}
            >
            </Form.Control>
          </Form.Group>
        </Card.Body>
        <Card.Body style={{ backgroundColor: "#D0FADE" }}>
          {medicalRef
            ? (
              <Alert className="text-white m-2" style={{ backgroundColor: "#28da69", textAlign: "center" }}>
                Info :<br></br> Tout les fiches pouuront être créer et mise à jour par {medicalRef} qui sera notifié !
              </Alert>
            ) : (
              <Alert className="text-white m-2" style={{ backgroundColor: "#28da69", textAlign: "center" }}>
                Info :<br></br>Tout les fiches pouront être créer et mise à jour par le référent médical qui sera notifié !
              </Alert>
            )
          }
          <br></br>
          <Form.Group>
            <Form.Label>
              Fiche Information médical :
                              </Form.Label>
            <Form.Control
              type="file"
              name="picture"
              value={picture}
              onChange={(e) => { setPicture(e.target.value) }}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Fiche Matériel médical :
                              </Form.Label>
            <Form.Control
              type="file"
              name="picture"
              value={picture}
              onChange={(e) => { setPicture(e.target.value) }}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Fiche Traitement :
                              </Form.Label>
            <Form.Control
              type="file"
              name="picture"
              value={picture}
              onChange={(e) => { setPicture(e.target.value) }}
            >
            </Form.Control>
          </Form.Group>
        </Card.Body>
      </Form>
      <Card.Footer>
        <Row className="justify-content-md-center m-2">
          <Button className="w-100">Créer le dossier bénéficiare</Button>
        </Row>
        <Row className="justify-content-center m-2">
          <Link to='/guest'>Mettre à jour les fiches plus tard</Link>
        </Row>
      </Card.Footer>
    </Card>
    </Container>
  );
};

export default FilesGuest;