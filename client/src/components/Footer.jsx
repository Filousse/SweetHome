import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = (props) => {
    const home = props.home;

    return (
        <footer style={{"relative":"absolute", "bottom":"0px"}} className="bg-dark w-100"  >
            { home ? (
                <Container className="text-center text-md-left p-2">
                    <Row>
                        <Col className="md-6 mt-md-0">
                            <p className="m-4 text-uppercase text-light">Sweet Home</p>
                            <p className=" m-4 text-light text-justify">Logiciel de gestion des dossiers de l'usager du secteur social et médicaux-social.</p>
                            <p className=" m-4 text-uppercase text-light">Links</p>
                            <p className="m-4">
                                <a href="https://www.linkedin.com/in/thibault-brasseur-developpeurweb/?originalSubdomain=fr">
                                    https://www.linkedin.com/in/thibault-brasseur-developpeurweb
                        </a><br></br>
                                <a href="https://github.com/Filousse">
                                    https://github.com/Filousse
                        </a>
                            </p>
                        </Col>
                        <Col className="md-3 mb-md-0 mb-3 ">
                            <ul className="list-unstyled m-4">
                                <p className="text-uppercase text-light" >Contact</p>
                                <p className="text-uppercase text-light" >1 rue de la louisiane 31200 Toulouse</p>
                                <p className=" text-light" >Téléphone : 0663364690</p>
                                <p className=" text-light" >mail : brasseur.blz@gmail.com</p>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            ) : (
                    <>
                            <Row className="justify-content-center">
                                <h3 className="m-2 text-uppercase text-light">
                                Sweet Home
                                </h3>
                            </Row>
                            <Row className="justify-content-center">
                                <p className=" m-4 text-light text-center text-justify">Logiciel de gestion des dossiers de l'usager du secteur social et médicaux-social.
                                </p>
                            </Row>
                    </>
                )}
            <div className="footer-copyright text-center text-light py-3">© 2021 Copyright:
        <a href="https://github.com/Filousse">  ThibaultBrasseur.dev</a>
            </div>
        </footer>
    )
}


export default Footer