import React from 'react';
import { Container, Card, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

const ValidationGuest = (props) => {
  const history = useHistory();

  const handelReadsGuest = () => {
    history.push("/guest");
    window.location.reload();
  }

  return (
    <Container className="justify-content-center p-4 " style={{ "backgroundColor": "rgb(256,236,188)", "height": 600 }} >
      <Row className="justify-content-center mt-4">
        <img src="./assets/img/yellowCat.png" style={{ "maxWidth": 280 }} />
      </Row>
      <Row className="justify-content-center">
        <Card className="justify-content-center"style={{ "maxWidth": "470px" }} >
          <Card.Header className="justify-content-center">
            <h3 className="text-center text-justify">Félicitation :<br></br>Dossier bénéficiare créé!</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-justify">
              Les référents éducatif et médical ont reçu une notification pour remplir leurs fiches respectives.
              En tant qu'administrateur vous pouvez programmer une prochaine date pour remettre à jour le dossier du bénéficiare.
            </p>
          </Card.Body>
          <Card.Footer>
            <Row className="justify-content-center m-2">
              <Link onClick={handelReadsGuest}>Terminé</Link>
            </Row>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  );
};

export default ValidationGuest;