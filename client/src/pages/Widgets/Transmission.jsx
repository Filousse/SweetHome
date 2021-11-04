import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../../components/Header";
import LayoutTransmission from "../../components/transmission/LayoutTransmission"
import { useSelector } from "react-redux"
import { useEffect } from 'react';

const Transmission = () => {
    const userReducer = useSelector(state => state.userReducer)
    const [team, setTeam] = useState()

    useEffect(() => {
        const loadTeam = () => {
            setTeam(userReducer.team)
        }
        return () => {
            loadTeam()
        }
    }, [userReducer])

    const handelMedical = () => {
        setTeam("Médical")
    }

    const handelEducatif = () => {
        setTeam("Éducatif")
    }

    return (
        <>
            <Header logout={false}></Header>
            {!team &&
                <>
                    { !userReducer.team &&
                        <Container className="w-75 justify-content-center p-2" style={{ "maxHeight": "100%", "minHeight": 600 }}>
                            <Row className="m-4 justify-content-center">
                                <Col sm={12} onClick={handelEducatif} className="border border-primary rounded p-2 m-4" style={{ "backgroundColor": "#61a6fb", "cursor": "pointer" }}>
                                    <h3 className={"text-center text-light"} >Cahier de transmission éducatif</h3>
                                </Col>
                                <Col sm={12} onClick={handelMedical} className="border border-success rounded p-2 m-4" style={{ "backgroundColor": "#28da69", "cursor": "pointer" }} >
                                    <h3 className={"text-center text-light"} >Cahier de transmission médical</h3>
                                </Col>
                            </Row>
                        </Container>
                    }
                    {team == "Éducatif" || userReducer.team == "Éducative" &&
                        <Container className="justify-content-center p-2" style={{ "maxHeight": "100%" }}>
                            <Col sm={12} className="border border-primary rounded p-2 mt-2" style={{ "backgroundColor": "#61a6fb", "cursor": "pointer" }}>
                                <h3 className={"text-center text-light"} >Cahier de transmission éducatif</h3>
                            </Col>
                            <LayoutTransmission team={team} />
                        </Container>
                    }
                    {team == "Médical" || userReducer.team == "Médical" &&
                        <Container className="justify-content-center p-2" style={{ "maxHeight": "100%" }}>
                            <Col sm={12} className="border border-success rounded p-2 mt-2" style={{ "backgroundColor": "#28da69", "cursor": "pointer" }} >
                                <h3 className={"text-center text-light"} >Cahier de transmission médical</h3>
                            </Col>
                            <LayoutTransmission team={team} />
                        </Container>
                    }
                </>
            }
            { !userReducer.team &&
                <>
                    {team == "Médical" &&
                        <Container className="justify-content-center p-2" style={{ "maxHeight": "100%" }}>
                            <Col sm={12} onClick={handelMedical} className="border border-success rounded p-2 mt-2" style={{ "backgroundColor": "#28da69", "cursor": "pointer" }} >
                                <h3 className={"text-center text-light"} >Cahier de transmission médical</h3>
                            </Col>
                            <LayoutTransmission team={team} />
                        </Container>
                    }
                    {team == "Éducatif" &&
                        <Container className="justify-content-center p-2" style={{ "maxHeight": "100%" }}>

                            <Col sm={12} onClick={handelEducatif} className="border border-primary rounded p-2 mt-2" style={{ "backgroundColor": "#61a6fb", "cursor": "pointer" }}>
                                <h3 className={"text-center text-light"} >Cahier de transmission éducatif</h3>
                            </Col>
                            <LayoutTransmission team={userReducer.team} />
                        </Container>
                    }
                </>
            }
        </>
    );
};

export default Transmission;