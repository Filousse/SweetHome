import React, { useState } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap"

const Medications = (props) => {
    const showUpdate = props.showUpdate;
    const [textOne, setTextOne] = useState();
    const [textTwo, setTextTwo] = useState();
    const [textThree, setTextThree] = useState();
    const [textFour, setTextFour] = useState();
    const [textFive, setTextFive] = useState();


    return (
        <Container fluid>
            <Row className="m-4">
                <Col sm={2} className="border border-dark pt-1">
                    <p className="pt-3" className="pt-3"><strong>Petit déjeuner :</strong></p>
                </Col>
                {showUpdate ? (
                    <Col sm={10} className="border border-dark ">
                        {!textOne ? (
                            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sapiente voluptatum harum nulla, molestiae delectus necessitatibus quisquam, architecto consequatur excepturi dolorum voluptate ducimus amet vel nesciunt voluptates deserunt. Dicta!</>
                        ) : (<>{textOne}</>
                        )}
                    </Col>
                ) : (
                    <Col>
                        <Form.Control className="w-100 m-1" as="textarea" rows={4} onChange={(e) => setTextOne(e.target.value)} placeholder="Editer un text informatif..." />
                    </Col>
                    )}
            </Row>
            <Row className="m-4 ">
                <Col sm={2} className="border border-dark pt-1">
                    <p className="pt-3"><strong>Déjeuner :</strong></p>
                </Col>
                {showUpdate ? (
                    <Col sm={10} className="border border-dark ">
                        {!textTwo ? (
                            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sapiente voluptatum harum nulla, molestiae delectus necessitatibus quisquam, architecto consequatur excepturi dolorum voluptate ducimus amet vel nesciunt voluptates deserunt. Dicta!</>
                        ) : (<>{textTwo}</>
                            )}
                    </Col>
                ) : (
                    <Col>
                        <Form.Control className="w-100 m-1" as="textarea" rows={4} onChange={(e) => setTextTwo(e.target.value)} placeholder="Editer un text informatif..." />
                    </Col>
                    )}
            </Row>
            <Row className="m-4 ">
                <Col sm={2} className="border border-dark pt-1">
                    <p className="pt-3"><strong>Souper :</strong></p>
                </Col>
                {showUpdate ? (
                    <Col sm={10} className="border border-dark ">
                        {!textThree ? (
                            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sapiente voluptatum harum nulla, molestiae delectus necessitatibus quisquam, architecto consequatur excepturi dolorum voluptate ducimus amet vel nesciunt voluptates deserunt. Dicta!</>
                        ) : (<>{textThree}</>
                            )}
                    </Col>
                ) : (
                    <Col>
                        <Form.Control className="w-100 m-1" as="textarea" rows={4} onChange={(e) => setTextThree(e.target.value)} placeholder="Editer un text informatif..." />
                    </Col>
                    )}
            </Row>
            <Row className="m-4 ">
                <Col sm={2} className="border border-dark pt-1">
                    <p className="pt-3"><strong>Coucher :</strong></p>
                </Col>
                {showUpdate ? (
                    <Col sm={10} className="border border-dark ">
                        {!textFour ? (
                            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sapiente voluptatum harum nulla, molestiae delectus necessitatibus quisquam, architecto consequatur excepturi dolorum voluptate ducimus amet vel nesciunt voluptates deserunt. Dicta!</>
                        ) : (<>{textFour}</>
                            )}
                    </Col>
                ) : (
                    <Col>
                        <Form.Control className="w-100 m-1" as="textarea" rows={4} onChange={(e) => setTextFour(e.target.value)} placeholder="Editer un text informatif..." />
                    </Col>
                    )}
            </Row>
            <Row className="m-4 ">
                <Col sm={2} className="border border-dark pt-1">
                    <p className="pt-1"><strong>Protocole crise d'épilepsie :</strong></p>
                </Col>
                {showUpdate ? (
                    <Col sm={10} className="border border-dark ">
                        {!textFive ? (
                            <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio sapiente voluptatum harum nulla, molestiae delectus necessitatibus quisquam, architecto consequatur excepturi dolorum voluptate ducimus amet vel nesciunt voluptates deserunt. Dicta!</>
                        ) : (<>{textFive}</>
                            )}
                    </Col>
                ) : (
                        <Col>
                            <Form.Control className="w-100 m-1" as="textarea" rows={4} onChange={(e) => setTextFive(e.target.value)} placeholder="Editer un text informatif..." />
                        </Col>
                    )}
            </Row>
        </Container>
    );
};

export default Medications;