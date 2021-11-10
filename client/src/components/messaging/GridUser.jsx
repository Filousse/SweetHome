import React from 'react';
import ModalChat from './ModalChat';
import { Row, Container, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { switchColorWidget } from "../Utils"

const GridUser = () => {
    const usersReducer = useSelector((state) => state.usersReducer);
    const userReducer = useSelector((state) => state.userReducer);

    return (
        <Container style={{"minHeight":550}} fluid className=" w-100 p-4">
            <Row className="m-4 p-2 justify-content-center bg-secondary rounded-lg">
                <h3 className="text-light text-center text-uppercase">messagerie</h3>
            </Row >
            <Row className="justify-content-center w-100 m-0">
                {usersReducer && usersReducer.map((users) => {
                    if (    users.adminName === "Demo" ||
                            users.adminName === userReducer.name && users.adminName != null ||
                            userReducer.surname === "Yasmine" && users.adminName != null  ||
                            userReducer.surname === "Thomas" && users.adminName != null
                            
                        ) {       
                        return (
                            <Col className="d-flex justify-content-center col-md-3 col-sm-4 col-xs-6" >
                            <ModalChat 
                              job={users.job}
                              bio={users.bio}
                              userId={users.userId}
                              name={users.name} 
                              surname={users.surname} 
                              style={switchColorWidget(users.team)}
                              team={users.team} 
                              src={users.photoProfil} 
                            />
                          </Col>
                        )
                    }
                })}
            </Row>
        </Container>
    );
};

export default GridUser;