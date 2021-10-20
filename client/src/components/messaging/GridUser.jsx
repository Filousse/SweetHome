import React from 'react';
import Widget from '../Widget';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const GridUser = () => {
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    return (
        <Container style={{ "maxWidth": "1200px" }} className=" w-100 p-4">
            <Row className="justify-content-center w-100 m-1">
                <h1>Messagerie :</h1>
            </Row>
            <Row className="justify-content-center w-100 m-0">
                {usersData && usersData.map((users) => {
                    if (users.adminName === userData.name || users.adminName === userData.adminName && users.adminName != null) {
                        return (
                            <Widget
                                userId={users._id}
                                userWidget={true}
                                flag={users.photoProfil}
                                name={users.name}
                                surname={users.surname}
                                team={users.team}
                            />
                        )
                    }
                })}
            </Row>
        </Container>
    );
};

export default GridUser;