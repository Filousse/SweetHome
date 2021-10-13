import React from 'react';
import Widget from '../Widget';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const GridGuests = (props) => {
    const dashboardData = { ...props };
    const guestsReducer = useSelector((state) => state.guestReducer);
    const userData = useSelector((state) => state.userReducer);

    return (
        <Container style={{ "maxWidth": "1200px" }} className=" w-100 p-4">
            <Row className="justify-content-center w-100 m-0">
                <h1>Widget : {dashboardData.widget}</h1>
            </Row>
            <Row className="justify-content-center w-100 m-0">
                {guestsReducer.map((guest) => {
                    if (guest.adminName === userData.name || guest.adminName === userData.adminName) {
                        return (
                            <Widget
                                guestId = {guest._id}
                                guestWidget={true}
                                flag={guest.picture}
                                widget={dashboardData.widget}
                                name={guest.name}
                                surname={guest.surname}
                                route={guest.name}
                                team={"guest"}
                            />
                        )
                    }
                })}
            </Row>
        </Container>
    );
};

export default GridGuests;