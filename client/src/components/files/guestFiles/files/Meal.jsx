import React, { useState } from 'react';
import { Col, Row, Form, Card, Image } from "react-bootstrap";
import InfoDemo from "../InfoDemo"

const Meal = (props) => {
    const showUpdate = props.showUpdate;
    const [particularite, setParticularite] = useState()

    return (
        <Row className="justify-content-center">
            <Row className="m-3 ml-3 mr-3 w-100">
                <Form.Group as={Col} controlId="formGridPassword">
                    <Row className="justify-content-around border border-danger m-1 mb-3">
                        <h5 className="mt-2 text-center"><strong>Particularit√© pour l'aide au repas :</strong></h5>
                    </Row>
                    {showUpdate ? (
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow: "scroll" }}>
                            {!particularite ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>) : (<>{particularite}</>)}
                        </Row>

                    ) : (
                        <Form.Control as="textarea" onChange={(e) => setParticularite(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    )}
                </Form.Group>
            </Row>
            <Card.Body className="card-body" >
                <Row className="justify-content-center" >
                    {!showUpdate &&
                        <Row className="justify-content-center mb-4 p-4 border border-dark rounded">
                            <Form.Control
                                className="w-50"
                                type="file"
                                id="file"
                                name="file"
                                accept=".jpg, .jpeg, .png"
                                style={{ "marginBottom": "10px" }}
                            />
                            <InfoDemo />
                        </Row>
                    }
                    <Image fluid src="../../assets/icon/icon_MeatTest.png" style={{ "width": "1000px", "height": "600px", "marginBottom": "10px", "borderRadius": "20px" }} alt="user-picture" />
                </Row>
            </Card.Body>
        </Row>
    );
};

export default Meal;