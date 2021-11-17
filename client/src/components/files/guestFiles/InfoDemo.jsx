import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const InfoDemo = (props) => {
  const propsData = { ...props };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {propsData.timer &&
        <Button variant="primary" onClick={handleShow}>
          Valider
        </Button>
      }
      {propsData.newGuest &&
        <Button className="w-100" variant="primary" onClick={handleShow}>
          Valider
        </Button>
      }
      {propsData.refsGuest &&
        <Button className="m-2" variant="primary" onClick={handleShow}>
          Valider
        </Button>
      }
      {propsData.pictureGuest &&
        <Button className="w-50" variant="primary" onClick={handleShow}>
          Valider
        </Button>
      }
      {propsData.deleteGuest &&
        <Button variant="primary" onClick={handleShow}>
          Valider
        </Button>
      }
      {propsData.createEmploye &&
        <Link style={{ cursor: "pointer", borderRadius: '25px' }} className="p-1 bg-light" >
          <img
            onClick={handleShow}
            src="./assets/icon/btn_AddUser.png"
            style={{ "height": "45px", "width": "45px" }}
            alt="btn_AddUser"
          />
        </Link>
      }
      {propsData.addRefEmploye &&
        <img
          onClick={handleShow}
          src="./assets/icon/btn_AddUser.png"
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
          alt="btn_AddRefs"
        />
      }
      {propsData.deleteRefEmploye &&
        <img
          onClick={handleShow}
          src="./assets/icon/btn_Delete.png"
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
          alt="btn_Delete"
        />
      }
      {propsData.deleteEmploye &&
        <Button  variant="primary" onClick={handleShow}>
         Valider
        </Button>
      }
      {propsData.photoUser &&
        <Button className="w-100" variant="primary" onClick={handleShow}>
          Valider
        </Button>
      }
      {propsData.bioUser &&
        <Button className="w-100" variant="primary" onClick={handleShow}>
          Valider
        </Button>
      }
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