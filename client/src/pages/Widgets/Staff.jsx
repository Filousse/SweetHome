import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { Alert, Row, Col, Card, Container } from "react-bootstrap";
import Header from "../../components/Header";
import TeamTurnover from "../../components/files/guestFiles/files/TeamTurnover"

const Staff = () => {
    const userReducer = useSelector(state => state.userReducer)
    const history = useHistory()
    const componentRef = useRef()
    const [team, setTeam] = useState()
    const [showUpdate, setShowUpdate] = useState()

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

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleUpdate = () => {
        setShowUpdate(!showUpdate);
    };

    const handlePreview = () => {
        history.push("/dashboard")
    }

    return (
        <>
            <Header logout={false}></Header>
            <Container style={{ "maxHeight": "100%", "minHeight": 600 }} className="mt-4 mb-4 w-75">
                {!team &&
                    <>
                        {!userReducer.team &&
                            <>
                                {!showUpdate &&
                                    <Row className="m-4 justify-content-center">
                                        <Col sm={12} onClick={handelEducatif} className="border border-primary rounded p-2 mt-2" style={{ "backgroundColor": "#61a6fb", "cursor": "pointer" }}>
                                            <h3 className={"text-center text-light"} >Roulement de l'équipe éducatif</h3>
                                        </Col>
                                        <Col sm={12} onClick={handelMedical} className="border border-success rounded p-2 mt-4" style={{ "backgroundColor": "#28da69", "cursor": "pointer" }} >
                                            <h3 className={"text-center text-light"} >Roulement de l'équipe médical</h3>
                                        </Col>
                                    </Row>
                                }
                            </>
                        }
                        {team == "Éducatif" || userReducer.team == "Éducative" &&
                            <>
                                <Row>
                                    <Alert className=" border border-danger ">
                                        <Row className="justify-content-center ">
                                            <Col >
                                                <img
                                                    src="../../assets/icon/btn_Previous.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePreview}
                                                />
                                            </Col>
                                            <Col >
                                                <img
                                                    src="../../assets/icon/btn_PrintPDF.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePrint}
                                                />
                                            </Col>
                                        </Row>
                                    </Alert>
                                </Row>
                                <Card className="m-4">
                                    <TeamTurnover ref={componentRef} team={team} reducerTeam={userReducer.team} showUpdate={showUpdate} />
                                </Card>
                            </>
                        }
                        {team == "Médical" || userReducer.team == "Médical" &&
                            <>
                                <Row>
                                    <Alert className=" border border-danger ">
                                        <Row className="justify-content-center ">
                                            <Col >
                                                <img
                                                    src="../../assets/icon/btn_Previous.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePreview}
                                                />
                                            </Col>
                                            <Col >
                                                <img
                                                    src="../../assets/icon/btn_PrintPDF.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePrint}
                                                />
                                            </Col>
                                        </Row>
                                    </Alert>
                                </Row>
                                <Card>
                                    <TeamTurnover ref={componentRef} team={team} reducerTeam={userReducer.team} showUpdate={showUpdate} />
                                </Card>
                            </>
                        }
                    </>
                }
                {!userReducer.team &&
                    <>
                        {team == "Médical" &&
                            <>
                                <Row>
                                    <Alert className=" border border-danger ">
                                        <Row className="justify-content-center ">
                                            {!showUpdate ? (
                                                <>
                                                    <Col >
                                                        <img
                                                            src="../../assets/icon/btn_Previous.png"
                                                            style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                            alt="print_file"
                                                            onClick={handlePreview}
                                                        />
                                                    </Col>
                                                    <Col >
                                                        <img
                                                            src="../../assets/icon/btn_UpdateFiles.png"
                                                            style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                            alt="print_file"
                                                            onClick={handleUpdate}
                                                        />
                                                    </Col>
                                                </>
                                            ) : (
                                                    <>
                                                        <Col>
                                                            <img
                                                                className="ml-4"
                                                                src="../../assets/icon/btn_Previous.png"
                                                                style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                                alt="print_file"
                                                                onClick={handlePreview}
                                                            />
                                                        </Col>
                                                        <Col>
                                                            <img
                                                                className="ml-4"
                                                                src="../../assets/icon/btn_Save.png"
                                                                style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                                alt="print_file"
                                                                onClick={handleUpdate}
                                                            />
                                                        </Col>
                                                    </>

                                                )}
                                            <Col >
                                                {!showUpdate &&
                                                    <img
                                                        src="../../assets/icon/btn_PrintPDF.png"
                                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                        alt="print_file"
                                                        onClick={handlePrint}
                                                    />
                                                }
                                            </Col>
                                        </Row>
                                    </Alert>
                                </Row>
                                <Card>
                                    <TeamTurnover ref={componentRef} team={team} reducerTeam={userReducer.team} showUpdate={showUpdate} />
                                </Card>
                            </>
                        }
                        {team == "Éducatif" &&
                            <>
                                <Row>
                                    <Alert className=" border border-danger ">
                                        <Row className="justify-content-center ">
                                            <Col >
                                                {!showUpdate &&
                                                    <img
                                                        src="../../assets/icon/btn_Previous.png"
                                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                        alt="print_file"
                                                        onClick={handlePreview}
                                                    />
                                                }
                                            </Col>
                                            <Col>
                                                {!showUpdate
                                                    ? (
                                                        <img
                                                            src="../../assets/icon/btn_UpdateFiles.png"
                                                            style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                            alt="print_file"
                                                            onClick={handleUpdate}
                                                        />
                                                    ) : (
                                                        <>        
                                                                <Col sm={6}>
                                                                    <img
                                                                        className="ml-4"
                                                                        src="../../assets/icon/btn_Previous.png"
                                                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                                        alt="btn_Previous"
                                                                        onClick={handlePreview}
                                                                    />
                                                                </Col>
                                                                <Col sm={6}>
                                                                    <img
                                                                        className="ml-4"
                                                                        src="../../assets/icon/btn_Save.png"
                                                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                                        alt="print_file"
                                                                        onClick={handleUpdate}
                                                                    />
                                                                </Col>
                                                            
                                                        </>
                                                    )}

                                            </Col>
                                            <Col >
                                                {!showUpdate &&
                                                    <img
                                                        src="../../assets/icon/btn_PrintPDF.png"
                                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                        alt="print_file"
                                                        onClick={handlePrint}
                                                    />
                                                }
                                            </Col>
                                        </Row>
                                    </Alert>
                                </Row>
                                <Card>
                                    <TeamTurnover ref={componentRef} team={team} reducerTeam={userReducer.team} showUpdate={showUpdate} />
                                </Card>
                            </>
                        }
                    </>
                }
            </Container>
        </>
    );
};

export default Staff;