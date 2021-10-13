import React, { useState } from 'react';
import { Row, Col, Accordion, Card, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux"

const DayContainer = (props) => {
    const days = { ...props }
    const guestReducer = useSelector(state => state.guestReducer)
    const userReducer = useSelector((state) => state.userReducer);
    const [write, setWrite] = useState(false);
    const [dayNote, setDayNote] = useState([
        {
            guestId: '',
            note: '',
        }
    ])

    const date = new Date()
    var options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
    const todayFr = date.toLocaleDateString("fr-FR", options)
    const stringExtra = "Aujourd'hui : "
    const aujourdhui = stringExtra + todayFr

    const handelWrite = () => {
        setWrite(!write);
    }

    function handleAddNewNote(note, guestId) {
        const updateDayNote = [
            ...dayNote,
            {
                id: dayNote.length + 1,
                guestId: guestId,
                note: note
            }
        ];
        setDayNote(updateDayNote);
    }

    return (
        <Col >
            <Row className="justify-content-center m-3">
                <h3 className="text-center">{days.day}</h3>
            </Row>
            {guestReducer.map((guest) => {
                if (guest.adminName === userReducer.name || guest.adminName === userReducer.adminName) {
                    return (
                        <Accordion defaultActiveKey="">
                            <Card>
                                <Card.Header >
                                    <Row className="justify-content-center" >
                                        <Accordion.Toggle as={Button}
                                            className="justify-content-center w-100"
                                            style={{ "minWidth": 150 }}
                                            variant="link" eventKey="0">
                                            <Col className="text-center">
                                                {guest.name} {guest.surname}
                                            </Col>
                                            <Col>
                                                <img
                                                    alt=""
                                                    src={guest.picture}
                                                    width="50"
                                                    height="50"
                                                    className="d-inline-block align-top  border border-warning rounded-circle mt-2"
                                                />
                                            </Col>
                                        </Accordion.Toggle>
                                    </Row>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        {days.day == aujourdhui &&
                                            <Row className="justify-content-center m-2 mb-4">
                                           
                                                <Button onClick={handelWrite} className="w-100">
                                                    {write ?("Envoyer la note"):("Ecrire une note")}
                                                </Button>           
                                            </Row>
                                        }
                                        {write
                                            ? (
                                                <Form.Control 
                                                as="textarea"  
                                                onChange={(e) => handleAddNewNote(e.target.value, guest._id)} 
                                                placeholder="Editer un text informatif..." 
                                                style={{ height: '408px' }} />
                                            ) : (
                                                <>
                                                    {dayNote &&
                                                        <>
                                                            {dayNote.map((note) => {
                                                                if (note.guestId === guest._id && note.id === dayNote.length ) {
                                                                    return (
                                                                        <>
                                                                            <div key={note.guestId}>
                                                                                <p>{note.note}</p>
                                                                            </div>
                                                                            <img
                                                                                alt=""
                                                                                src={userReducer.photoProfil}
                                                                                width="50" height="50"
                                                                                className="d-inline-block align-top  border border-primary rounded-circle mt-2"
                                                                            />
                                                                            <Row>________________</Row>
                                                                        </>
                                                                    )
                                                                }
                                                            })}

                                                        </>
                                                    }
                                                    <Row>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, incidunt veritatis rerum magnam consequatur minus aliquam, quod, dolore ab recusandae excepturi quaerat porro distinctio magni sit ducimus deserunt laudantium modi.
                                                    </Row>
                                                    <img
                                                        alt=""
                                                        src="./uploads/profil/Gomesin.jpg"
                                                        width="50"
                                                        height="50"
                                                        className="d-inline-block align-top  border border-primary rounded-circle mt-2"
                                                    />
                                                    <Row>________________</Row>
                                                    <Row>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, incidunt veritatis rerum magnam consequatur minus aliquam, quod, dolore ab recusandae excepturi quaerat porro distinctio magni sit ducimus deserunt laudantium modi.
                                                    </Row>
                                                    <img
                                                        alt=""
                                                        src="./uploads/profil/ctibo.jpg"
                                                        width="50"
                                                        height="50"
                                                        className="d-inline-block align-top  border border-primary rounded-circle mt-2"
                                                    />
                                                    <Row>________________</Row>
                                                    <Row>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, incidunt veritatis rerum magnam consequatur minus aliquam, quod, dolore ab recusandae excepturi quaerat porro distinctio magni sit ducimus deserunt laudantium modi.
                                                    </Row>
                                                    <img
                                                        alt=""
                                                        src="./uploads/profil/Pierre.jpg"
                                                        width="50"
                                                        height="50"
                                                        className="d-inline-block align-top  border border-primary rounded-circle mt-2"
                                                    />
                                                    <Row>________________</Row>
                                                </>
                                            )
                                        }
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    )
                }
            }
            )}
        </Col>
    );
};

export default DayContainer;