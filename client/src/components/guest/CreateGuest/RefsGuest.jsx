import React, { useState, useEffect } from 'react';
import { Card, Form, Row, Button, Container, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom"
import { updateEducRef, updateMedicalRef, getGuests } from "../../../actions/guest.actions";
import { isEmpty } from "../../Utils";


const RefsGuest = () => {
    const guestsData = useSelector((state) => state.guestReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);
    const [educRef, setEducRef] = useState("");
    const [medicalRef, setMedicalRef] = useState("");
    const [errorEduc, setErrorEduc] = useState(false);
    const [errorMedical, setErrorMedical] = useState(false);

    useEffect(() => {
        !isEmpty(guestsData[guestsData.length - 1]) && setLoading(false);
    }, [guestsData]);

    const handelEducRef = () => {
        setLoading(true);
        dispatch(updateEducRef(guestsData[guestsData.length - 1]._id, educRef));
        dispatch(getGuests());
        setLoading(false)
    }

    const handelMedicalRef = () => {
        setLoading(true);
        dispatch(updateMedicalRef(guestsData[guestsData.length - 1]._id, medicalRef));
        dispatch(getGuests());
        setLoading(false)
    }

    const handelNext = () => {
        console.log("yep");
        if (educRef == "") {
            setErrorEduc(true)
            console.log("ErrorEduc",errorEduc);
        } if (medicalRef == "") {
            setErrorMedical(true)
        }
        if (!medicalRef == "" && !educRef == "") {
            history.push("/validation-guest")
        }
    }
    return (
        <>
            <Container className="justify-content-center p-4" style={{ maxWidth: "600px" }}>
                <Card>
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
                                {usersData.map((user) => {
                                    if (user.team === "Éducative" && user.adminName === userData.name) {
                                        return (
                                            <option key={user._id} value={user._id}>{user.surname} {user.name}</option>
                                        )
                                    }
                                })}
                            </Form.Control>
                            <Button onClick={handelEducRef} className="w-100 mt-2">
                                {isLoading ? "Envoi..." : "Valider"}
                            </Button>
                            {usersData.map((user) => {
                                if (user._id === guestsData[guestsData.length - 1].educRef) {
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
                                {usersData.map((user) => {
                                    if (user.team === "Médical" && user.adminName === userData.name) {
                                        return (
                                            <option key={user._id} value={user._id}>{user.surname} {user.name}</option>
                                        )
                                    }
                                })}
                            </Form.Control>
                            <Button onClick={handelMedicalRef} className="w-100 mt-2">
                                {isLoading ? "Envoi..." : "Valider"}
                            </Button>
                            {usersData.map((user) => {
                                if (user._id === guestsData[guestsData.length - 1].medicalRef) {
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
            </Container>
        </>
    );
};

export default RefsGuest;