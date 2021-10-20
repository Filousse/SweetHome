import React, { setState, PureComponent } from 'react';
import { Card, Row, Col, Table, Form } from "react-bootstrap"

export class OnCallHours extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nameOne: "Noms Prénoms",
            startDateOne: "00/00/00",
            endDateOne: "00/00/00",
            nbOne: "+33 6 11223344",

            nameTwo: "Noms Prénoms",
            startDateTwo: "00/00/00",
            endDateTwo: "00/00/00",
            nbTwo: "+33 6 21223344",

            nameThree: "Noms Prénoms",
            startDateThree: "00/00/00",
            endDateThree: "00/00/00",
            nbThree: "+33 6 11223344",

            nameFour: "Noms Prénoms",
            startDateFour: "00/00/00",
            endDateFour: "00/00/00",
            nbFour: "+33 6 11223344",

            nameFive: "Noms Prénoms",
            startDateFive: "00/00/00",
            endDateFive: "00/00/00",
            nbFive: "+33 6 11223344",

            nameSix: "Noms Prénoms",
            startDateSix: "00/00/00",
            endDateSix: "00/00/00",
            nbSix: "+33 6 11223344",

        };
    }
    render() {
        const showUpdate = this.props.showUpdate;
        return (
            <div>
                <Card.Header>
                    <Row>
                        <Col sm={1}>
                            <img
                                src="../../uploads/logo/logoCCAS.png"
                                style={{ "height": "75px", "width": "75px" }}
                                alt="logo_asso"
                            />
                        </Col>
                        <Col sm={11}>
                            <h1 className="text-center">Contacts des abstreintes</h1>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className="mt-4">
                    <Table responsive striped bordered hover size="lg">
                        <thead>
                            <tr>
                                <th className="w-25 text-center">Nom :{showUpdate} </th>
                                <th className="w-25 text-center">Début de l'abstreinte : </th>
                                <th className="w-25 text-center">Fin de l'abstreinte :</th>
                                <th className="w-25 text-center">Contact :</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nameOne}
                                                onChange={(e) => this.setState({ nameOne: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nameOne}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="startDateOne"
                                                value={this.state.startDateOne}
                                                onChange={(e) => this.setState({ startDateOne: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.startDateOne}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="endDateOne"
                                                value={this.state.endDateOne}
                                                onChange={(e) => this.setState({ endDateOne: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.endDateOne}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nbOne}
                                                onChange={(e) => this.setState({ nbOne: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nbOne}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nameTwo}
                                                onChange={(e) => this.setState({ nameTwo: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nameTwo}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="startDateOne"
                                                value={this.state.startDateTwo}
                                                onChange={(e) => this.setState({ startDateTwo: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.startDateTwo}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="endDateOne"
                                                value={this.state.endDateTwo}
                                                onChange={(e) => this.setState({ endDateTwo: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.endDateTwo}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nbTwo}
                                                onChange={(e) => this.setState({ nbTwo: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nbTwo}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nameThree}
                                                onChange={(e) => this.setState({ nameThree: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nameThree}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="startDateOne"
                                                value={this.state.startDateThree}
                                                onChange={(e) => this.setState({ startDateThree: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.startDateThree}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="endDateOne"
                                                value={this.state.endDateThree}
                                                onChange={(e) => this.setState({ endDateThree: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.endDateThree}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nbThree}
                                                onChange={(e) => this.setState({ nbThree: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nbThree}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nameFour}
                                                onChange={(e) => this.setState({ nameFour: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nameFour}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="startDateOne"
                                                value={this.state.startDateFour}
                                                onChange={(e) => this.setState({ startDateFour: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.startDateFour}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="endDateOne"
                                                value={this.state.endDateFour}
                                                onChange={(e) => this.setState({ endDateFour: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.endDateFour}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nbFour}
                                                onChange={(e) => this.setState({ nbFour: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nbFour}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nameFive}
                                                onChange={(e) => this.setState({ nameFive: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nameFive}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="startDateOne"
                                                value={this.state.startDateFive}
                                                onChange={(e) => this.setState({ startDateFive: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.startDateFive}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="endDateOne"
                                                value={this.state.endDateFive}
                                                onChange={(e) => this.setState({ endDateFive: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.endDateFive}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nbFive}
                                                onChange={(e) => this.setState({ nbFive: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nbFive}</td>
                                    )
                                }
                            </tr>
                            <tr>
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nameSix}
                                                onChange={(e) => this.setState({ nameSix: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nameSix}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="startDateOne"
                                                value={this.state.startDateSix}
                                                onChange={(e) => this.setState({ startDateSix: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.startDateSix}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                type="date"
                                                name="endDateOne"
                                                value={this.state.endDateSix}
                                                onChange={(e) => this.setState({ endDateSix: e.target.value })}
                                                required
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.endDateSix}</td>
                                    )
                                }
                                {!showUpdate
                                    ? (
                                        <td className=" p-0 ">
                                            <Form.Control
                                                value={this.state.nbSix}
                                                onChange={(e) => this.setState({ nbSix: e.target.value })}
                                                className="w-100" as="textarea"
                                                placeholder="Editer un text informatif..."
                                                style={{ height: '40px' }}
                                            />
                                        </td>
                                    ) : (
                                        <td className=" text-center">{this.state.nbSix}</td>
                                    )
                                }
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </div>
        )
    }
}