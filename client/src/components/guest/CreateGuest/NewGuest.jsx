import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Card, Form, Row, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { addGuest } from '../../../actions/guest.actions'

const NewGuest = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [dateBirthday, setDateBirthday] = useState("");
    const userData = useSelector((state) => state.userReducer);

    const handleCreateGuest = () => {
        const adminName = userData.name;
        const educRef = "";
        const medicalRef = "";
        dispatch(addGuest(
            name,
            surname,
            dateBirthday,
            adminName,
            educRef,
            medicalRef,
        ));
        history.push('./Picture-guest');
    }

    return (
        <>
            <Container style={{ "backgroundColor": "rgb(256,236,188)", "paddingRight": 15 }} className="justify-content-center p-4" >
                <Row className="justify-content-center ">
                    <img src="./assets/img/yellowCat.png" style={{ "maxWidth": 280 }} />
                </Row>
                <Row className="justify-content-center">
                    <Card className="justify-content-center" >
                        <Card.Header className="justify-content-center">
                            <h2 className="text-center">Nouveau dossier bénéficiare</h2>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleCreateGuest}>
                                <Form.Group>
                                    <Form.Label>
                                        Noms
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        required
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Prénoms
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="surname"
                                        value={surname}
                                        onChange={(e) => { setSurname(e.target.value) }}
                                        required
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Date de naissance :
                                    </Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dateBirthday"
                                        value={dateBirthday}
                                        onChange={(e) => { setDateBirthday(e.target.value) }}
                                        required
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Button className="w-100 mt-3" type="submit" >Créer le dossier bénéficiare</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container >
        </>
    );
};

export default NewGuest;