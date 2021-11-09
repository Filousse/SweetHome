import React, { PureComponent } from 'react';
import { Row, Col, Card, Form, Button } from "react-bootstrap"
import InfoDemo from "../InfoDemo"

export default class TeamTurnover extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            file: ""
        }
    }
    render() {
        const reducerTeam = this.props.reducerTeam
        const dataTeam = this.props.team
        const dataShowUpdate = this.props.showUpdate
        return (
            <div>
                <Card.Header>
                    <Row>
                        <Col sm={1}>
                            <img
                                src="../../assets/icon/icon_Logo.png"
                                style={{ "height": "75px", "width": "75px" }}
                                alt="logo_asso"
                            />
                        </Col>
                        {reducerTeam === "Médical" &&
                            <Col sm={11}>
                                <h1 className="text-center">Roulement de l'équipe médical</h1>
                            </Col>
                        }
                        {reducerTeam === "Éducative" &&
                            <Col sm={11}>
                                <h1 className="text-center">Roulement de l'équipe éducatif</h1>
                            </Col>
                        }
                        {!reducerTeam &&
                            <>
                                {dataTeam === "Éducatif" &&
                                    <>
                                        <Col sm={11}>
                                            <h1 className="text-center">Roulement de l'équipe éducatif</h1>
                                        </Col>
                                    </>
                                }
                                {dataTeam === "Médical" &&
                                    <>
                                        <Col sm={11}>
                                            <h1 className="text-center">Roulement de l'équipe médical</h1>
                                        </Col>
                                    </>
                                }
                            </>
                        }
                    </Row>
                </Card.Header>
                <Card.Body className="card-body" >
                    <Row className="justify-content-center" >
                        {dataShowUpdate &&
                            <Row className="justify-content-center mb-4 p-4 border border-dark rounded">
                                <Form.Control
                                    className="w-50"
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".jpg, .jpeg, .png"
                                    style={{ "marginBottom": "10px" }}
                                    onChange={(e) => this.setState({ file: e.target.value })}
                                />
                                <InfoDemo />
                            </Row>
                        }
                        <img src="../../assets/icon/icon_TurnOverTest.png" className="w-100 p-1" alt="user-picture" />
                    </Row>
                </Card.Body>
            </div>
        )
    }
}
