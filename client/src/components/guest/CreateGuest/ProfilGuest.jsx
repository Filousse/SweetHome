import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Form, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmpty } from "../../Utils";

import RefsGuest from "./RefsGuest";
import { uploadGuestPicture } from "../../../actions/guest.actions"

const ProfilGuest = () => {
    const error = useSelector((state) => state.errorReducer.guestError);
    const guestsData = useSelector((state) => state.guestReducer);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [file, setFile] = useState("");

    useEffect(() => {
        !isEmpty(guestsData[guestsData.length - 1]) && setLoading(false);
      }, [guestsData]);


    const handlePicture = async () => {
        const data = new FormData();
        data.append("name", guestsData[guestsData.length - 1].name);
        data.append("guestId", guestsData[guestsData.length - 1]._id);
        data.append("file", file);
        await dispatch(uploadGuestPicture(data, guestsData[guestsData.length - 1]._id));
        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL}api/guest/${guestsData[guestsData.length - 1]._id}`)
        .then((res)=> {
            console.log(res);
        });
    };
    
    return (
        <>
            <Row className="justify-content-center m-4">
                <h1> Profil de {guestsData[guestsData.length - 1].surname} {guestsData[guestsData.length - 1].name}:</h1>
            </Row>
            <Row className="justify-content-center m-4">
                <Card className="w-75" style={{ "maxWidth": "300px", "margin": "5px" }}>
                    <Card.Body className="card-body" >
                        <Row className="justify-content-center m-4" >
                            <h5>Photo de profil :</h5>
                            <img src={guestsData[guestsData.length - 1].picture} style={{ "width": "200px", "height": "200px", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-picture" />
                            <br />
                            {error.maxSize &&
                                <p class="text-danger"> {error.maxSize}</p>
                            }
                            {error.format &&
                                <p class="text-danger"> {error.format}</p>
                            }
                            <Form>
                                <Form.Control
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".jpg, .jpeg, .png"
                                    style={{ "marginBottom": "10px" }}
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                <Button className="w-100" onClick={handlePicture}>
                                    { isLoading ? "Valider" : "Envoyer" }
                                </Button>
                            </Form>
                        </Row>
                    </Card.Body>
                </Card>
                <RefsGuest />
            </Row>
            <Row className="justify-content-center m-4">
                <Link to="/files-guest">Suivant</Link>
            </Row>

        </>
    );
};

export default ProfilGuest;