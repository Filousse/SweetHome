import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Spinner, Form, Row } from "react-bootstrap";
import InfoDemo from "../files/guestFiles/InfoDemo";
import { dateParser } from "../Utils";
import { isEmpty } from "../Utils"

const Timer = (props) => {
    const adminOnly = props.admin;
    const str = dateParser("2021-06-02");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const userReducer = useSelector(state => state.userReducer);
    const guestReducer = useSelector(state => state.guestReducer);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!isEmpty(guestReducer)){
            setLoading(false);
        }else{setLoading(true)}
    }, [guestReducer]);

    return (
    <>
       {loading ?
        (
            <Spinner animation="border" variant="primary" />
        ):(
            <>
            <img onClick={handleShow} src="./assets/icon/btn_Timer.png" style={{ "height": "50px", "width": "50px", "cursor": "pointer" }} alt="launchpad" />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className=" bg-warning" closeButton>
                    <Modal.Title className="text-center text-justify text-light">Dates des mises à jour des dossiers bénéficiares.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="ml-3 m-2">
                    <>
                        {!adminOnly &&
                            <>
                                {guestReducer && guestReducer.map((guest) => {
                                    if (userReducer.name === guest.adminName ||
                                        guest.adminName === "Demo") {
                                        return (
                                            <tr key={guest._id}>
                                                <td class="table-warning p-2" >
                                                    <img
                                                        alt=""
                                                        src={guest.picture}
                                                        width="40"
                                                        height="40"
                                                        style={{ 'borderRadius': '5px' }}
                                                        className="d-inline-block align-top"
                                                    />
                                                </td>
                                                <td class="table-warning p-2" >
                                                    {guest.name} {guest.surname}
                                                </td>
                                                <td class="table-warning p-2" >
                                                    <Form.Control
                                                        type="date"
                                                        defaultValue="2021-06-01"
                                                        name="deadLine"
                                                    >
                                                    </Form.Control>
                                                </td>
                                                <td class="table-warning p-2" >
                                                    <InfoDemo timer={true} />
                                                </td>
                                            </tr>
                                        )
                                    }else return null
                                })}
                            </>
                        }
                    </>
                    {guestReducer && guestReducer.map((guest) => {
                        if (userReducer._id == guest.educRef) {
                            return (
                                <Row className="justify-content-center m-1 w-100">
                                    <td class="table-warning p-2 w-25" >
                                        <img
                                            alt="imgGuest"
                                            src={guest.picture}
                                            width="40"
                                            height="40"
                                            style={{ 'borderRadius': '5px' }}
                                        />
                                    </td>
                                    <td class="table-warning p-2 pt-3 w-25" >
                                        {guest.name} {guest.surname}
                                    </td>
                                    <td class="table-warning p-2 pt-3 w-50" >
                                        <strong> {str.substring(0, str.length - 10)}</strong>
                                    </td>
                                </Row>
                            )
                        }
                    })}

                    {guestReducer && guestReducer.map((guest) => {
                        if (userReducer._id == guest.medicalRef) {
                            return (
                                <Row className="justify-content-center m-1 w-100">
                                    <td class="table-warning p-2 w-25" >
                                        <img
                                            alt="imgGuest"
                                            src={guest.picture}
                                            width="40"
                                            height="40"
                                            style={{ 'borderRadius': '5px' }}
                                        />
                                    </td>
                                    <td class="table-warning p-2 pt-3 w-25" >
                                        {guest.name} {guest.surname}
                                    </td>
                                    <td class="table-warning p-2 pt-3 w-50" >
                                        <strong> {str.substring(0, str.length - 10)}</strong>
                                    </td>
                                </Row>
                            )
                        }
                    })}
                </Modal.Body>
            </Modal>
        </>
        )}
    </>
    );
};

export default Timer;
