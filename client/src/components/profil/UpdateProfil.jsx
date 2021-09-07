import React, { useState } from 'react';
import { FormControl, Button, Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import { updateBio } from "../../actions/user.actions";
import { dateParser } from "../Utils";
import Header from "../../components/dashboard/Header";
import Footer from "../../components/Footer";


const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.userError);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
  };

  return (
    <>
      <Header />
      <Row className="justify-content-center m-4">
        <h1> Profil de {userData.surname} :</h1>
      </Row>
      <Row className="justify-content-center m-4">
        <Card className="w-75" style={{ "maxWidth": "300px", "margin": "5px" }}>
          <Card.Body className="card-body" >
            <Row className="justify-content-center m-4" >
              <h5>Photo de profil :</h5>
              <img src={userData.photoProfil} style={{ "width": "200px", "height": "200px", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-pic" />
              <br />
              {error.maxSize &&
                <p class="text-danger"> {error.maxSize}</p>
              }
              {error.format &&
                <p class="text-danger"> {error.format}</p>
              }
              <UploadImg />
            </Row>
          </Card.Body>
        </Card>
        <Card className="w-75" style={{ "maxWidth": "300px", "margin": "5px" }}>
          <Card.Body className="card-body" >
            <Row className="justify-content-center m-4" >
              <h5>Biographie :</h5>
              <FormControl
                as="textarea"
                defaultValue={userData.bio}
                onChange={(e) => setBio(e.target.value)}
                style={{ "width": "200px", "height": "200px", "marginBottom": "10px" }}
              />
              <Button onClick={handleUpdate} className="w-100" >
                Modifier
              </Button>
              <p>Membre depuis le : {dateParser(userData.createdAt)}</p>
            </Row >
          </Card.Body>
        </Card>
      </Row>
      <Footer />
    </>
  );
};

export default UpdateProfil;

