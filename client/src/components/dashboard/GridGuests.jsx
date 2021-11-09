import React from 'react';
import Widget from './Widget';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const GridGuests = (props) => {
    const propsData = { ...props };
    const guestsReducer = useSelector((state) => state.guestReducer);
    const userReducer = useSelector((state) => state.userReducer);

    return (
        <Container style={{ "maxWidth": "1200px" }} className=" w-100 p-4">
            <Row className="justify-content-center w-100 m-0">
                <h1>Widget : {propsData.widget}</h1>
            </Row>
            <Row className="justify-content-center w-100 m-0">
                {guestsReducer.map((guest) => {
                    if (guest.adminName === userReducer.name || guest.adminName === userReducer.adminName) {
                        const checkRefEduc = () => {
                            let result;
                            if (guest.educRef === userReducer._id) {
                              result = "Référence";
                            } else {
                              result = "";
                            }
                            return result;
                        }
                        const checkRefMedical = () => {
                            let result;
                            if (guest.medicalRef  === userReducer._id) {
                              result = "Référence";
                            } else {
                              result = "";
                            }
                            return result;
                        }
                        return (
                            <>
                            <Widget
                                checkRefMedical = {checkRefMedical()}
                                checkRefEduc = {checkRefEduc()}
                                guestId = {guest._id}
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