import React from 'react';
import { Container, Card } from 'react-bootstrap'
import FilesMix from "../../files/settingsFiles/FilesMix"
import FilesEduc from "../../files/settingsFiles/FilesEduc"
import FilesMedical from "../../files/settingsFiles/FilesMedical"
import { useSelector } from "react-redux"

const FilesGuest = (props) => {
  const data = {...props}
  const userReducer = useSelector(state => state.userReducer)

  return (
    <Container className="justify-content-center p-4" style={{ maxWidth: "600px" }}>
      <Card className="justify-content-center" >
        <Card.Header className="justify-content-center">
          <h2 className="text-center">Dossier du bénéficiare :</h2>
        </Card.Header>
        <>
          {userReducer.team === 'Éducative' &&
            <>
              <FilesEduc idGuest={data.idGuest} />
              <FilesMix idGuest={data.idGuest} />
              <FilesMedical idGuest={data.idGuest} />
            </>
          }
          {userReducer.team === "Médical" &&
            <>
              <FilesMedical idGuest={data.idGuest} />
              <FilesMix idGuest={data.idGuest} />
              <FilesEduc idGuest={data.idGuest} />
            </>
          }
          {userReducer.team == null &&
            <>
              <FilesMix idGuest={data.idGuest} />
              <FilesEduc idGuest={data.idGuest} />
              <FilesMedical idGuest={data.idGuest} />
            </>
          }
        </>
      </Card>
    </Container>
  );
};

export default FilesGuest;