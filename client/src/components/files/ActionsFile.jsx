import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from './guestFiles/ComponentToPrint';
import { clearUrlStyle } from "../Utils"
import { Container, Row, Col, Alert } from "react-bootstrap"
import { useSelector } from "react-redux"

const ActionsFile = () => {
    const history = useHistory();
    const guestReducer = useSelector(state => state.guestReducer)
    const [educRef, setEducRef] = useState()
    const [medicalRef, setMedicalRef] = useState()
    const userReducer = useSelector((state) => state.userReducer);
    const url = window.location.href
    const lastIndex = url.substring(url.lastIndexOf("id=") + 3)
    const id = lastIndex.substr(0, 24)
    const widgetUrl = url.substring(url.lastIndexOf("widget=") + 7)
    const widget = clearUrlStyle(widgetUrl)
    const componentRef = useRef();
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

    useEffect(() => {
        const loadRefEduc = () => {
            guestReducer.map((guest) => {
                if (id == guest._id) {
                    return (
                        setEducRef(guest.educRef),
                        setMedicalRef(guest.medicalRef)
                    )
                }
            })
        }
        loadRefEduc()
    }, [guestReducer])


    return (
        <>
            <Container style={{ "maxWidth": "1200px" }} className=" p-4 mt-4 ">
                <Row>
                    <Alert className=" border border-danger ">
                        <Row className="justify-content-center ">
                            <Col >
                                {showUpdate &&
                                    <img
                                        src="../../assets/icon/previous.png"
                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                        alt="print_file"
                                        onClick={handlePreview}
                                    />
                                }
                            </Col>
                            {
                                userReducer._id === educRef || userReducer._id === medicalRef || userReducer.adminName == null
                                    ? (
                                        <>
                                            <Col  >
                                                {showUpdate
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
                                                {showUpdate &&
                                                    <img
                                                        src="../../assets/icon/save.png"
                                                        style={{ "height": "35px", "width": "35px", "cursor": "pointer" }}
                                                        alt="print_file"
                                                        onClick={handlePreview}
                                                    />
                                                }
                                            </Col>
                                        </>
                                    ) : (
                                        <></>
                                    )
                            }
                            <Col >
                                {showUpdate &&
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
                <ComponentToPrint ref={componentRef} guestId={id} widget={widget} showUpdate={showUpdate} />
            </Container>
        </>
    );
};

export default ActionsFile;