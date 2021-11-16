import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Row, Spinner } from 'react-bootstrap'
import DeleteGuest from '../DeleteGuest';
import BtnUpdateRead from '../updateGuest/BtnUpdateRead';
import IconInfo from './IconInfo';
import { isEmpty } from "../../Utils"

const ReadGuests = () => {
    const guestReducer = useSelector((state) => state.guestReducer);
    const usersReducer = useSelector((state) => state.usersReducer);
    const userReducer = useSelector((state) => state.userReducer);
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        if (!isEmpty(guestReducer) && !isEmpty(usersReducer) && !isEmpty(userReducer)) {
            setLoading(false);
        } else { setLoading(true) }
    }, [guestReducer, usersReducer, userReducer]);


    return (
        <>
            {isLoading ? (
                <Row className="justify-content-center" style={{ marginTop: 100, height: 400 }}>
                    <Spinner animation="border" variant="primary" style={{ "top": "100px" }} />
                </Row>
            ) : (
                    <Container style={{ "minHeight": 550 }} fluid className="justify-content-center">
                        <Row className="justify-content-center mt-5 mb-5">
                            <Row className="w-75 justify-content-center bg-secondary rounded-lg m-2" style={{ "minWidth": 320 }}>
                                <h3 className="text-light text-center text-uppercase p-2">Gestion des bénéficiares</h3>
                            </Row >
                            <table className="table table-sm w-75 mb-4">
                                <thead class="bg-warning">
                                    <tr class="bg-warning">
                                        <th scope="col" colspan="2" className="text-light text-uppercase pl-2 pb-4">Bénéficiares</th>
                                        <th scope="col" colspan="2" className="text-light text-uppercase text-center  pb-4">Références</th>
                                        {!userReducer.adminName ? (
                                            <th scope="col" colspan="2" className="text-light text-center  pr-4 pb-3">
                                                <Link to="/new-guest" style={{ cursor: "pointer", borderRadius: '25px' }} className="p-1 bg-light" >
                                                    <img
                                                        src="./assets/icon/btn_AddGuest.png"
                                                        style={{ "height": "45px", "width": "45px" }}
                                                        alt="btn_AddGuest"
                                                    />
                                                </Link>
                                            </th>
                                        ) : (
                                                <th scope="col" colspan="2" className="text-light pr-4 pt-3 text-center  pb-4">
                                                    <p className="text-uppercase text-center m-0 p-0 " >Actions</p>
                                                </th>
                                            )
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {guestReducer && guestReducer.map((guest) => {
                                        if (guest.adminName === userReducer.name ||
                                            guest.adminName === userReducer.adminName ||
                                            userReducer.adminName === "Demo" ||
                                            guest.adminName === "Demo") {
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
                                                    <td class="table-warning" >
                                                        {guest.name} {guest.surname}
                                                    </td>
                                                    <td class="table-warning text-right"  >
                                                        {usersReducer && usersReducer.map((user) => {
                                                            if (user._id === guest.educRef) {
                                                                return (
                                                                    < IconInfo
                                                                        team="Éducative"
                                                                        srcImg={user.photoProfil}
                                                                        data={user.surname}
                                                                    />
                                                                )
                                                            }
                                                        })}
                                                    </td>
                                                    <td class="table-warning"  >
                                                        {usersReducer && usersReducer.map((user) => {
                                                            if (user._id === guest.medicalRef) {
                                                                return (
                                                                    < IconInfo
                                                                        team="Médical"
                                                                        srcImg={user.photoProfil}
                                                                        data={user.surname}
                                                                    />
                                                                )
                                                            }
                                                        })}
                                                    </td>
                                                    <td class="table-warning text-center" >
                                                        <BtnUpdateRead
                                                            idGuest={guest._id}
                                                            educRef={guest.educRef}
                                                            medicalRef={guest.medicalRef}
                                                            adminName={guest.adminName}
                                                        />
                                                    </td>
                                                    {!userReducer.adminName &&
                                                        <>
                                                            {guest.adminName === userReducer.name && (
                                                                <td class="table-warning" >
                                                                    <DeleteGuest
                                                                        DataId={guest._id}
                                                                        DataName={guest.name}
                                                                        DataSurname={guest.surname}
                                                                    />
                                                                </td>
                                                            )}
                                                            {guest.adminName === "Demo" && (
                                                                <td class="table-warning" >
                                                                    <DeleteGuest
                                                                        DataId={guest._id}
                                                                        DataName={guest.name}
                                                                        DataSurname={guest.surname}
                                                                    />
                                                                </td>
                                                            )}
                                                        </>
                                                    }
                                                </tr>
                                            );
                                        }
                                    })}
                                </tbody>
                            </table>
                        </Row>
                    </Container>
                )}
        </>

    );
};

export default ReadGuests;