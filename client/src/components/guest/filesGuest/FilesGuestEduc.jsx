import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import FileInput from "../../FileInput"

const FilesGuestEduc = (props) => {
  const userData = {...props}

    return (
        <Card.Body style={{ backgroundColor: "#D1E5FF" }}>
          <Row className="bg-light border border-danger rounded  mb-4 p-1" >
            <Col xs={10}><p className="h5 pt-2">Fiches éducative :</p></Col>
            { userData.info &&
            <Col xs={2} >
            <li class="menu-trigger-left">
              <img src="./assets/icon/info.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
              <div class="menu">
                <div class="menu-content custom-3">
                  <ul>
                    <li>Quand une fiche le référents éducatif pour la remplir !</li>
                  </ul>
                </div>
              </div>
            </li>
          </Col>
          }
          </Row>
          <FileInput blokedUpdate={userData.blokedUpdate}/>
        </Card.Body>
    );
};

export default FilesGuestEduc;