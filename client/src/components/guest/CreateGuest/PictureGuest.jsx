import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from "../../Utils";
import { Link } from 'react-router-dom';

import { uploadGuestPicture, getGuests } from "../../../actions/guest.actions"

const PictureGuest = (props) => {
    const guestId = props.guestId;
    const withoutFooter = props.withoutFooter;
    const error = useSelector((state) => state.errorReducer.guestError);
    const guestsData = useSelector((state) => state.guestReducer);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [file, setFile] = useState("");

    useEffect(() => {
        !isEmpty(guestsData[guestsData.length - 1]) && setLoading(false);
    }, [guestsData]);

    const handleCreatePicture = () => {
        const data = new FormData();
        data.append("name", guestsData[guestsData.length - 1].name);
        data.append("guestId", guestsData[guestsData.length - 1]._id);
        data.append("file", file);
        dispatch(uploadGuestPicture(data, guestsData[guestsData.length - 1]._id));
        dispatch(getGuests());
    };

    const handleUpdatePicture = () => {
        const data = new FormData();
        data.append("name", guestsData[guestsData.length - 1].name);
        data.append("guestId", guestId);
        data.append("file", file);
        dispatch(uploadGuestPicture(data, guestsData[guestsData.length - 1]._id));
        // dispatch(getGuests());
    };

    return (
        <>
            <Container className="justify-content-center p-4" style={{ maxWidth: "600px" }}>
                <Card className="justify-content-center" >
                    {!guestId ? (
                        <Card.Header className="justify-content-center">
                            <h2> Profil de {guestsData[guestsData.length - 1].surname} {guestsData[guestsData.length - 1].name}:</h2>
                        </Card.Header>
                    ) : (
                            <Card.Header className="justify-content-center">
                                <h2 className="text-center">Photo de profil :</h2>
                            </Card.Header>
                        )}
                    <Card.Body className="card-body" >
                        <Row className="justify-content-center m-4" >
                            {!guestId
                                ? (
                                    <img src={guestsData[guestsData.length - 1].picture} style={{ "width": "200px", "height": "200px", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-picture" />
                                ) : (
                                    <>
                                        {guestsData.map((guest) => {
                                            if (guest._id === guestId) {
                                                return (<img src={guest.picture} style={{ "width": "200px", "height": "200px", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-picture" />)
                                            }
                                        })}
                                    </>
                                )
                            }
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
                                {!guestId ?
                                    (
                                        <Row className="justify-content-center">
                                            <Button className="w-50" onClick={handleCreatePicture}>
                                                {isLoading ? "Valider" : "Envoyer"}
                                            </Button>
                                        </Row>
                                    ) : (
                                        <Row className="justify-content-center">
                                            <Button className="w-50" onClick={handleUpdatePicture}>
                                                {isLoading ? "Valider" : "Modifier"}
                                            </Button>
                                        </Row>

                                    )}
                            </Form>
                        </Row>
                    </Card.Body>
                    {!withoutFooter &&
                        <Card.Footer>
                            <Row className="justify-content-center m-2">
                                <Link to="/references-guest">Suivant</Link>
                            </Row>
                        </Card.Footer>
                    }
                </Card>
            </Container>
        </>
    );
};

export default PictureGuest;