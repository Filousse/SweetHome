import React from 'react';
import ModalChat from './ModalChat';
import { Row, Container, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { switchColorWidget } from "../Utils"

const GridUser = () => {
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    return (
        <Container fluid className=" w-100 p-4">
            <Row className="m-4 p-2 justify-content-center bg-secondary rounded-lg">
                <h3 className="text-light text-center text-uppercase">messagerie</h3>
            </Row >
            <Row className="justify-content-center w-100 m-0">
                {usersData && usersData.map((users) => {
                    if (users.adminName === userData.name || users.adminName === userData.adminName && users.adminName != null) {
                        return (
                            <Col className="d-flex justify-content-center col-md-3 col-sm-4 col-xs-6" >
                            <ModalChat 
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