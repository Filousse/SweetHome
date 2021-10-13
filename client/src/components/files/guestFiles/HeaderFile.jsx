import React from 'react';
import { Row, Col, Card } from "react-bootstrap"
import { useSelector } from "react-redux"
import { srcExtension } from "../../Utils";


const HeaderFile = (props) => {
    const propsData = { ...props };
    const guestReducer = useSelector(state => state.guestReducer)
    const usersReducer = useSelector(state => state.usersReducer)

    return (
        <>
            <Card.Header>
                <Row>
                    <Col xs lg={1}>
                        <img
                            src="../../uploads/logo/logoCCAS.png"
                            style={{ "height": "75px", "width": "75px" }}
                            alt="logo_asso"
                        />
                    </Col>
                    {guestReducer.map((guest) => {
                        if (guest._id == propsData.guestId) {
                            return (
                                <>
                                    <Col xs lg={1}></Col>
                                    <Col xs lg={6} >
                                        <h1> {propsData.widget} <br></br> {guest.name} {guest.surname}</h1>
                                        {usersReducer.map((user) => {
                                            if (user._id === guest.educRef) {
                                                return (
                                                    <Card.Subtitle key={guest._id} className="mb-2 text-muted">Référent éducatif : {user.name} {user.surname}</Card.Subtitle>
                                                )
                                            }
                                        })}
                                        {usersReducer.map((user) => {
                                            if (user._id === guest.medicalRef) {
                                                return (
                                                    <Card.Subtitle key={guest._id} className="mb-2 text-muted">Référent médical : {user.name} {user.surname}</Card.Subtitle>
                                                )
                                            }
                                        })}
                                    </Col>
                                    <Col xs lg={1}></Col><Col xs lg={1}></Col>
                                    <Col xs lg={2}>
                                        <img
                                            src={srcExtension(guest.picture)}
                                            style={{ "height": "120px", "width": "120px" }}
                                            alt="update_filez"
                                        />
                                    </Col>
                                </>
                            )
                        }
                    })}
                </Row>
            </Card.Header>
        </>
    );
};

export default HeaderFile;
