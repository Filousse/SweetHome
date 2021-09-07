import React, { useState, useEffect } from 'react';
import Widget from './Widget';
import WidgetData from "../dashboard/WidgetData.json";
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const Grid = () => {
    const [dataEducatif, setDataEducatif] = useState([]);
    const [dataMedical, setDataMedical] = useState([]);
    const [dataOverall, setDataOverall] = useState([]);
    const userData = useSelector((state) => state.userReducer);

    useEffect(() => {
        setDataEducatif(WidgetData.educative);
        setDataMedical(WidgetData.medical);
        setDataOverall(WidgetData.overall);
    }, []);


    return (
        <Container style={{ "maxWidth": "1200px" }} className=" w-100 p-4">
            <Row className="justify-content-center w-100 m-0">
                {userData.team === "Éducative" &&
                    <>
                        {dataEducatif
                            .map((widget) => (
                                <Widget data={widget} key={widget.name} team={userData.team} />
                            ))}
                        {dataOverall
                            .map((widget) => (
                                <Widget data={widget} key={widget.name} team={userData.team} />
                            ))}
                    </>
                }
                {userData.team === "Médical" &&
                    <>
                        {dataMedical
                            .map((widget) => (
                                <Widget data={widget} key={widget.name} team={userData.team} />
                            ))}
                        {dataOverall
                            .map((widget) => (
                                <Widget data={widget} key={widget.name} team={userData.team} />
                            ))}
                    </>
                }
                {!userData.team &&
                    <>
                        {dataEducatif
                            .map((widget) => (
                                <Widget data={widget} key={widget.name} team={userData.team} />
                            ))}
                        {dataMedical
                            .map((widget) => (
                                <Widget data={widget} key={widget.name} />
                            ))}
                        {dataOverall
                            .map((widget) => (
                                <Widget data={widget} key={widget.name} team={userData.team} />
                            ))}
                    </>
                }
            </Row>
        </Container>
    );
};

export default Grid;