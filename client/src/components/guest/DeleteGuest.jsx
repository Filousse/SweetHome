import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { deleteGuest } from "../../actions/guest.actions";

const DeleteGuest = (props) => {
    const guestName = props.DataName;
    const guestSurname = props.DataSurname;
    const guestId = props.DataId;
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        dispatch(deleteGuest(guestId));
        // window.location = "/guest";
        // setShow(false);
    };

    return (
    <>
            <img
                onClick={handleShow}
                src="./assets/icon/delete.png"
                style={{width:"30px", height:"30px", cursor:"pointer"}}
                alt="basket_icon"
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-danger" closeButton>
                    <Modal.Title >Avertissement :</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        Êtes-vous sûr de supprimer le compte de {guestId} {guestName} {guestSurname}!
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Annuler
                        </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Supprimer
                        </Button>
                </Modal.Footer>
            </Modal>
    </>
    )
}

export default DeleteGuest;