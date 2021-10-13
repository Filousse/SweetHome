import React, { useState } from 'react';
import { Col, Row, Card, Form, Button } from "react-bootstrap"

const Pictogramme = (props) => {
    const showUpdate = props.showUpdate;

    const [name, setName] = useState("")

    return (
        <Card.Body>
            <>
                <Form>
                    {!showUpdate &&
                        <Button className="m-4">Ajouter un pictogramme</Button>
                    }
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../uploads/guest/pictogrammes/PictoTest.png" className=" border border-dark" style={{ "width": "300px", "height": "300px", "borderRadius": "20px" }} alt="user-picture" />
                            {!showUpdate &&
                                <>
                                    <Form.Control
                                        className="mt-2"
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        style={{ "marginBottom": "10px" }}
                                    // onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <Button>Valider</Button>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../uploads/guest/pictogrammes/PictoTest.png" className=" border border-dark" style={{ "width": "300px", "height": "300px", "borderRadius": "20px" }} alt="user-picture" />
                            {!showUpdate &&
                                <>
                                    <Form.Control
                                        className="mt-2"
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        style={{ "marginBottom": "10px" }}
                                    // onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <Button>Valider</Button>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../uploads/guest/pictogrammes/PictoTest.png" className=" border border-dark" style={{ "width": "300px", "height": "300px", "borderRadius": "20px" }} alt="user-picture" />
                            {!showUpdate &&
                                <>
                                    <Form.Control
                                        className="mt-2"
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        style={{ "marginBottom": "10px" }}
                                    // onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <Button>Valider</Button>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../uploads/guest/pictogrammes/PictoTest.png" className=" border border-dark" style={{ "width": "300px", "height": "300px", "borderRadius": "20px" }} alt="user-picture" />
                            {!showUpdate &&
                                <>
                                    <Form.Control
                                        className="mt-2"
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        style={{ "marginBottom": "10px" }}
                                    // onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <Button>Valider</Button>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../uploads/guest/pictogrammes/PictoTest.png" className=" border border-dark" style={{ "width": "300px", "height": "300px", "borderRadius": "20px" }} alt="user-picture" />
                            {!showUpdate &&
                                <>
                                    <Form.Control
                                        className="mt-2"
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        style={{ "marginBottom": "10px" }}
                                    // onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <Button>Valider</Button>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../uploads/guest/pictogrammes/PictoTest.png" className=" border border-dark" style={{ "width": "300px", "height": "300px", "borderRadius": "20px" }} alt="user-picture" />
                            {!showUpdate &&
                                <>
                                    <Form.Control
                                        className="mt-2"
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        style={{ "marginBottom": "10px" }}
                                    // onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <Button>Valider</Button>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../uploads/guest/pictogrammes/PictoTest.png" className=" border border-dark" style={{ "width": "300px", "height": "300px", "borderRadius": "20px" }} alt="user-picture" />
                            {!showUpdate &&
                                <>
                                    <Form.Control
                                        className="mt-2"
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        style={{ "marginBottom": "10px" }}
                                    // onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <Button>Valider</Button>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../uploads/guest/pictogrammes/PictoTest.png" className=" border border-dark" style={{ "width": "300px", "height": "300px", "borderRadius": "20px" }} alt="user-picture" />
                            {!showUpdate &&
                                <>
                                    <Form.Control
                                        className="mt-2"
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        style={{ "marginBottom": "10px" }}
                                    // onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <Button>Valider</Button>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../uploads/guest/pictogrammes/PictoTest.png" className=" border border-dark" style={{ "width": "300px", "height": "300px", "borderRadius": "20px" }} alt="user-picture" />
                            {!showUpdate &&
                                <>
                                    <Form.Control
                                        className="mt-2"
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        style={{ "marginBottom": "10px" }}
                                    // onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <Button>Valider</Button>
                                </>
                            }
                        </Form.Group>
                    </Row>
                </Form>
            </>
        </Card.Body>
    );
};

export default Pictogramme;