import React from 'react';
import { Container, Modal, Button, Row } from 'react-bootstrap'
import FilesGuest from "./FilesGuest"
import { useSelector } from "react-redux"


function ModalRead(props) {
    const guestReducer = useSelector((state) => state.guestReducer)

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                {guestReducer.map((guest) => {
                    if (guest._id === props.idGuest) {
                        return (
                            <Row className="justify-content-center">
                                <Row>
                                    <Modal.Title id="contained-modal-title-center">
                                        <h1>Profil de {guest.name} {guest.surname} :</h1>
                                    </Modal.Title>
                                </Row>
                                
                                <Row className="mt-4">
                                    <img src={guest.picture} style={{ "width": "300px", "height": "300px", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-picture" />
                                </Row>
                            </Row>
                        )
                    }
                })}
            </Modal.Header>
            <Modal.Body >
                <FilesGuest idGuest={props.idGuest}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalRead;