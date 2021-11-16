import React, { useEffect, useState } from 'react';
import Widget from './Widget';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { isEmpty } from "../Utils"

const GridGuests = (props) => {
    const propsData = { ...props };
    const guestsReducer = useSelector((state) => state.guestReducer);
    const userReducer = useSelector((state) => state.userReducer);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        !isEmpty(guestsReducer) && setLoading(false);
    }, [guestsReducer]);

    return (
        <Container style={{ "maxWidth": "1200px", "minHeight": 550 }} className=" w-100 p-4">
            <Row className="justify-content-center m-0 bg-secondary rounded">
                <h1 className="text-center text-justify text-light"> Widget : {propsData.widget}</h1>
            </Row>
            <Row className="justify-content-center w-100 m-0">
                {guestsReducer.map((guest) => {
                    if (guest.adminName === userReducer.name ||
                        guest.adminName === "Demo" ||
                        guest.adminName === userReducer.adminName) {
                        return (
                            <>
                                <Widget
                                    guestId={guest._id}
                                    guestWidget="guestWidget"
                                    flag={guest.picture}
                                    widget={propsData.widget}
                                    name={guest.name}
                                    surname={guest.surname}
                                    route={guest.name}
                                    team={"guest"}
                                />
                            </>
                        )
                    }
                })}
            </Row>
        </Container>
    );
};

export default GridGuests;