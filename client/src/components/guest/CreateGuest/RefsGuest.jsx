import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Form, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { updateEducRef, updateMedicalRef } from "../../../actions/guest.actions";
import { isEmpty } from "../../Utils";


const RefsGuest = () => {
    const guestsData = useSelector((state) => state.guestReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [educRef, setEducRef] = useState("");
    const [medicalRef, setMedicalRef] = useState("");

    useEffect(() => {
        !isEmpty(guestsData[guestsData.length - 1]) && setLoading(false);
    }, [guestsData]);

    const handelEducRef = async () => {
        await dispatch(updateEducRef(guestsData[guestsData.length - 1]._id, educRef));
        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL}api/guest/${guestsData[guestsData.length - 1]._id}`)
        .then((res)=> {
            console.log(res);
        });
        setLoading(false);

    }

    const handelMedicalRef = async () => {
        await dispatch(updateMedicalRef(guestsData[guestsData.length - 1]._id, medicalRef));
        setLoading(true);
    }
    return (
        <>
            <Card className="w-75" style={{ "maxWidth": "300px", "margin": "5px" }}>
                <Card.Body className="card-body" >
                    <Row className="justify-content-center m-4" >
                        <h5>Référent éducatif :</h5>
                        <Form.Control
                            as="select"
                            custom
                            onChange={(e) => { setEducRef(e.target.value) }}
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
                            {isLoading ? "Valider" : "Envoyer"}
                        </Button>
                        { usersData.map((user) => {
                                if (user._id === guestsData[guestsData.length - 1].educRef) {
                                    return ( <option className=" mt-2" key={user._id}>Reférent actuel : {user.surname} {user.name}</option> )
                                }
                            })
                        }
                    </Row >
                    <Row className="justify-content-center m-4 pt-4" >
                        <h5>Référent Médical</h5>
                        <Form.Control
                            as="select"
                            custom
                            onChange={(e) => { setMedicalRef(e.target.value) }}
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
                            {isLoading ? "Valider" : "Envoyer"}
                        </Button>
                        { usersData.map((user) => {
                                if (user._id === guestsData[guestsData.length - 1].medicalRef) {
                                    return ( <option className=" mt-2" key={user._id}>Reférent actuel : {user.surname} {user.name}</option> )
                                }
                            })
                        }
                    </Row >
                </Card.Body>
            </Card>
        </>
    );
};

export default RefsGuest;