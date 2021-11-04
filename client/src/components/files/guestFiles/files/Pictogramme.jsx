import React, { useState } from 'react';
import { Col, Row, Card, Form, Button } from "react-bootstrap"
import InfoDemo from "../InfoDemo"

const Pictogramme = (props) => {
    const showUpdate = props.showUpdate;
    const [name, setName] = useState("")

    return (
        <Card.Body  style={{overflow:"scroll"}}>
            <>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../assets/icon/icon_PictoTest.png" className=" border border-dark" style={{ "width": "270px", "height": "270px", "borderRadius": "20px" }} alt="user-picture" />
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
                                    <InfoDemo/>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../assets/icon/icon_PictoTest.png" className=" border border-dark" style={{ "width": "270px", "height": "270px", "borderRadius": "20px" }} alt="user-picture" />
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
                                    <InfoDemo/>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../assets/icon/icon_PictoTest.png" className=" border border-dark" style={{ "width": "270px", "height": "270px", "borderRadius": "20px" }} alt="user-picture" />
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
                                    <InfoDemo/>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../assets/icon/icon_PictoTest.png" className=" border border-dark" style={{ "width": "270px", "height": "270px", "borderRadius": "20px" }} alt="user-picture" />
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
                                    <InfoDemo/>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../assets/icon/icon_PictoTest.png" className=" border border-dark" style={{ "width": "270px", "height": "270px", "borderRadius": "20px" }} alt="user-picture" />
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
                                    <InfoDemo/>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../assets/icon/icon_PictoTest.png" className=" border border-dark" style={{ "width": "270px", "height": "270px", "borderRadius": "20px" }} alt="user-picture" />
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
                                    <InfoDemo/>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../assets/icon/icon_PictoTest.png" className=" border border-dark" style={{ "width": "270px", "height": "270px", "borderRadius": "20px" }} alt="user-picture" />
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
                                    <InfoDemo/>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../assets/icon/icon_PictoTest.png" className=" border border-dark" style={{ "width": "270px", "height": "270px", "borderRadius": "20px" }} alt="user-picture" />
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
                                    <InfoDemo/>
                                </>
                            }
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <img src="../../assets/icon/icon_More.png" className=" border border-dark p-4" style={{ "width": "270px", "height": "270px", "borderRadius": "20px" }} alt="user-picture" />
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
                                    <InfoDemo/>
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