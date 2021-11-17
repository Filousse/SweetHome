import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux";
// import { deleteUser } from "../../actions/user.actions";
import { useHistory } from "react-router-dom";
import InfoDemo from "../files/guestFiles/InfoDemo";


const DeleteUser = (props) => {
    const userData = { ...props }
    const dispatch = useDispatch();
    const history = useHistory();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [demoUser, setDemoUser] = useState(false);

// Ready for reel Version
    // const handleDelete = () => {
    //     if (userData.surname === "Thomas" ||
    //         userData.surname === "Yasmine") {
    //         setDemoUser(true)
    //     }else{
    //         dispatch(deleteUser(userData.id));
    //         handleClose(false);
    //         history.push("/employee");
    //     }
    // };

    return (
        <>
            <img
                onClick={handleShow}
                src="./assets/icon/btn_Delete.png"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                alt="basket_icon"
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-danger" closeButton>
                    <Modal.Title >Avertissement :</Modal.Title>
                </Modal.Header>
                {demoUser ? (
                    <Modal.Body >
                        <p classname="text-center">
                            Cette employé est un employé demo est cette action est interdite. Veuillez supprimé un autre employé!
                        </p>
                    </Modal.Body>
                ) : (
                        <Modal.Body >
                            Êtes-vous sûr de supprimer le compte de {userData.name} {userData.surname}?
                        </Modal.Body>
                    )}
                <Modal.Footer>
                    <InfoDemo deleteEmploye={true} />
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Annuler
                    </Button>
                    {!demoUser &&
                    <Button variant="primary" onClick={handleDelete}>
                        Supprimer
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteUser;