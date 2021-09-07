import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions/user.actions";


const Delete = (props) => {
    const userId = props.DataUser_id;
    const userName = props.DataName;
    const userSurname = props.DataSurname;
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        dispatch(deleteUser(userId));
        window.location = "/employee";
        setShow(false);
    };

    return (
    <>
            <img
                onClick={handleShow}
                src="./assets/icon/delete.png"
                className="icon"
                alt="basket_icon"
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-danger" closeButton>
                    <Modal.Title >Avertissement :</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    Êtes-vous sûr de supprimer le compte de {userName} {userSurname}!
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

export default Delete;