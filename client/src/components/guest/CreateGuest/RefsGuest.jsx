import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEducRef, updateMedicalRef, getGuests } from "../../../actions/guest.actions";
import { Link, useHistory } from "react-router-dom";
import { Card, Form, Row, Button, Container, Spinner } from 'react-bootstrap';
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

    useEffect(() => {
        !isEmpty(guestReducer) && setLoading(false);
    }, [guestReducer]);

    const handelEducRef = () => {
        setLoading(true);
        dispatch(updateEducRef(guestReducer[guestReducer.length - 1]._id, educRef));
        setLoading(false)
    }

    const handelMedicalRef = () => {
        setLoading(true);
        dispatch(updateMedicalRef(guestReducer[guestReducer.length - 1]._id, medicalRef));
        setLoading(false)
    }

    const handelNext = () => {
        history.push("/validation-guest")
    }
    return (
        <>
            {isLoading ? (
                    <Row className="justify-content-center" style={{ marginTop: 100, height: 400 }}>
                        <Spinner animation="border" variant="primary" style={{ "top": "100px" }} />
                    </Row>
            ) : (
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
                                    <Form className="m-2" onSubmit={handelEducRef}>
                                        <Form.Label>
                                            Référent éducatif
                                </Form.Label>
                                        <Form.Control
                                            as="select"
                                            onChange={(e) => { setEducRef(e.target.value) }}
                                            required="true"
                                        >
                                            <option >selectionner</option>
                                            {usersReducer && usersReducer.map((user) => {
                                                if (user.team === "Éducative" && user.adminName === userReducer.name ||
                                                    user.team === "Éducative" && user.adminName === "Demo") {
                                                    return (
                                                        <option key={user._id} value={user._id}>{user.surname} {user.name}</option>
                                                    )
                                                }
                                            })}
                                        </Form.Control>
                                        <Button type="submit" className="w-100 mt-2">
                                            Envoyer
                                        </Button>
                                        {usersReducer && usersReducer.map((user) => {
                                            if (user._id === guestReducer[guestReducer.length - 1].educRef) {
                                                return (<option className=" mt-2" key={user._id}>Reférent éducatif : {user.surname} {user.name}</option>)
                                            }else return null
                                        })
                                        }
                                    </Form>
                                    <Form className="m-2" onSubmit={handelMedicalRef}>
                                        <Form.Label>
                                            Référent Médical
                                </Form.Label>
                                        <Form.Control
                                            as="select"
                                            custom
                                            onChange={(e) => { setMedicalRef(e.target.value) }}
                                            required
                                        >
                                            <option >selectionner</option>
                                            {usersReducer && usersReducer.map((user) => {
                                                if (user.team === "Médical" && user.adminName === userReducer.name ||
                                                    user.team === "Médical" && user.adminName === "Demo") {
                                                    return (
                                                        <option key={user._id} value={user._id}>{user.surname} {user.name}</option>
                                                    )
                                                }
                                            })}
                                        </Form.Control>
                                        <Button type="submit" className="w-100 mt-2">
                                            Envoyer
                                </Button>
                                        {usersReducer && usersReducer.map((user) => {
                                            if (user._id === guestReducer[guestReducer.length - 1].medicalRef) {
                                                return (<p className=" mt-2" key={user._id}>Reférent médical : {user.surname} {user.name}</p>)
                                            }
                                        })
                                        }
                                    </Form >
                                </Card.Body>
                                <Card.Footer>
                                    <Row className="justify-content-center m-2">
                                        <Link onClick={handelNext}>Suivant</Link>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Row>
                    </Container>
            )}
        </>
    );
};

export default RefsGuest;