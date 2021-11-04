import React from 'react';
import Widget from './Widget';
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
                        const checkRefEduc = () => {
                            let result;
                            if (guest.educRef === userData._id) {
                              result = "Référence";
                            } else {
                              result = "";
                            }
                            return result;
                        }
                        const checkRefMedical = () => {
                            let result;
                            if (guest.medicalRef  === userData._id) {
                              result = "Référence";
                            } else {
                              result = "";
                            }
                            return result;
                        }
                        return (
                            <>
                            {/* <div> {checkRefEduc()}</div> */}
                            <Widget
                                checkRefMedical = {checkRefMedical()}
                                checkRefEduc = {checkRefEduc()}
                                guestId = {guest._id}
                                guestWidget="guestWidget"
                                flag={guest.picture}
                                widget={dashboardData.widget}
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