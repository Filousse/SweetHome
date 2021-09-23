import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import DeleteGuest from './DeleteGuest';
import IconHoverInfo from '../IconHoverInfo';
import { Col, Row } from 'react-bootstrap'

const ReadGuests = () => {
    const guestsData = useSelector((state) => state.guestReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    return (
        <>
            <div className="table-responsive pl-3 pr-3">
                <div className="justify-content-center d-flex align-items-center m-2" style={{ cursor: "pointer", border: '2px solid black', width: '55px', height: '55px', borderRadius: '20px' }}>
                    <Link className="p-3" to="/new-guest">
                        <img src="./assets/icon/addGuest.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
                    </Link>
                </div>
                <table className="table table-sm">
                    <thead class="bg-warning">
                        <tr class="bg-warning">
                            <th scope="col" className="text-light"></th>
                            <th scope="col" colspan="2" className="text-light">Bénéficiare</th>
                            <th scope="col" style={{ maxWidth: "10px" }} className="text-light">Références</th>
                            <th scope="col" style={{ maxWidth: "10px" }} className="text-light">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {guestsData.map((guest) => {
                                if (guest.adminName === userData.name) {
                                    return (
                                        <tr key={guest._id}>
                                            <td class="table-warning" >
                                                <img
                                                    alt=""
                                                    src={guest.picture}
                                                    width="40"
                                                    height="40"
                                                    style={{ 'borderRadius': '5px' }}
                                                    className="d-inline-block align-top"
                                                />
                                            </td>
                                            <td class="table-warning" >{guest.name} {guest.surname}</td>
                                            <td class="table-warning" ></td>
                                            <td class="table-warning" style={{ maxWidth: "50px" }}  >
                                                <Row className="justify-content-md-start">
                                                    <Col xs lg="2" style={{ backgroundImage: "url(/assets/icon/001-nothing.png)", height:'35px', backgroundRepeat: 'no-repeat',backgroundPosition: "center" }}>
                                                        {usersData.map((user) => {
                                                            if (user._id === guest.educRef) {
                                                                return (
                                                                    < IconHoverInfo team="Éducative" srcImg={user.photoProfil} data={user.name} />
                                                                )
                                                            }
                                                        })}
                                                    </Col>
                                                    <Col xs lg="2" style={{ backgroundImage: "url(/assets/icon/001-nothing.png)", height:'35px', backgroundRepeat: 'no-repeat',backgroundPosition: "center" }}>
                                                        {usersData.map((user) => {
                                                            if (user._id === guest.medicalRef) {
                                                                return (
                                                                    < IconHoverInfo team="Médical" srcImg={user.photoProfil} data={user.name} />
                                                                )
                                                            }
                                                        })}
                                                    </Col>
                                                </Row>
                                            </td>
                                            <td class="table-warning" >
                                                <DeleteGuest
                                                    DataId={guest._id}
                                                    DataName={guest.name}
                                                    DataSurname={guest.surname}
                                                />
                                            </td>
                                        </tr>
                                    );
                                }
                            })}
                        </>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ReadGuests;