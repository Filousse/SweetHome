import { useState } from "react";
import { Card, Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';
import { useSelector } from "react-redux"

const ModalTchat = (props) => {
  const userReducer = useSelector(state => state.userReducer);
  const data = { ...props };
  const [show, setShow] = useState(false);
  const [write, setWrite] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openWrite = () => setWrite(!write);
  const [messagesArray, setMessagesArray] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const today = new Date()
  var options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
  const aujourdhui = today.toLocaleDateString("fr-FR", options)
  const dayRef = new Date(today)
  dayRef.setDate(dayRef.getDate() - 2)
  const deuxJoursAvant = dayRef.toLocaleDateString("fr-FR", options)
  dayRef.setDate(dayRef.getDate() - 4)
  const quatreJoursAvant = dayRef.toLocaleDateString("fr-FR", options)

  const submitMessage = async () => {
    if (!messagesArray.find((item) => item.message == newMessage)) {
      setMessagesArray([...messagesArray, { id: messagesArray.length, message: newMessage }])
      setWrite(false);
    } else {
      alert("Vous n'avez pas écrie de message!")
    }
  };

  return (
    <>
      <Card className="widget" style={data.style} onClick={handleShow} >
        <Image className="image" src={data.src} alt="flag" />
        <div className="text-danger">{data.checkRefEduc} {data.checkRefMedical}</div>
        <div className="data-container" >
          <ul style={data.style} >
            <p>{data.name} {data.surname}</p>
          </ul>
        </div>
      </Card>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <img
            src={data.src}
            width="70"
            height="70"
            style={{ 'borderRadius': '33px' }}
            className="d-inline-block align-top mr-3" />
          <h1 className="m-2">{data.name} {data.surname}</h1>
        </Modal.Header>
        {!write
          ? (
            <Modal.Body className="p-4" style={{ background: '#FDF2E9', maxHeight: 'calc(100vh - 210px)', overflowY: 'scroll' }}>
            {aujourdhui}
              {
                messagesArray.reverse().map((item) => {
                  return (
                    <Row className="justify-content-center mr-4  mt-4">
                      <Col xs={9}>
                        <Modal.Body key={item.id} className="border border-primary" style={{ "borderRadius": 30, "backgroundColor": "#D1E5FF" }} >
                          {item.message}
                        </Modal.Body>
                      </Col>
                      <Col xs={1}>
                        <img src={userReducer.photoProfil} width="40" height="40" style={{ 'borderRadius': '20px' }} />
                      </Col>
                    </Row>
                  )
                })
              }
              <Row className="justify-content-center">
                <Col className="mt-4 ml-3" xs={1}>
                  <img src={data.src} width="40" height="40" style={{ borderRadius: '20px' }} />
                </Col>
                <Col xs={10} >
                  <Modal.Body className="border border-success m-4" style={{ "borderRadius": 30, "backgroundColor": "#E4FADE" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus corrupti nisi dolores nobis omnis expedita, provident doloremque accusantium impedit labore, ullam possimus, voluptates et ratione maiores id doloribus consequatur?</Modal.Body>
                </Col>
              </Row>



              {deuxJoursAvant}
              <Row className="justify-content-center mr-4 mt-3">
                <Col xs={9}>
                  <Modal.Body className="border border-primary" style={{ "borderRadius": 30, "backgroundColor": "#D1E5FF" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. provident doloremque accusantium impedit labore, ullam possimus, voluptates et ratione maiores id doloribus consequatur?</Modal.Body>
                </Col>
                <Col xs={1}>
                  <img src={userReducer.photoProfil} width="40" height="40" style={{ 'borderRadius': '20px' }} />
                </Col>
              </Row>
              
              <Row className="justify-content-center">
                <Col className="mt-4 ml-3" xs={1}>
                  <img src={data.src} width="40" height="40" style={{ 'borderRadius': '20px' }} />
                </Col>
                <Col xs={10} >
                  <Modal.Body className="border border-success m-4" style={{ "borderRadius": 30, "backgroundColor": "#E4FADE" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus corrupti nisi dolores nobis omnis expedita, provident doloremque accusantium impedit labore, ullam possimus, voluptates et ratione maiores id doloribus consequatur?</Modal.Body>
                </Col>
              </Row>
              <Row className="justify-content-center mr-4 m-4">
                <Col xs={9}>
                  <Modal.Body className="border border-primary" style={{ "borderRadius": 30, "backgroundColor": "#D1E5FF" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. provident doloremque accusantium impedit labore, ullam possimus, voluptates et ratione maiores id doloribus consequatur?</Modal.Body>
                </Col>
                <Col xs={1}>
                  <img src={userReducer.photoProfil} width="40" height="40" style={{ 'borderRadius': '20px' }} />
                </Col>
              </Row>
              {quatreJoursAvant}
              <Row className="justify-content-center">
                <Col className="mt-4 ml-3" xs={1}>
                  <img src={data.src} width="40" height="40" style={{ 'borderRadius': '20px' }} />
                </Col>
                <Col xs={10} >
                  <Modal.Body className="border border-success m-4" style={{ "borderRadius": 30, "backgroundColor": "#E4FADE" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus corrupti nisi dolores nobis omnis expedita, provident doloremque accusantium impedit labore, ullam possimus, voluptates et ratione maiores id doloribus consequatur?</Modal.Body>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col className="mt-4 ml-3" xs={1}>
                  <img src={data.src} width="40" height="40" style={{ 'borderRadius': '20px' }} />
                </Col>
                <Col xs={10} >
                  <Modal.Body className="border border-success m-4" style={{ "borderRadius": 30, "backgroundColor": "#E4FADE" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus corrupti nisi dolores nobis omnis expedita, provident doloremque accusantium impedit labore, ullam possimus, voluptates et ratione maiores id doloribus consequatur?</Modal.Body>
                </Col>
              </Row>
              <Row className="justify-content-center mr-4">
                <Col xs={9}>
                  <Modal.Body className="border border-primary" style={{ "borderRadius": 30, "backgroundColor": "#D1E5FF" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. provident doloremque accusantium impedit labore, ullam possimus, voluptates et ratione maiores id doloribus consequatur?</Modal.Body>
                </Col>
                <Col xs={1}>
                  <img src={userReducer.photoProfil} width="40" height="40" style={{ 'borderRadius': '20px' }} />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col className="mt-4 ml-3" xs={1}>
                  <img src={data.src} width="40" height="40" style={{ 'borderRadius': '20px' }} />
                </Col>
                <Col xs={10} >
                  <Modal.Body className="border border-success m-4" style={{ "borderRadius": 30, "backgroundColor": "#E4FADE" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus corrupti nisi dolores nobis omnis expedita, provident doloremque accusantium impedit labore, ullam possimus, voluptates et ratione maiores id doloribus consequatur?</Modal.Body>
                </Col>
              </Row>
            </Modal.Body>

          ) : (
            <>
              <Row className="justify-content-center m-2">
                <Form.Control
                  as="textarea"
                  rows={10}
                  className="w-100"
                  type="text"
                  placeholder=" Editez votre message..."
                  onChange={(event) => setNewMessage(event.target.value)}
                />
              </Row>
              <Row className="justify-content-center">
                <Button className="w-50 m-3" onClick={() => submitMessage()}>Envoyer</Button>
              </Row>
            </>
          )}
        <Modal.Footer>
          {!write
            ? (
              <img
                className="m-2"
                onClick={openWrite}
                src="./assets/icon/btn_Write.png"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                alt="btn_Write"
              />
            ) : (
              <img
                className="m-2"
                onClick={openWrite}
                src="./assets/icon/btn_Visit.png"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                alt="btn_Visit"
              />
            )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTchat;


