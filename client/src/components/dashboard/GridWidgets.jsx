import React, { useState, useEffect } from 'react';
import Widget from "../Widget";
import WidgetData from "./WidgetData.json";
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const GridWidget = () => {
    const [dataEducatif, setDataEducatif] = useState([]);
    const [dataMedical, setDataMedical] = useState([]);
    const [dataAdmin, setDataAdmin] = useState([]);
    const [dataEducMedic, setDataEducMedic] = useState([]);

    const userData = useSelector((state) => state.userReducer);

    useEffect(() => {
        setDataEducatif(WidgetData.educative);
        setDataMedical(WidgetData.medical);
        setDataAdmin(WidgetData.admin);
        setDataEducMedic(WidgetData.educ_medic);
    }, []);


    return (
        <Container style={{ "maxWidth": "1200px" }} className=" w-100 p-4">
            <Row className="justify-content-center w-100 m-0">
                {userData.team === "Éducative" &&
                    <>
                        {dataEducMedic.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team="Éducative"
                                route={widget.route}
                            />
                        ))}
                        {dataEducatif.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team="Éducative"
                                route={widget.route}
                            />
                        ))}
                        {dataMedical.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team="Éducative"
                                route={widget.route}
                            />
                        ))}
                        {dataAdmin.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team="Éducative"
                                route={widget.route}
                            />
                        ))}
                    </>
                }
                {userData.team === "Médical" &&
                    <>
                        {dataEducMedic.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team="Médical"
                                route={widget.route}
                            />
                        ))}
                        {dataMedical.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team="Médical"
                                route={widget.route}
                            />
                        ))}
                        {dataEducatif.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team="Médical"
                                route={widget.route}
                            />
                        ))}
                        {dataAdmin.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team="Médical"
                                route={widget.route}
                            />
                        ))}
                    </>
                }
                {!userData.team &&
                    <>
                        {dataEducMedic.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team=""
                                route={widget.route}
                            />
                        ))
                        }
                        {dataAdmin.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team=""
                                route={widget.route}
                            />
                        ))
                        }
                        {dataEducatif.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team=""
                                route={widget.route}
                            />
                        ))
                        }
                        {dataMedical.map((widget) => (
                            <Widget
                                flag={widget.flag}
                                name={widget.name}
                                team=""
                                route={widget.route}
                            />
                        ))
                        }
                    </>
                }
            </Row>
        </Container>
    );
};

export default GridWidget;
