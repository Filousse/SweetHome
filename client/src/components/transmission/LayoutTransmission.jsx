import React from 'react';
import { Container, Row } from "react-bootstrap";
import DayContainer from './DayContainer';

const LayoutTransmission = (props) => {
    const teamData = { ...props };
    const today = new Date()
    var options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
    const aujourdhui = today.toLocaleDateString("fr-FR", options)
    const dayRef = new Date(today)
    dayRef.setDate(dayRef.getDate() - 1)
    const hier = dayRef.toLocaleDateString("fr-FR", options)
    dayRef.setDate(dayRef.getDate() - 1)
    const deuxJoursAvant = dayRef.toLocaleDateString("fr-FR", options)
    dayRef.setDate(dayRef.getDate() - 1)
    const troisJoursAvant = dayRef.toLocaleDateString("fr-FR", options)
    dayRef.setDate(dayRef.getDate() - 1)
    const quatreJoursAvant = dayRef.toLocaleDateString("fr-FR", options)
    dayRef.setDate(dayRef.getDate() - 1)
    const cinqJoursAvant = dayRef.toLocaleDateString("fr-FR", options)
    dayRef.setDate(dayRef.getDate() - 1)
    const sixJoursAvant = dayRef.toLocaleDateString("fr-FR", options)
    dayRef.setDate(dayRef.getDate() - 1)
    const uneSemaineAvant = dayRef.toLocaleDateString("fr-FR", options)

    return (
        <Container fluid className="justify-content-center mb-4 pb-4">
            <Row className="justify-content-center mr-4 ml-4" >
                <DayContainer day={"Aujourd'hui : " + aujourdhui} />
                <DayContainer day={hier} />
            </Row>
            <Row className="justify-content-center mr-4 ml-4" >
                <DayContainer day={deuxJoursAvant} />
                <DayContainer day={troisJoursAvant} />
            </Row>
            <Row className="justify-content-center mr-4 ml-4" >
                <DayContainer day={quatreJoursAvant} />
                <DayContainer day={cinqJoursAvant} />
            </Row>
            <Row className="justify-content-center mr-4 ml-4" >
                <DayContainer day={sixJoursAvant} />
                <DayContainer day={uneSemaineAvant} />
            </Row>
        </Container>
    );
};

export default LayoutTransmission;


