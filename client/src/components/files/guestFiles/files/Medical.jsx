import React, { useState } from 'react';
import { Col, Row, Card, Form, Image } from "react-bootstrap"

const Medical = (props) => {
    const showUpdate = props.showUpdate;
    const [medicaux, setMedicaux] = useState("")
    const [mentions, setMentions] = useState("")
    const [chirugicaux, setChirugicaux] = useState("")
    const [familiaux, setFamiliaux] = useState("")
    const [observations, setObservations] = useState("")

    return (
        <Card.Body>
            {showUpdate ? (
                <>
                    <Form>
                        <Row>
                                <Row className="justify-content-around w-100 border border-danger m-4">
                                    <h3 className="mt-2">Antécédent :</h3>
                                </Row>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger m-1 mb-3">
                                    <h5 className="mt-2">Médicaux :</h5>
                                </Row>
                                <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '200px' }}>
                                    {!medicaux ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibusdolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repe inventore dolor nostrum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                                    </>) : (<>{medicaux}</>)}
                                </Row>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger m-1 mb-3">
                                    <h5 className="mt-2">Mentions particulières (allergies, affections chroniques) :</h5>
                                </Row>
                                <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '200px' }}>
                                    {!mentions ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrumdolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repe. 
                                    </>) : (<>{mentions}</>)}
                                </Row>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger m-1 mb-3">
                                    <h5 className="mt-2">Chirugicaux :</h5>
                                </Row>
                                <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '200px' }}>
                                    {!chirugicaux ? (<>Lorem dolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repeipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                                    </>) : (<>{chirugicaux}</>)}
                                </Row>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger m-1 mb-3">
                                    <h5 className="mt-2">Familiaux :</h5>
                                </Row>
                                <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '200px' }}>
                                    {!familiaux ? (<>Lorem ipsum dolor sit, ametdolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repe consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                                    </>) : (<>{familiaux}</>)}
                                </Row>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger m-1 mb-3">
                                    <h3 className="mt-2">Observations traitements :</h3>
                                </Row>
                                <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '400px' }}>
                                    {!observations ? (<>Lorem ipsum dolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repedolorsectetur adipisicing elit. Culpa repellendus laudantium autem expedita sunt. Minus velit perferendis dolorum molestiae aperiam deserunt recusandae quod, vero hic et suscipit. Sint, perferendis minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa repellendus laudantium autem expedita sunt. Minus velit perferendis dolorum molestiae aperiam deserunt recusandae quod, vero hic et suscipit. Sint, perferendis minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa repellendus laudantium autem expedita sunt. Minus velit perferendis dolorum molestiae aperiam deserunt recusandae quod, vero hic et suscipit. Sint, perferendis minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa repellendus laudantium autem expedita sunt. Minus velit perferendis dolorum molestiae aperiam deserunt recusandae quod, vero hic et suscipit. Sint, perferendis minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa repellendus laudantium autem expedita sunt. Minus velit perferendis dolorum molestiae aperiam deserunt recusandae quod, vero hic et suscipit. Sint, perferendis minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                            </>) : (<>{observations}</>)}
                                </Row>
                            </Form.Group>
                        </Row>
                    </Form>
                </>
            ) : (
                <>
                                        <Form>
                        <Row>
                                <Row className="justify-content-around w-100 border border-danger m-4">
                                    <h3 className="mt-2">Antécédent :</h3>
                                </Row>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger m-1 mb-3">
                                    <h5 className="mt-2">Médicaux :</h5>
                                </Row>
                                <Form.Control value={medicaux} onChange={(e) => { setMedicaux(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '200px' }} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger m-1 mb-3">
                                    <h5 className="mt-2">Mentions particulières (allergies, affections chroniques) :</h5>
                                </Row>
                                <Form.Control value={mentions} onChange={(e) => { setMentions(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '200px' }} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger m-1 mb-3">
                                    <h5 className="mt-2">Chirugicaux :</h5>
                                </Row>
                                <Form.Control value={chirugicaux} onChange={(e) => { setChirugicaux(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '200px' }} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger m-1 mb-3">
                                    <h5 className="mt-2">Familiaux :</h5>
                                </Row>
                                <Form.Control value={familiaux} onChange={(e) => { setFamiliaux(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '200px' }} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Row className="justify-content-around border border-danger m-1 mb-3">
                                    <h3 className="mt-2">Observations traitements :</h3>
                                </Row>
                                <Form.Control value={observations} onChange={(e) => { setObservations(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '400px' }} />
                            </Form.Group>
                        </Row>
                    </Form>   
                </>
                )}
        </Card.Body>
    );
};

export default Medical;