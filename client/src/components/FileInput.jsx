import React from 'react';
import { Col, Row } from "react-bootstrap"

const FileInput = (props) => {
    const blokedUpdate = props.blokedUpdate;

    // const handelClick = (e) => {
    //     alert("ee")
    // }

    return (
        <Row className="border border-secondary rounded p-2 mb-1">
            <Col sm={8} className="pt-1">
                <strong>Fiche information général :</strong>
            </Col>
            <Col sm={2}>
            {!blokedUpdate &&
                    <img src="./assets/icon/update.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
            }
            </Col>
            <Col sm={2}>
                <img src="./assets/icon/visit.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
            </Col>
        </Row>
    );
};

export default FileInput;