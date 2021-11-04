import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import InfoDemo from "../InfoDemo"

const Material = (props) => {
    const showUpdate = props.showUpdate;
    const [textOne, setTextOne] = useState();
    const [textTwo, setTextTwo] = useState();
    const [textThree, setTextThree] = useState();
    const [textFour, setTextFour] = useState();


    return (
        <Container fluid className="p-4">
            <Row>
                <Col className="mt-3">
                    <Row className="m-3 pt-1 justify-content-center border border-danger">
                        <h5 className="mt-2"><strong>Utilisation du matériel :</strong></h5>
                    </Row>
                    {showUpdate ? (
                        <Row className="border border-dark m-3 p-3" style={{ height: '107px', overflow:"scroll" }}>
                            {!textOne ? (
                                <>Lorem ipsum dolor sit, amet consectetLorem ipsum dolor sit, amet consectetLorem ipsum dolor sit, amet consectet</>
                            ) : (<>{textOne}</>)
                            }
                        </Row>
                    ) : (
                            <Row className=" m-3">
                                <Form.Control className="border border-dark p-3" as="textarea" onChange={(e) => setTextOne(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                            </Row>
                        )}
                    <Row className="justify-content-center">
                        <img src="../../assets/icon/icon_Material.png" className="w-75 ml-4 mr-4 border border-dark" style={{ "borderRadius": "20px" }} alt="user-picture" />
                    </Row>
                    {!showUpdate &&
                        <>
                            <Form.Control
                                className="mt-2"
                                type="file"
                                id="file"
                                name="file"
                                accept=".jpg, .jpeg, .png"
                                style={{ "marginBottom": "10px" }}
                            />
                            <InfoDemo />
                        </>
                    }
                </Col>
                <Col className="mt-3">
                    <Row className="m-3 pt-1 justify-content-center border border-danger">
                        <h5 className="mt-2"><strong>Utilisation du matériel :</strong></h5>
                    </Row>
                    {showUpdate ? (
                        <Row className="border border-dark m-3 p-3" style={{ height: '107px', overflow:"scroll" }}>
                            {!textTwo ? (
                                <>Lorem ipsum dolor sit, amet consectetLorem ipsum dolor sit, amet consectetLorem ipsum dolor sit, amet consectet</>
                            ) : (<>{textTwo}</>)
                            }
                        </Row>
                    ) : (
                            <Row className=" m-3">
                                <Form.Control className="border border-dark p-3" as="textarea" onChange={(e) => setTextTwo(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                            </Row>
                        )}
                                        <Row className="justify-content-center">
                        <img src="../../assets/icon/icon_Material.png" className="w-75 ml-4 mr-4 border border-dark" style={{ "borderRadius": "20px" }} alt="user-picture" />
                    </Row>
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
                            <InfoDemo />
                        </>
                    }
                </Col>
            </Row>
            <Row>
                <Col className="mt-3">
                    <Row className="m-3 pt-1 justify-content-center border border-danger">
                        <h5 className="mt-2"><strong>Utilisation du matériel :</strong></h5>
                    </Row>
                    {showUpdate ? (
                        <Row className="border border-dark m-3 p-3" style={{ height: '107px', overflow:"scroll" }}>
                            {!textThree ? (
                                <>Lorem ipsum dolor sit, amet consectetLorem ipsum dolor sit, amet consectetLorem ipsum dolor sit, amet consectet</>
                            ) : (<>{textThree}</>)
                            }
                        </Row>
                    ) : (
                            <Row className=" m-3">
                                <Form.Control className="border border-dark p-3" as="textarea" onChange={(e) => setTextThree(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                            </Row>
                        )}
                                        <Row className="justify-content-center">
                        <img src="../../assets/icon/icon_Material.png" className="w-75 ml-4 mr-4 border border-dark" style={{ "borderRadius": "20px" }} alt="user-picture" />
                    </Row>
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
                            <InfoDemo />
                        </>
                    }
                </Col>
                <Col className="mt-3">
                    <Row className="m-3 pt-1 justify-content-center border border-danger">
                        <h5 className="mt-2"><strong>Utilisation du matériel :</strong></h5>
                    </Row>
                    {showUpdate ? (
                        <Row className="border border-dark m-3 p-3" style={{ height: '107px', overflow:"scroll" }}>
                            {!textFour ? (
                                <>Lorem ipsum dolor sit, amet consectetLorem ipsum dolor sit, amet consectetLorem ipsum dolor sit, amet consectet</>
                            ) : (<>{textFour}</>)
                            }
                        </Row>
                    ) : (
                            <Row className=" m-3">
                                <Form.Control className="border border-dark p-3" as="textarea" onChange={(e) => setTextFour(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                            </Row>
                        )}
                                        <Row className="justify-content-center">
                        <img src="../../assets/icon/icon_Material.png" className="w-75 ml-4 mr-4 border border-dark" style={{ "borderRadius": "20px" }} alt="user-picture" />
                    </Row>
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
                </Col>
            </Row>
        </Container>
    );
};

export default Material;