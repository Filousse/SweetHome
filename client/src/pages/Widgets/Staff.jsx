import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { Alert, Row, Col, Card, Container } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
            <Container className="mt-4 mb-4 w-75">
            {!team &&
                <>
                    { !userReducer.team &&
                        <>
                            <>
                                {!showUpdate &&
                                    <>
                                    <Row className="justify-content-center">
                                        <Col onClick={handelEducatif} style={{ "backgroundColor": "#61a6fb", "cursor": "pointer" }} className="justify-content-center m-4 p-4">
                                            <h3 className={"text-center"} >Roulement de l'équipe éducatif</h3>
                                        </Col>
                                        <Col onClick={handelMedical} style={{ "backgroundColor": "#28da69", "cursor": "pointer" }} className="justify-content-center m-4 p-4">
                                            <h3 className={"text-center"} >Roulement de l'équipe médical </h3>
                                        </Col>
                                    </Row>
                                    </>
                                }
                            </>
                        </>
                    }
                    {team == "Éducatif" || userReducer.team == "Éducative" &&
                        <>
                            <Row>
                                <Alert className=" border border-danger ">
                                    <Row className="justify-content-center ">
                                        <Col >
                                                <img
                                                    src="../../assets/icon/previous.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePreview}
                                                />
                                        </Col>
                                        <Col >
                                                <img
                                                    src="../../assets/icon/printPDF.png"
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
                                                    src="../../assets/icon/previous.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePreview}
                                                />
                                  
                                        </Col>
                                        <Col >
                                      
                                                <img
                                                    src="../../assets/icon/printPDF.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePrint}
                                                />
                                        </Col>
                                    </Row>
                                </Alert>
                            </Row>
                            <Card>
                                <TeamTurnover ref={componentRef} team={team}  reducerTeam={userReducer.team} showUpdate={showUpdate} />
                            </Card>
                        </>
                    }
                </>
            }
            { !userReducer.team &&
                <>
                    {team == "Médical" &&
                        <>
                            <Row>
                                <Alert className=" border border-danger ">
                                    <Row className="justify-content-center ">
                                        <Col >
                                            {!showUpdate &&
                                                <img
                                                    src="../../assets/icon/previous.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePreview}
                                                />
                                            }
                                        </Col>
                                        <Col >
                                            {!showUpdate
                                                ? (
                                                    <img
                                                        src="../../assets/icon/updateFiles.png"
                                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                        alt="print_file"
                                                        onClick={handleUpdate}
                                                    />
                                                ) : (
                                                    <img
                                                        className="ml-4"
                                                        src="../../assets/icon/visit.png"
                                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                        alt="print_file"
                                                        onClick={handleUpdate}
                                                    />
                                                )}
                                        </Col>
                                        <Col >
                                            {!showUpdate &&
                                                <img
                                                    src="../../assets/icon/save.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePreview}
                                                />
                                            }
                                        </Col>
                                        <Col >
                                            {!showUpdate &&
                                                <img
                                                    src="../../assets/icon/printPDF.png"
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
                                                    src="../../assets/icon/previous.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePreview}
                                                />
                                            }
                                        </Col>
                                        <Col   >
                                            {!showUpdate
                                                ? (
                                                    <img
                                                        src="../../assets/icon/updateFiles.png"
                                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                        alt="print_file"
                                                        onClick={handleUpdate}
                                                    />
                                                ) : (
                                                    <img
                                                        className="ml-4"
                                                        src="../../assets/icon/visit.png"
                                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                        alt="print_file"
                                                        onClick={handleUpdate}
                                                    />
                                                )}
                                        </Col>
                                        <Col >
                                            {!showUpdate &&
                                                <img
                                                    src="../../assets/icon/save.png"
                                                    style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                    alt="print_file"
                                                    onClick={handlePreview}
                                                />
                                            }
                                        </Col>
                                        <Col >
                                            {!showUpdate &&
                                                <img
                                                    src="../../assets/icon/printPDF.png"
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
                                <TeamTurnover ref={componentRef} team={team}  reducerTeam={userReducer.team} showUpdate={showUpdate} />
                            </Card>
                        </>
                    }
                </>
            }         
            </Container>
            <Footer />
        </>
    );
};

export default Staff;