import React from 'react';
import { Container, Card, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const ValidationGuest = (props) => {
  const guestData = { ...props }
  const userData = useSelector((state) => state.userReducer);

  return (
    <Container className="justify-content-center p-4" style={{ maxWidth: "600px" }}>
      <Card className="justify-content-center" >
        <Card.Header className="justify-content-center">
          <h3 className="text-center">Félicitation le Bénéficiare est créer !</h3>
          {/* <h2 className="text-center">Dossier du bénéficiare :</h2> */}
        </Card.Header>
        <Card.Body>
        Les référents éducatif et médical ont reçu une notification pour remplir leurs fiches respectives.
Toutefois, en tant qu'administrateur vous pouvez également mettre à jour les fiches vous-même.
        </Card.Body>
        <Card.Footer>
          <Row className="justify-content-center m-2">
            <Link to='/guest'>Terminé</Link>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ValidationGuest;