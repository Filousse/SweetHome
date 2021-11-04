import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { OnCallHours } from '../../components/files/guestFiles/files/OnCallHours';
import { Container, Row, Col, Alert } from "react-bootstrap"

const Contact = () => {
    const componentRef = useRef();
    const history = useHistory();
    const [showUpdate, setShowUpdate] = useState(true)

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
            <Container style={{ "maxWidth": "1200px" }} className=" p-4 mt-4 ">
                <Row>
                    <Alert className=" bg-secondary ml-3 ">
                        <Row className="justify-content-center ">
                            <Col >

                                    <img
                                        src="../../assets/icon/btn_Previous.png"
                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                        alt="btn_Previous"
                                        onClick={handlePreview}
                                    />
                                
                            </Col>
                            <Col   >
                                {showUpdate
                                    ? (
                                        <img
                                            src="../../assets/icon/btn_UpdateFiles.png"
                                            style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                            alt="btn_UpdateFiles"
                                            onClick={handleUpdate}
                                        />
                                    ) : (
                                        <img
                                            className="ml-4"
                                            src="../../assets/icon/btn_Save.png"
                                            style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                            alt="btn_Visit"
                                            onClick={handleUpdate}
                                        />
                                    )}
                            </Col>
                            <Col >
                                {showUpdate &&
                                    <img
                                        src="../../assets/icon/btn_PrintPDF.png"
                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                        alt="btn_PrintPDF"
                                        onClick={handlePrint}
                                    />
                                }
                            </Col>
                        </Row>
                    </Alert>
                </Row>
                <OnCallHours ref={componentRef} showUpdate={showUpdate} />
            </Container>
        </>
    );
};

export default Contact;