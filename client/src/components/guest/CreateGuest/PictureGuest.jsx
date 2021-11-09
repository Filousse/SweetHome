import React, { useState } from 'react';
import { Container, Card, Form, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { uploadGuestPicture } from "../../../actions/guest.actions"

const PictureGuest = (props) => {
    const propsData = {...props};
    const guestReducer = useSelector((state) => state.guestReducer);
    const error = useSelector((state) => state.errorReducer.guestError);
    const dispatch = useDispatch();
    const [file, setFile] = useState("");

    const handleCreatePicture = () => {
        const data = new FormData();
        data.append("name", guestReducer[guestReducer.length - 1].name);
        data.append("guestId", guestReducer[guestReducer.length - 1]._id);
        data.append("file", file);
        dispatch(uploadGuestPicture(data, guestReducer[guestReducer.length - 1]._id));
    };

    const handleUpdatePicture = () => {
        const data = new FormData();
        data.append("name", guestReducer[guestReducer.length - 1].name);
        data.append("guestId", propsData.guestId);
        data.append("file", file);
        dispatch(uploadGuestPicture(data, guestReducer[guestReducer.length - 1]._id));
    };

    return (
        <> 
            <Container className="justify-content-center p-4" style={{ "backgroundColor": "rgb(256,236,188)" }}>
            {!propsData.withoutFooter &&
                <Row className="justify-content-center" >
                    <img src="./assets/img/yellowCat.png" style={{ "maxWidth": 280, "marginTop":10 }} />
                </Row>
            }
                <Row className="justify-content-center"  >
                    <Card className="justify-content-center mb-4" >
                            <Card.Header className="justify-content-center">
                                <h2 className="text-center">Photo de profil :</h2>
                            </Card.Header>
                        <Card.Body className="justify-content-center" >
                            <Row className="justify-content-center" style={{"maxWidth": 450}} >
                                {!propsData.guestId
                                    ? (
                                        <img src={guestReducer[guestReducer.length - 1].picture} style={{ "width": "90%", "height": "90%", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-picture" />
                                    ) : (
                                        <>
                                            {guestReducer.map((guest) => {
                                                if (guest._id === propsData.guestId) {
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
                                    {!propsData.guestId ?
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
                        {!propsData.withoutFooter &&
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