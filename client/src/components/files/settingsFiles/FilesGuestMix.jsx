import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import FileInput from "./FileInput"


const FilesGuestMix = (props) => {
  const userData = { ...props }

  return (
    <Card.Body style={{ backgroundColor: "#FCE6F8" }}>
      <Row className="bg-light border border-danger rounded  mb-4 p-1" >
        <Col xs={10}><p className="h5 pt-2">Fiches éducative et médical :{userData.onlyRead}</p></Col>
        <Col xs={2} >
          { userData.info &&
            <li class="menu-trigger-left">
              <img src="./assets/icon/info.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
              <div class="menu">
                <div class="menu-content custom-3">
                  <ul>
                    <li>Quand une fiche est vide les référents sont notifiés pour la remplir !</li>
                  </ul>
                </div>
              </div>
            </li>
          }
        </Col>
      </Row>
      <FileInput  onlyRead={userData.onlyRead} />
    </Card.Body>
  );
};

export default FilesGuestMix;