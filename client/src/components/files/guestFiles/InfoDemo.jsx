import React, { useState } from 'react';
import {Modal, Button } from "react-bootstrap"

const InfoDemo = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
            <>
              <Button variant="primary" onClick={handleShow}>
                Valider
              </Button>
        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-warning" closeButton>
                  <Modal.Title className="text-light" >Information!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">Cette version démo ne permets pas cette action.
                  <br></br><strong>Un projet, une idée?</strong>
                  <br></br><br></br><strong> Contactez-moi : brasseur.blz@gmail.com</strong>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    fermer
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
        }
        

export default InfoDemo;