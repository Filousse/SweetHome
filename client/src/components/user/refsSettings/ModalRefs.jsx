import React, { useState, useEffect } from 'react';
import { Row, Col, Modal, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import ListRef from "./ListRef"
import ListNoRef from "./ListNoRef"
import { isEmpty } from "../../Utils"

function MydModalWithGrid(props) {
    const guestReducer = useSelector((state) => state.guestReducer);
    const usersReducer = useSelector((state) => state.usersReducer);
    const user_id = props.user_id;
    const user_team = props.user_team;
    const user_adminName = props.user_adminName;
    const [toggleModal, setToggleModal] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        !isEmpty(guestReducer) && !isEmpty(usersReducer) && setLoading(false);
    }, [guestReducer, usersReducer]);

    const handleToggle = () => {
        setToggleModal(!toggleModal);
    }

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-center">
            <Modal.Header closeButton>
                {usersReducer && usersReducer.map((user) => {
                    if (user._id === user_id) {
                        return (
                            <Modal.Title id="contained-modal-title-vcenter">
                                Références de {user.name} {user.surname} :
                            </Modal.Title>
                        )
                    }
                })}
            </Modal.Header>
            <Modal.Body className="show-grid">
                {toggleModal
                    ? (
                        <>
                            {guestReducer && guestReducer.map((guest) => {
                                if (guest.educRef === user_id) {
                                    return (
                                        <ListRef
                                            key={guest._id}
                                            user_team={user_team}
                                            guest_id={guest._id}
                                            guest_name={guest.name}
                                            guest_surname={guest.surname}
                                            guest_picture={guest.picture}
                                        />
                                    )
                                }
                                if (guest.medicalRef === user_id) {
                                    return (
                                        <ListRef
                                            user_team={user_team}
                                            guest_id={guest._id}
                                            guest_name={guest.name}
                                            guest_surname={guest.surname}
                                            guest_picture={guest.picture}
                                        />
                                    )
                                }
                            })}
                        </>
                    ) : (
                        <>
                            {user_team === "Éducative" &&
                                <>
                                    {guestReducer && guestReducer.map((guest) => {
                                        if (guest.educRef === "") {
                                            return (
                                                <>
                                                    <ListNoRef
                                                        user_id={user_id}
                                                        guest_id={guest._id}
                                                        guest_name={guest.name}
                                                        guest_surname={guest.surname}
                                                        guest_picture={guest.picture}
                                                        guest_adminName={guest.adminName}
                                                        user_team={user_team}
                                                        user_adminName={user_adminName}
                                                    />
                                                </>
                                            )
                                        }
                                    })}
                                </>
                            }
                            {user_team === "Médical" &&
                                <>
                                    {guestReducer && guestReducer.map((guest) => {

                                        if (guest.medicalRef === "") {
                                            return (
                                                <>
                                                    <ListNoRef
                                                        user_id={user_id}
                                                        guest_id={guest._id}
                                                        guest_name={guest.name}
                                                        guest_surname={guest.surname}
                                                        guest_picture={guest.picture}
                                                        guest_adminName={guest.adminName}
                                                        user_team={user_team}
                                                        user_adminName={user_adminName}
                                                    />
                                                </>
                                            )
                                        }
                                    })
                                    }
                                </>
                            }
                        </>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Col>
                        {toggleModal
                            ? (
                                <>
                                    <Button variant="info" onClick={handleToggle}>
                                        Ajouter une référence
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button variant="warning" onClick={handleToggle}>
                                        retour à la liste des références
                                    </Button>
                                </>
                            )
                        }
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

const ModalRefs = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const user_id = props.user_id;
    const user_team = props.user_team;
    const user_adminName = props.user_adminName;

    return (
        <>
            <img
                onClick={() => setModalShow(true)}
                src="./assets/icon/btn_References.png"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                alt="references"
            />
            <MydModalWithGrid
                show={modalShow}
                onHide={() => setModalShow(false)}
                user_id={user_id}
                user_team={user_team}
                user_adminName={user_adminName}
            />
        </>
    );
}

export default ModalRefs;