import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { uploadGuestPicture } from "../../../actions/guest.actions"

const PictureGuest = (props) => {
    const guestId = props.guestId;
    const withoutFooter = props.withoutFooter;
    const error = useSelector((state) => state.errorReducer.guestError);
    const guestsData = useSelector((state) => state.guestReducer);
    const dispatch = useDispatch();
    const [file, setFile] = useState("");

    const handleCreatePicture = () => {
        const data = new FormData();
        data.append("name", guestsData[guestsData.length - 1].name);
        data.append("guestId", guestsData[guestsData.length - 1]._id);
        data.append("file", file);
        dispatch(uploadGuestPicture(data, guestsData[guestsData.length - 1]._id));
    };

    const handleUpdatePicture = () => {
        const data = new FormData();
        data.append("name", guestsData[guestsData.length - 1].name);
        data.append("guestId", guestId);
        data.append("file", file);
        dispatch(uploadGuestPicture(data, guestsData[guestsData.length - 1]._id));
    };

    return (
        <> 
            <Container className="justify-content-center p-4" style={{ "backgroundColor": "rgb(256,236,188)" }}>
            {!withoutFooter &&
                <Row className="justify-content-center" >
                    <img src="./assets/img/yellowCat.png" style={{ "maxWidth": 280, "marginTop":10 }} />
                </Row>
            }
                <Row className="justify-content-center"  >
                    <Card className="justify-content-center mb-4" >
                        {!guestId ? (
                            <Card.Header className="justify-content-center">
                                <h2 className="text-center"> Profil de {guestsData[guestsData.length - 1].surname} {guestsData[guestsData.length - 1].name}:</h2>
                            </Card.Header>
                        ) : (
                                <Card.Header className="justify-content-center">
                                    <h2 className="text-center">Photo de profil :</h2>
                                </Card.Header>
                            )}
                        <Card.Body className="justify-content-center" >
                            <Row className="justify-content-center" style={{"maxWidth": 450}} >
                                {!guestId
                                    ? (
                                        <img src={guestsData[guestsData.length - 1].picture} style={{ "width": "90%", "height": "90%", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-picture" />
                                    ) : (
                                        <>
                                            {guestsData.map((guest) => {
                                                if (guest._id === guestId) {
                                                    return (<img src={guest.picture} style={{ "width": "250px", "height": "250px", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-picture" />)
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
                            </Row>
                            <Row className="justify-content-center " >
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
                                                    Valider
                                                </Button>
                                            </Row>
                                        ) : (
                                            <Row className="justify-content-center">
                                                <Button className="w-50" onClick={handleUpdatePicture}>
                                                    Valider
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
                </Row>
            </Container>
        </>
    );
};

export default PictureGuest;