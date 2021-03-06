import React, { useState, useEffect } from 'react';
import { Container, Card, Form, Row, Button, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { uploadGuestPicture } from "../../../actions/guest.actions";
import { isEmpty } from "../../Utils"
import InfoDemo from "../../files/guestFiles/InfoDemo";


const PictureGuest = (props) => {
    const propsData = { ...props };
    const guestReducer = useSelector((state) => state.guestReducer);
    const error = useSelector((state) => state.errorReducer.guestError);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const [file, setFile] = useState("");

    useEffect(() => {
        if (!isEmpty(guestReducer[guestReducer.length - 1])) {
            setLoading(false);
        }
    }, [guestReducer]);
    // Ready for reel Version
    // const handleUpdatePicture = () => {
    //     const data = new FormData();
    //     data.append("name", propsData.guestName);
    //     data.append("guestId", propsData.guestId);
    //     data.append("file", file);
    //     dispatch(uploadGuestPicture(data, propsData.guestId));
    //     // window.location.reload();
    // };

    return (
        <>
            {isLoading ? (
                <Row className="justify-content-center" style={{ marginTop: 100, height: 400 }}>
                    <Spinner animation="border" variant="primary" style={{ "top": "100px" }} />
                </Row>
            ) : (
                    <Container className="justify-content-center p-4" style={{ "backgroundColor": "rgb(256,236,188)" }}>
                        <Row className="justify-content-center"  >
                            <Card className="justify-content-center mb-4" >
                                <Card.Header className="justify-content-center">
                                    <h2 className="text-center">Photo de profil :</h2>
                                </Card.Header>
                                <Card.Body className="justify-content-center" >
                                    <Row className="justify-content-center" style={{ "maxWidth": 450 }} >
                                        {guestReducer && guestReducer.map((guest) => {
                                            if (guest._id === propsData.guestId) {
                                                return (<img src={guest.picture} style={{ "width": "250px", "height": "250px", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-picture" />)
                                            }
                                        })}
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
                                            <Row className="justify-content-center">
                                            <InfoDemo pictureGuest={true} />
                                                {/* <Button className="w-50" onClick={handleUpdatePicture}>
                                                    Valider
                                                </Button> */}
                                            </Row>
                                        </Form>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                )}
        </>
    );
};

export default PictureGuest;