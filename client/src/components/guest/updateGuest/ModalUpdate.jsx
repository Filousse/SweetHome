import React, { useEffect, useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap'
import PictureGuest from "../updateGuest/PictureGuest"
import FilesGuest from "./FilesGuest"
import { useSelector } from "react-redux"
import { isEmpty } from "../../Utils"


function UpdateGuest(props) {
    const guestReducer = useSelector((state) => state.guestReducer);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        !isEmpty(guestReducer) && setLoading(false);
    }, [guestReducer]);

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {guestReducer && guestReducer.map((guest)=> {
                        if(guest._id === props.idGuest){
                            return(
                            <h1>Profil de {guest.name} {guest.surname} :</h1>
                            )
                        }
                    })}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <PictureGuest withoutFooter={true} guestId={props.idGuest} />
                    {guestReducer && guestReducer.map((guest)=> {
                        if(guest._id === props.idGuest){
                            return(
                                <>
                                <FilesGuest 
                                    idGuest={props.idGuest} 
                                    educRef={guest.educRef} 
                                    medicalRef={guest.medicalRef}
                                />
                                </>
                                )
                        }
                    })}
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateGuest;