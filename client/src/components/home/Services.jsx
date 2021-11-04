import React from 'react';
import {Container, Row, Col, Image, Button } from "react-bootstrap"

const Services = () => {
    return (
        <Container style={{"backgroundColor": "rgb(252, 230, 248)", "marginTop":"600px"}}>
            <Row className="pt-5 justify-content-center">
                <h1 className="m-5 text-center">Complet, simple et personnalisé</h1>
            </Row>
            <Row className="p-2 justify-content-between">
                <Col md={6} sm={12}>
                <Image className="w-100" src="./assets/img/services_acces.jpeg" alt="launchpad" />
                </Col>
                <Col md={6} className="">
                    <Row className="m-4 justify-content-center" >
                        <h3 className="text-center"><strong>Un outil accessible à tous partout</strong></h3>
                        <h3 className="m-4 text-justify">Grâce à la mise à jour des données en temps réel, les professionnels ont un accès rapide à toutes les données nécessaires pour leurs actions de tous les jours.</h3>
                    </Row>
                </Col>
            </Row>
            <Row className="p-2 mb-4 justify-content-between">
                <Col  md={6} xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} className="pt-4">
                    <Row className="m-4 justify-content-center" >
                        <h3 className=" mt-4 text-center"><strong>Améliorez votre suivi au quotidien</strong></h3>
                        <h3 className="m-4 text-justify">Coordonnez la prise en charge pluridisciplinaire de manière cohérente en centralisant l'accès aux mises à jour auprès vos référents éducatifs et médicaux.</h3>
                    </Row>
                </Col>
                <Col md={6} sm={12}  xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                <Image  className="w-100" src="./assets/img/services_team.jpeg" alt="launchpad" />
                </Col>
            </Row>  
            <Row className="pb-4 justify-content-center">
                <Button href="#Contact" style={{fontSize: 20}} variant="info" className="w-75 mb-4 p-4"><strong>J'ai un projet de dossier usager informatiser</strong></Button>
            </Row>
        </Container>
    );
};

export default Services;