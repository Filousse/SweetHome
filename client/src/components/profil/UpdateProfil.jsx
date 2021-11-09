import React, { useState, useEffect } from 'react';
import { FormControl, Button, Card, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import UploadImage from "./UploadImage";
import { updateBio } from "../../actions/user.actions";
import { dateParser } from "../Utils";
import Header from "../../components/Header";
import { isEmpty } from "../Utils";


const UpdateProfil = () => {
  const [isLoading, setLoading] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [bio, setBio] = useState("");
  const userReducer = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.userError);
  const dispatch = useDispatch();

  useEffect(() => {
    !isEmpty(userReducer) && setLoading(false);
  }, [userReducer]);

  const handleUpdate = () => {
    dispatch(updateBio(userReducer._id, bio));
    setUpdateForm(false);
  };

  return (
    <>
      <Header />
      <Row className="justify-content-center m-4">
        <h1 className="text-center"> Profil de {userReducer.surname} {userReducer.name}:</h1>
      </Row>
      <Row className="justify-content-center m-4">
        <Card className="w-75" style={{ "maxWidth": "300px", "margin": "5px" }}>
          <Card.Body className="card-body" >
            <Row className="justify-content-center m-2" >
              <h5>Photo de profil</h5>
              <img src={userReducer.photoProfil} style={{ "width": "200px", "height": "200px", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-picture" />
              <br />
              {error.maxSize &&
                <p class="text-danger"> {error.maxSize}</p>
              }
              {error.format &&
                <p class="text-danger"> {error.format}</p>
              }
              <UploadImage />
            </Row>
          </Card.Body>
        </Card>
        <Card className="w-75" style={{ "maxWidth": "300px", "margin": "5px" }}>
          <Card.Body className="card-body" >
            <Row className="justify-content-center m-2" >
              <h5>Message public</h5>
              {updateForm === false && (
                <>
                  {userReducer.bio && (
                    <Alert className="w-100" style={{ cursor: "pointer", "height": 195  }} variant={"info"} onClick={() => setUpdateForm(!updateForm)}>{userReducer.bio}</Alert>
                  )}
                  <Button className="w-100" onClick={() => setUpdateForm(!updateForm)}>
                    Modifier
                  </Button>
                </>
              )}
              {updateForm && (
                <>
                  <FormControl
                    as="textarea"
                    defaultValue={userReducer.bio}
                    onChange={(e) => setBio(e.target.value)}
                    style={{ "width": "250px", "height": "200px", "marginBottom": "10px" }}
                  />
                  <Button onClick={handleUpdate} className="w-100" >
                    Valider
              </Button>
                </>
              )}
              <p style={{textAlign: "center"}}>Membre depuis le : {dateParser(userReducer.createdAt)}</p>
            </Row >
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default UpdateProfil;

