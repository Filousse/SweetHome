import React, { useState } from 'react';
import { Modal, Button, Form, Row } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { dateParser } from "../Utils"

const Timer = () => {
    const str = dateParser("2021-06-02");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const userReducer = useSelector(state => state.userReducer)
    const guestReducer = useSelector(state => state.guestReducer)

    return (
        <>
            <img onClick={handleShow} src="./assets/icon/btn_Timer.png" style={{ "height": "35px", "width": "35px", "cursor": "pointer" }} alt="launchpad" />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className=" bg-warning" closeButton>
                    <Modal.Title>Dates des mises à jour des dossiers bénéficiares.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="ml-3 m-2">
                    {guestReducer.map((guest) => {
                        if (userReducer.name === guest.adminName) {
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
                                        // onChange={(e) => { setDateBirthday(e.target.value) }}
                                        >
                                        </Form.Control>
                                    </td>
                                    <td class="table-warning p-2" >
                                        <Button >Modifier </Button>
                                    </td>
                                </tr>
                            )
                        }
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
    );
};

export default Timer;
