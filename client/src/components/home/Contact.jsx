import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <Container style={{ "backgroundColor": "rgb(208, 250, 222)", "height": "100%", "paddingTop": 70 }}>
            <Row className="justify-content-center">
                <h3 className="text-center"> <strong>Un projet, une idée?<br></br> Dites-nous tout !</strong></h3>
            </Row>
            <Row className="justify-content-around p-4">
            <Col md={6} sm={12} className="p-4">
                    <Card classname="m-4">
                        <Card.Body>
                            <h3>Contact</h3>
                            <Card.Text>
                                Adresse :<br/>1 rue de la louisiane, 31200 Toulouse 
                            </Card.Text>
                            <Card.Text>
                                Mail :<br/>brasseur.blz@gmail.com
                            </Card.Text>
                            <Card.Text>
                                Tel :<br/>0663364690
                            </Card.Text>
                            <Card.Text>
                                Linkedin :<br/><Link
                                
                                to={{ pathname: "https://www.linkedin.com/in/thibault-brasseur-developpeurweb/?originalSubdomain=fr" }}
                                >ThibaultBrasseurDéveloppeurWeb</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12} className="p-4">
                    <Row className="justify-content-center">
                        <h3 className="text-center" >Mot du développeur :</h3>
                    </Row>
                    <Row>
                        <p className="text-justify p-4">
                            Diplôme moniteur éducateur depuis 2007, j'ai travaillé dans de nombreuses structures sociales et médiales sociales telles que les CHRS, MECS, IME, SESSAD et l'idée de développer un logiciel de gestion des dossiers de l'usager muris depuis très longtemps en moi. Passionné par les technologie du web, je suis diplômé "Développeur web Chef de projet web" depuis 2019 et concrétise cette idée. C'est donc en tant que développeur web qualifié et collégues éducateur que je vous souhaite vous accompagner dans la création de votre logiciel personnalisé.
                            <br/><br/>Thibault Brasseur
                        </p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;