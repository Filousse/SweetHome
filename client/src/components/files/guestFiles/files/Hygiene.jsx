import React, { useState } from 'react';
import { Col, Row, Card, Form, Container } from "react-bootstrap"

const Hygiene = (props) => {
    const showUpdate = props.showUpdate;
    const [autonomie, setAutonomie] = useState();
    const [toilette, setToilette] = useState();
    const [habillage, setHabillage] = useState();
    const [jour, setJour] = useState();
    const [nuit, setNuit] = useState();
    const [maison, setMaison] = useState();
    const [lunette, setLunette] = useState();
    const [grenouillieres, setGrenouillieres] = useState();
    const [corporels, setCorporels] = useState();
    const [habitude, setHabitude] = useState();

    return (
        <Card.Body>
            {showUpdate
                ? (
                    <>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mt-5 mb-3">
                                        <h5 className="mt-2 text-center"><strong>Autonomie</strong></h5>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height:'107px', overflow: "scroll"  }}>
                                        {!autonomie ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                                </>) : (<>{autonomie}</>)}
                                    </Row>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <h5 className="mt-2 text-center">Toilette</h5>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height:'107px', overflow: "scroll"  }}>
                                        {!toilette ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                                        </>) : (<>{toilette}</>)}
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <h5 className="mt-2 text-center">Vêture</h5>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height:'107px', overflow: "scroll"  }}>
                                        {!habillage ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                                        </>) : (<>{habillage}</>)}
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <h5 className="mt-2">Port de protection</h5>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height:'107px', overflow: "scroll"  }}>
                                        <Row>
                                            <p className="col">Protection de JOUR :</p>
                                            <strong style={{ color: "red" }}>{jour}</strong>
                                        </Row>
                                        <Row>
                                            <p className="col">Protection de NUIT :</p>
                                            <strong style={{ color: "red" }}>{nuit}</strong>
                                        </Row>
                                    </Row>
                                </Form.Group>
                            </Row>
                            <Row className="justify-content-center border border-dark m-1 mt-3 mb-3">
                                {!maison ? (
                                    <>
                                        <h1 className="text-justify mt-1">LINGE  MAISON
                                        <img src="../../assets/icon/icon_Check.png" className="ml-4 pb-1" style={{ "height": "40px", "width": "40px" }} alt="icon_Check" />
                                        </h1>
                                    </>
                                ) : (
                                        <h1 >LINGE  INTERNAT
                                            <img src="../../assets/icon/icon_Check.png" className="m-1" style={{ "height": "40px", "width": "40px" }} alt="icon_Check" />
                                        </h1>
                                    )}
                            </Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger mt-5 mb-3">
                                    <h5 className="mt-2"><strong>Particularité :</strong></h5>
                                </Row>
                            </Form.Group>
                            <Col className="border border-dark p-3 " >
                                <h5>Lunette :
                                    {lunette}
                                </h5>
                                <h5>Porte de grenouillières la nuit :
                                    {grenouillieres ? (<strong>  OUI</strong> ):(<strong>  NON</strong>)}
                                </h5>
                                <h5 className="mt-3">Soins corporels : </h5>
                                {!corporels ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                                        </>) : (<>{corporels}</>)}
                            </Col>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mt-5 mb-3">
                                        <h5 className="mt-2"><strong>Habitude :</strong></h5>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height:'107px', overflow: "scroll"  }}>
                                        {!habitude ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                                        </>) : (<>{habitude}</>)}
                                    </Row>
                                </Form.Group>
                            </Row>
                        </Form>
                    </>
                ) : (
                    <>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <h5 className="mt-2"><strong>Autonomie :</strong></h5>
                                    </Row>
                                    <Form.Control as="textarea" onChange={(e) => setAutonomie(e.target.value)} placeholder="Editer un text informatif..." style={{ height:'107px', overflow: "scroll"  }} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <h5 className="mt-2">Toilette</h5>
                                    </Row>
                                    <Form.Control as="textarea" onChange={(e) => setToilette(e.target.value)} placeholder="Editer un text informatif..." style={{ height:'107px', overflow: "scroll"  }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <h5 className="mt-2 text-center">Vêture</h5>
                                    </Row>
                                    <Form.Control as="textarea" onChange={(e) => setHabillage(e.target.value)} placeholder="Editer un text informatif..." style={{ height:'107px', overflow: "scroll"  }} />
                                </Form.Group>
                                <Form.Group className="pb-4" as={Col} controlId="formGridPassword">
                                    <Row className=" p-2 ml-1 mr-1 mb-3" style={{ height:'107px' }}>
                                        <Row className="mb-3">
                                            <p className="col"><strong>Protection de JOUR</strong></p>
                                            <Form.Control
                                                as="select"
                                                custom
                                                placeholder="selectionner"
                                                onChange={(e) => { setJour(e.target.value) }}
                                            >
                                                <option >OUI taille S</option>
                                                <option >OUI taille M</option>
                                                <option >NON</option>
                                            </Form.Control>
                                        </Row>
                                        <Row className="pb-2">
                                        <p className="col"><strong>Protection de NUIT</strong></p>
                                            <Form.Control
                                                as="select"
                                                custom
                                                onChange={(e) => { setNuit(e.target.value) }}
                                            >
                                                <option >OUI taille S</option>
                                                <option >OUI taille M</option>
                                                <option >NON</option>
                                            </Form.Control>
                                        </Row>
                                    </Row>
                                </Form.Group>
                            </Row>
                            <Row className="justify-content-center p-1 m-1 mb-3">
                                <h3 className="border border-danger w-100 text-center p-2">Linge :</h3>
                                <Form.Control
                                    as="select"
                                    custom
                                    onChange={(e) => { setMaison(e.target.value) }}
                                >
                                    <option >Maison</option>
                                    <option >Internat</option>
                                </Form.Control>
                            </Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger mb-3">
                                    <h5 className="mt-2"><strong>Particularité :</strong></h5>
                                </Row>
                            </Form.Group>
                            <Container className="justify-content-around m-1 pt-2">
                                    <Row className="m-1 p-3" >
                                        <h5>Lunette :</h5>
                                        <Form.Control
                                            as="select"
                                            custom
                                            onChange={(e) => { setLunette(e.target.value) }}
                                        >
                                            <option >OUI</option>
                                            <option >NON</option>
                                        </Form.Control>
                                    </Row>
                                    <Row className="m-1 p-3" >
                                        <h5>Grenouillières la nuit :</h5>
                                        <Form.Control
                                            as="select"
                                            custom
                                            onChange={(e) => { setGrenouillieres(e.target.value) }}
                                        >
                                            <option >OUI</option>
                                            <option >NON</option>
                                        </Form.Control>
                                    </Row>
                            
                                <Row className="m-1 p-3" >
                                    <h5>Soins corporels : </h5>
                                    <Form.Control as="textarea" onChange={(e) => setCorporels(e.target.value)} placeholder="Editer un text informatif..." style={{ height:'107px', overflow: "scroll"  }} />
                                </Row>
                            </Container>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger mb-3">
                                    <h5 className="mt-2"><strong>Habitude :</strong></h5>
                                </Row>
                                <Form.Control as="textarea" onChange={(e) => setHabitude(e.target.value)} placeholder="Editer un text informatif..." style={{ height:'107px', overflow: "scroll"  }} />
                            </Form.Group>
                        </Form>
                    </>
                )}
        </Card.Body>
    );
};

export default Hygiene;