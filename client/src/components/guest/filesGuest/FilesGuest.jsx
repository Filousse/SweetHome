import React from 'react';
import { Container, Card, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"

import FilesGuestMix from "./FilesGuestMix"
import FilesGuestEduc from "./FilesGuestEduc"
import FilesGuestMedical from "./FilesGuestMedical"
import { useSelector } from "react-redux"

const FilesGuest = (props) => {
  const guestData = { ...props }
  const userData = useSelector((state) => state.userReducer);

  return (
    <Container className="justify-content-center p-4" style={{ maxWidth: "600px" }}>
      <Card className="justify-content-center" >
        <Card.Header className="justify-content-center">
          <h2 className="text-center">Dossier du bénéficiare :</h2>
        </Card.Header>
        {userData.team === 'Éducative' &&
          <>
            <FilesGuestEduc />
            <FilesGuestMix />
            <FilesGuestMedical blokedUpdate={true}/>
          </>
        }
        {userData.team === "Médical" &&
          <>
            <FilesGuestMedical />
            <FilesGuestMix />
            <FilesGuestEduc blokedUpdate={true}/>
          </>
        }
        {userData.team == null &&
          <>
            <FilesGuestMix info={true} />
            <FilesGuestEduc info={true} />
            <FilesGuestMedical info={true} />
          </>
        }
        {!guestData.guestId &&
          <Card.Footer>
            <Row className="justify-content-center m-2">
              <Link to='/guest'>Terminé</Link>
            </Row>
          </Card.Footer>
        }
      </Card>
    </Container>
  );
};

export default FilesGuest;