import React, { useState } from 'react';
import { Modal, Button, Row } from "react-bootstrap"
import { useSelector } from 'react-redux'

const Notification = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const userReducer = useSelector(state => state.userReducer)
    const guestReducer = useSelector(state => state.guestReducer)

    return (
        <>
            <img onClick={handleShow} src="./assets/icon/notification.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className=" bg-warning" closeButton>
                    <Modal.Title>Information référence !</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Row className="m-2 ">
                        {guestReducer.map((guest) => {
                            if (guest.educRef === userReducer._id || guest.medicalRef === userReducer._id) {
                                return (
                                    <>
                                        <p className="text-justify">Félicitation! Vous êtes le nouveau référent de {guest.name} {guest.surname} et pouvez mettre à jour l'ensemble de ses fiches. </p>
                                        <Button >Supprimer </Button>
                                    </>
                                )
                            }
                        })}
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Notification;
