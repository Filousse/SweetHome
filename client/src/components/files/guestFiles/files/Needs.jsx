import React, { useState } from 'react';
import { Col, Row, Card, Form, Image } from "react-bootstrap"

const Needs = (props) => {
    const showUpdate = props.showUpdate;
    const[ acceuil, setAcceuil ] = useState("")
    const[ communication, setCommunication ] = useState("")
    const[ like, setLike ] = useState("")
    const[ dontLike, setDontLike ] = useState("")
    const[ surveillance, setSurveillance ] = useState("")
    const[ toilette, setToilette ] = useState("")
    const[ protection, setProtection ] = useState("")
    const[ repas, setRepas ] = useState("")
    const[ alimentation, setAlimentation ] = useState("")
    const[ hydratation, setHydratation ] = useState("")
    const[ technique, setTechnique ] = useState("")
    const[ divers, setDivers ] = useState("")


    return (
        <Card.Body>
        {showUpdate ? ( 
        <>
            <Form>
            <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Rythme d'acceuil :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/005-clock.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!acceuil ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{acceuil}</>)}
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Communication :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/006-promotion.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!communication ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{communication}</>)}
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Ce que j'aime :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/007-like.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!like ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{like}</>)}
                        </Row>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Ce que je n'aime pas :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/004-dont-like.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!dontLike ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{dontLike}</>)}
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Surveillance particulière :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/008-danger.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!surveillance ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{surveillance}</>)}
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Toilette / habillage :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/003-shower.png"   style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!toilette ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{toilette}</>)}
                        </Row>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Protection mise aux toilettes :</strong></Form.Label>
                            <Image className="mt-1"  src="../../assets/icon/009-toilet.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!protection ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{protection}</>)}
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Particularité repas :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/002-repas.png"   style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!repas ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{repas}</>)}
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Alimentation spécifique :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/010-salad.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!alimentation ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{alimentation}</>)}
                        </Row>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Hydratation :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/001-drink.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!hydratation ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{hydratation}</>)}
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Equipe technique :</strong></Form.Label>
                            <Image className="mt-1"  src="../../assets/icon/012-wheel-chair.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!technique ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{technique}</>)}
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Divers :</strong></Form.Label>
                            <Image className="mt-1"  src="../../assets/icon/011-idea.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Row className="border border-dark p-3 ml-1 mr-1" style={{height:'107px'}}>
                            {!divers ? (<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, voluptatibus inventore dolor nostrum.
                            </>):(<>{divers}</>)}
                        </Row>
                    </Form.Group>
                </Row>
            </Form>
         
        </>
            ):( 
        <>

          <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Rythme d'acceuil :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/005-clock.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setAcceuil(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Communication :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/006-promotion.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setCommunication(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Ce que j'aime :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/007-like.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setLike(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Ce que je n'aime pas :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/004-dont-like.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setDontLike(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Surveillance particulière :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/008-danger.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setSurveillance(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Toilette / habillage :</strong></Form.Label>
                            <Image className="mt-1"  src="../../assets/icon/003-shower.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setToilette(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Protection mise aux toilettes :</strong></Form.Label>
                            <Image className="mt-1"  src="../../assets/icon/009-toilet.png"    style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setProtection(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Particularité repas :</strong></Form.Label>
                            <Image className="mt-1"  src="../../assets/icon/002-repas.png"    style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setRepas(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Alimentation spécifique :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/010-salad.png"    style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setAlimentation(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Hydratation :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/001-drink.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setHydratation(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Equipe technique :</strong></Form.Label>
                            <Image className="mt-1" src="../../assets/icon/012-wheel-chair.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setTechnique(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Row className="justify-content-around border border-danger m-1 mb-3">
                            <Form.Label className="mt-2"><strong>Divers :</strong></Form.Label>
                            <Image className="mt-1"  src="../../assets/icon/011-idea.png"  style={{ "height": "30px", "width": "30px" }} />
                        </Row>
                        <Form.Control as="textarea" onChange={(e) => setDivers(e.target.value)} placeholder="Editer un text informatif..." style={{ height: '108px' }} />
                    </Form.Group>
                </Row>
            </Form>
        </> 
        )}
        </Card.Body>
    );
};

export default Needs;