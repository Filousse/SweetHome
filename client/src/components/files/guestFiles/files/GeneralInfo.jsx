    import React, { useState } from 'react';
    import { Col, Row, Card, Form, Image } from "react-bootstrap"

    const GeneralInfo = (props) => {
        const showUpdate = props.showUpdate;
        
        const [date, setDate] = useState("")
        const [accueil, setAccueil] = useState("")
        const [externat, setExternat] = useState("")
        const [globale, setGlobale] = useState("")
        const [sociales, setSociales] = useState("")
        const [objectifs, setObjectifs] = useState("")
        const [corporel, setCorporel] = useState("")
        const [objectifsC, setObjectifsC] = useState("")
        const [cognitives, setCognitives] = useState("")
        const [objectifsGognitif, setObjectifsGognitif] = useState("")

        return (
            <Card.Body>
                {showUpdate ? (
                    <>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Date de naissance :</Form.Label>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow:"scroll" }}>
                                        {!date ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                                </>) : (<>{date}</>)}
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Rythme d'accueil internat :</Form.Label>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow:"scroll" }}>
                                        {!accueil ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                                </>) : (<>{accueil}</>)}
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Groupe externat :</Form.Label>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow:"scroll" }}>
                                        {!externat ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                                </>) : (<>{externat}</>)}
                                    </Row>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Orientation globale Axe Principal :</Form.Label>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow:"scroll" }}>
                                        {!globale ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                                </>) : (<>{globale}</>)}
                                    </Row>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Compétences sociales :</Form.Label>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow:"scroll" }}>
                                        {!sociales ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                                        </>) : (<>{sociales}</>)}
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Objectifs :</Form.Label>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow:"scroll" }}>
                                        {!objectifs ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                                        </>) : (<>{objectifs}</>)}
                                    </Row>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Dynamique corporel :</Form.Label>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow:"scroll" }}>
                                        {!corporel ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                                        </>) : (<>{corporel}</>)}
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Objectifs :</Form.Label>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow:"scroll" }}>
                                        {!objectifsC ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                                        </>) : (<>{objectifsC}</>)}
                                    </Row>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Potentietialités cognitives :</Form.Label>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow:"scroll" }}>
                                        {!cognitives ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                                        </>) : (<>{cognitives}</>)}
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Objectifs :</Form.Label>
                                    </Row>
                                    <Row className="border border-dark p-3 ml-1 mr-1" style={{ height: '107px', overflow:"scroll" }}>
                                        {!objectifsGognitif ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum. 
                                        </>) : (<>{objectifsGognitif}</>)}
                                    </Row>
                                </Form.Group>
                            </Row>
                        </Form>

                    </>
                ) : (
                    <>

                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Date de naissance :</Form.Label>
                                    </Row>
                                    <Form.Control  value={date} type="date" onChange={(e) => { setDate(e.target.value) }} placeholder="Editer un text informatif..." style={{ height: '107px', overflow:"scroll" }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Rythme d'accueil internat :</Form.Label>
                                    </Row>
                                    <Form.Control value={accueil} onChange={(e) => { setAccueil(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '107px', overflow:"scroll" }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Groupe externat :</Form.Label>
                                    </Row>
                                    <Form.Control value={externat} onChange={(e) => { setExternat(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '107px', overflow:"scroll" }} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Orientation globale Axe Principal :</Form.Label>
                                    </Row>
                                    <Form.Control value={globale} onChange={(e) => { setGlobale(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '107px', overflow:"scroll" }} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Compétences sociales :</Form.Label>
                                    </Row>
                                    <Form.Control value={sociales} onChange={(e) => { setSociales(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '107px', overflow:"scroll" }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Objectifs :</Form.Label>
                                    </Row>
                                    <Form.Control value={objectifs} onChange={(e) => { setObjectifs(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '107px', overflow:"scroll" }} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Dynamique corporel :</Form.Label>
                                    </Row>
                                    <Form.Control value={corporel} onChange={(e) => { setCorporel(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '107px', overflow:"scroll" }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Objectifs :</Form.Label>
                                    </Row>
                                    <Form.Control value={objectifsC} onChange={(e) => { setObjectifsC(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '107px', overflow:"scroll" }} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Potentietialités cognitives :</Form.Label>
                                    </Row>
                                    <Form.Control value={cognitives} onChange={(e) => { setCognitives(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '107px', overflow:"scroll" }} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Row className="justify-content-around border border-danger m-1 mb-3">
                                        <Form.Label className="mt-2">Objectifs :</Form.Label>
                                    </Row>
                                    <Form.Control value={objectifsGognitif} onChange={(e) => { setObjectifsGognitif(e.target.value) }} as="textarea" placeholder="Editer un text informatif..." style={{ height: '107px', overflow:"scroll" }} />
                                </Form.Group>
                            </Row>
                        </Form>
                        </>
                    )}
            </Card.Body>
        );
    };

export default GeneralInfo;