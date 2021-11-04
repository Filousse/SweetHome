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
                  <Modal.Title>Information!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">Cette version démo ne permets pas cette action.<br></br> Un projet, une idée?<br></br><br></br> Contactez-moi : brasseur.blz@gmail.com</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
        }
        

export default InfoDemo;