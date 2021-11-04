import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions/user.actions";


const DeleteUser = (props) => {
    const userData = {...props}
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        dispatch(deleteUser(userData.id));
        window.location = "/employee";
        handleClose();
    };

    return (
    <>
            <img
                onClick={handleShow}
                src="./assets/icon/btn_Delete.png"
                style={{width:"30px", height:"30px", cursor:"pointer"}}
                alt="basket_icon"
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-danger" closeButton>
                    <Modal.Title >Avertissement :</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    Êtes-vous sûr de supprimer le compte de {userData.name} {userData.surname}!
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

export default DeleteUser;