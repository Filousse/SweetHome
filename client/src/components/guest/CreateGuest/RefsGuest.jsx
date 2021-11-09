import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEducRef, updateMedicalRef, getGuests } from "../../../actions/guest.actions";
import { Link, useHistory } from "react-router-dom";
import { Card, Form, Row, Button, Container, Alert } from 'react-bootstrap';
import { isEmpty } from "../../Utils";

const RefsGuest = () => {
    const guestReducer = useSelector((state) => state.guestReducer);
    const usersReducer = useSelector((state) => state.usersReducer);
    const userReducer = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);
    const [educRef, setEducRef] = useState("");
    const [medicalRef, setMedicalRef] = useState("");
    const [errorEduc, setErrorEduc] = useState(false);
    const [errorMedical, setErrorMedical] = useState(false);

    useEffect(() => {
        !isEmpty(guestReducer[guestReducer.length - 1]) && setLoading(false);
    }, [guestReducer]);

    const handelEducRef = () => {
        setLoading(true);
        dispatch(updateEducRef(guestReducer[guestReducer.length - 1]._id, educRef));
        dispatch(getGuests());
        setLoading(false)
    }

    const handelMedicalRef = () => {
        setLoading(true);
        dispatch(updateMedicalRef(guestReducer[guestReducer.length - 1]._id, medicalRef));
        dispatch(getGuests());
        setLoading(false)
    }

    const handelNext = () => {
        if (educRef == "") {
            setErrorEduc(true)
        } if (medicalRef == "") {
            setErrorMedical(true)
        }
        if (!medicalRef == "" && !educRef == "") {
            history.push("/validation-guest")
        }
    }
    return (
        <>
            <Container className="justify-content-center p-4" style={{ "backgroundColor": "rgb(256,236,188)" }} >
                <Row className="justify-content-center mt-4">
                    <img src="./assets/img/yellowCat.png" style={{ "maxWidth": 280 }} />
                </Row>
                <Row className="justify-content-center">
                    <Card style={{ maxWidth: "470px" }}>
                        <Card.Header className="justify-content-center">
                            <h2 className="text-center">Références :</h2>
                        </Card.Header>
                        <Card.Body className="card-body" >
                            <Row className="justify-content-center m-4" >
                                <h5>Référent éducatif :</h5>
                                <Form.Control
                                    as="select"
                                    custom
                                    onChange={(e) => { setEducRef(e.target.value) }}
                                    required
                                >
                                    <option >selectionner</option>
                                    {usersReducer.map((user) => {
                                        if (user.team === "Éducative" && user.adminName === userReducer.name) {
                                            return (
                                                <option key={user._id} value={user._id}>{user.surname} {user.name}</option>
                                            )
                                        }
                                    })}
                                </Form.Control>
                                <Button onClick={handelEducRef} className="w-100 mt-2">
                                    {isLoading ? "Envoi..." : "Valider"}
                                </Button>
                                {usersReducer.map((user) => {
                                    if (user._id === guestReducer[guestReducer.length - 1].educRef) {
                                        return (<option className=" mt-2" key={user._id}>Reférent actuel : {user.surname} {user.name}</option>)
                                    }
                                })
                                }
                                {errorEduc &&
                                    <Alert className="m-4" variant="danger">Veuillez selectionner votre référent éducatif</Alert>
                                }
                            </Row >
                            <Row className="justify-content-center m-4 pt-4" >
                                <h5>Référent Médical</h5>
                                <Form.Control
                                    as="select"
                                    custom
                                    onChange={(e) => { setMedicalRef(e.target.value) }}
                                    required
                                >
                                    <option >selectionner</option>
                                    {usersReducer.map((user) => {
                                        if (user.team === "Médical" && user.adminName === userReducer.name) {
                                            return (
                                                <option key={user._id} value={user._id}>{user.surname} {user.name}</option>
                                            )
                                        }
                                    })}
                                </Form.Control>
                                <Button onClick={handelMedicalRef} className="w-100 mt-2">
                                    {isLoading ? "Envoi..." : "Valider"}
                                </Button>
                                {usersReducer.map((user) => {
                                    if (user._id === guestReducer[guestReducer.length - 1].medicalRef) {
                                        return (<option className=" mt-2" key={user._id}>Reférent actuel : {user.surname} {user.name}</option>)
                                    }
                                })
                                }
                                {errorMedical &&
                                    <Alert className="m-4" variant="danger">Veuillez selectionner votre référent médical</Alert>
                                }
                            </Row >
                        </Card.Body>
                        <Card.Footer>
                            <Row className="justify-content-center m-2">
                                <Link onClick={handelNext}>Suivant</Link>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Row>
            </Container>
        </>
    );
};

export default RefsGuest;