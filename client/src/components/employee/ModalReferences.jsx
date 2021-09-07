import React, { useState } from 'react';
import { Row, Col, Modal, Button } from "react-bootstrap"

function MydModalWithGrid(props) {
    const userName = props.DataName;
    const userSurname = props.DataSurname;
    const [addBeneficiary, setAddBeneficiary] = useState(true)

    const toggleAddReference = () => {
        setAddBeneficiary(!addBeneficiary);
    }
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Références de {userName} {userSurname} :
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                {addBeneficiary
                    ? (
                        <>
                            <div className="table-responsive pl-3 pr-3">
                                <table className="table table-sm">
                                    <thead class="bg-warning">
                                        <tr class="bg-warning">
                                            <th scope="col" className="text-light" colspan="2">Liste des bénéficiare en référence :</th>
                                            <th scope="col" className="text-light"></th>
                                            <th scope="col" className="text-light" colspan="2">Actions:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td class="table-warning" >
                                                <img
                                                    alt=""
                                                    src="user.photoProfil}"
                                                    width="40"
                                                    height="40"
                                                    style={{ 'borderRadius': '5px' }}
                                                    className="d-inline-block align-top"
                                                />
                                            </td>
                                            <td class="table-warning mb-3" >user.name} ser.surname}</td>
                                            <td class="table-warning" ></td>
                                            <td class="table-warning" >
                                            </td>
                                            <td class="table-warning" >
                                                Delete
                                            </td>
                                        </tr>
                                        <tr >
                                            <td class="table-warning" >
                                                <img
                                                    alt=""
                                                    src="user.photoProfil}"
                                                    width="40"
                                                    height="40"
                                                    style={{ 'borderRadius': '5px' }}
                                                    className="d-inline-block align-top"
                                                />
                                            </td>
                                            <td class="table-warning mb-3" >user.name} ser.surname}</td>
                                            <td class="table-warning" ></td>
                                            <td class="table-warning" >
                                            </td>
                                            <td class="table-warning" >
                                                Delete
                                            </td>
                                        </tr>
                                        <tr >
                                            <td class="table-warning" >
                                                <img
                                                    alt=""
                                                    src="user.photoProfil}"
                                                    width="40"
                                                    height="40"
                                                    style={{ 'borderRadius': '5px' }}
                                                    className="d-inline-block align-top"
                                                />
                                            </td>
                                            <td class="table-warning mb-3" >user.name ser.surname</td>
                                            <td class="table-warning" ></td>
                                            <td class="table-warning" >
                                            </td>
                                            <td class="table-warning" >
                                                Delete
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="table-responsive pl-3 pr-3">
                                <table className="table table-sm">
                                    <thead class="bg-info">
                                        <tr class="bg-info">
                                            <th scope="col" className="text-light" colspan="2">Liste des usagers :</th>
                                            <th scope="col" className="text-light"></th>
                                            <th scope="col" className="text-light" colspan="2">Actions:</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td class="table-info" >
                                                <img
                                                    alt=""
                                                    src="user.photoProfil}"
                                                    width="40"
                                                    height="40"
                                                    style={{ 'borderRadius': '5px' }}
                                                    className="d-inline-block align-top"
                                                />
                                            </td>
                                            <td class="table-info mb-3" >user.name} ser.surname}</td>
                                            <td class="table-info" ></td>
                                            <td class="table-info" >
                                            </td>
                                            <td class="table-info" >
                                                <img
                                                    alt="references"
                                                    src="./assets/icon/addReference.png"
                                                    style={{ height: "30px", width: "30px" }}
                                                    className="icon"
                                                />
                                            </td>
                                        </tr>
                                        <tr >
                                            <td class="table-info" >
                                                <img
                                                    alt=""
                                                    src="user.photoProfil}"
                                                    width="40"
                                                    height="40"
                                                    style={{ 'borderRadius': '5px' }}
                                                    className="d-inline-block align-top"
                                                />
                                            </td>
                                            <td class="table-info mb-3" >user.name} ser.surname}</td>
                                            <td class="table-info" ></td>
                                            <td class="table-info" >
                                            </td>
                                            <td class="table-info" >
                                                add
                                </td>
                                        </tr>
                                        <tr >
                                            <td class="table-info" >
                                                <img
                                                    alt=""
                                                    src="user.photoProfil}"
                                                    width="40"
                                                    height="40"
                                                    style={{ 'borderRadius': '5px' }}
                                                    className="d-inline-block align-top"
                                                />
                                            </td>
                                            <td class="table-info mb-3" >user.name ser.surname</td>
                                            <td class="table-info" ></td>
                                            <td class="table-info" >
                                            </td>
                                            <td class="table-info" >
                                                add
                                </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Col>
                        {addBeneficiary
                            ? (
                                <>
                                <Button variant="info" onClick={toggleAddReference}>
                                        Ajouter une référence
                                </Button>
                                </>
                            ) : (
                                <>
                                <Button variant="warning" onClick={toggleAddReference}>
                                        Liste des références
                                </Button>
                                </>
                            )
                        }
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

const ModalReference = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const DataName = props.DataName;
    const DataSurname = props.DataSurname;
    const DataUser_id = props.DataUser_id;

    return (
        <>
            <img
                onClick={() => setModalShow(true)}
                src="./assets/icon/referent.png"
                className="icon"
                alt="references"
            />
            <MydModalWithGrid
                show={modalShow}
                onHide={() => setModalShow(false)}
                DataUser_id={DataUser_id}
                DataName={DataName}
                DataSurname={DataSurname} />
        </>
    );
}

export default ModalReference;