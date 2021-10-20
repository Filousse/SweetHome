import React, { PureComponent, useState } from 'react';
import { Row, Col, Card, Form, Button } from "react-bootstrap"

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
        return(
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
                            <Button className="w-50" >Valider</Button>
                        </Row>
                    }
                    <img src="../../uploads/guest/pictures/aaa.jpg" className="w-100 p-1" alt="user-picture" />
                </Row>
            </Card.Body>
        </div>
        )
    }
}


// const TeamTurnover = (props) => {
//     const userReducer = useSelector(state => state.userReducer)
//     const [file, setFile] = useState()

//     return (
//         <div>
//             <Card.Header>
//                 <Row>
//                     <Col sm={1}>
//                         <img
//                             src="../../uploads/logo/logoCCAS.png"
//                             style={{ "height": "75px", "width": "75px" }}
//                             alt="logo_asso"
//                         />
//                     </Col>
//                     {dataTeam === "Médical" &&
//                         <Col sm={11}>
//                             <h1 className="text-center">Roulement de l'équipe médical</h1>
//                         </Col>
//                     }
//                     {dataTeam === "Éducative" &&
//                         <Col sm={11}>
//                             <h1 className="text-center">Roulement de l'équipe éducatif</h1>
//                         </Col>
//                     }
//                     {!dataTeam &&
//                         <>
//                             {dataTeam === "Éducatif" &&
//                                 <>
//                                     <Col sm={11}>
//                                         <h1 className="text-center">Roulement de l'équipe éducatif</h1>
//                                     </Col>
//                                 </>
//                             }
//                             {dataTeam === "Médical" &&
//                                 <>
//                                     <Col sm={11}>
//                                         <h1 className="text-center">Roulement de l'équipe médical</h1>
//                                     </Col>
//                                 </>
//                             }
//                         </>
//                     }
//                 </Row>
//             </Card.Header>
//             <Card.Body className="card-body" >
//                 <Row className="justify-content-center" >
//                     {dataShowUpdate &&
//                         <Row className="justify-content-center mb-4 p-4 border border-dark rounded">
//                             <Form.Control
//                                 className="w-50"
//                                 type="file"
//                                 id="file"
//                                 name="file"
//                                 accept=".jpg, .jpeg, .png"
//                                 style={{ "marginBottom": "10px" }}
//                                 onChange={(e) => setFile(e.target.files[0])}
//                             />
//                             <Button className="w-50" >Valider</Button>
//                         </Row>
//                     }
//                     <img src="../../uploads/guest/pictures/aaa.jpg" className="w-100 p-1" alt="user-picture" />
//                 </Row>
//             </Card.Body>
//         </div>
//     );
// };

// export default TeamTurnover;