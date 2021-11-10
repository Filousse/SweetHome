import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import DeleteUser from './DeleteUser';
import ModalRefs from './refsSettings/ModalRefs';

const ReadUsers = () => {
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    return (
        <>
            <Container style={{"minHeight":550}} fluid className="justify-content-center">
                <Row className="justify-content-center mt-5 mb-5">
                    <Row className="w-75 justify-content-center bg-secondary rounded-lg m-2" style={{ "minWidth": 360 }}>
                        <h3 className="text-light text-center text-uppercase p-2">Gestion des employés</h3>
                    </Row >
                    <table className="table table-sm w-75 mb-4">
                        <thead class="bg-primary">
                            <tr class="bg-primary">
                                <th scope="col" className="text-light text-uppercase pl-4 pb-3" colspan="2">Équipe éducative</th>
                                <th scope="col" className="text-light text-uppercase pb-3">Fonctions</th>
                                <th scope="col" className="text-light pl-4" colspan="2">
                                    <Link to="/new-user" style={{ cursor: "pointer", borderRadius: '25px' }} className="p-1 bg-light" >
                                        <img
                                            src="./assets/icon/btn_AddUser.png"
                                            style={{ "height": "45px", "width": "45px" }}
                                            alt="btn_AddUser"
                                        />
                                    </Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user) => {
                                if (user.team === "Éducative" && userData.name === user.adminName ||
                                    user.team === "Éducative" && user.adminName === "Demo") {
                                    return (
                                        <tr key={user._id}>
                                            <td class="table-primary pr-5" >
                                                <img
                                                    alt=""
                                                    src={user.photoProfil}
                                                    width="40"
                                                    height="40"
                                                    style={{ 'borderRadius': '5px' }}
                                                    className="d-inline-block align-top"
                                                />
                                            </td>
                                            <td class="table-primary" >{user.name} {user.surname}</td>
                                            <td class="table-primary" >{user.job}</td>
                                            <td class="table-primary" >
                                                <ModalRefs
                                                    user_team={user.team}
                                                    user_id={user._id}
                                                    user_adminName={user.adminName}
                                                />
                                            </td>
                                            <td class="table-primary pl-0 pr-4" >
                                                <DeleteUser
                                                    id={user._id}
                                                    name={user.name}
                                                    surname={user.surname}
                                                />
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    return [];
                                }

                            })}
                        </tbody>
                        <thead class="bg-success">
                            <tr class="bg-success">
                                <th scope="col" className="text-light text-uppercase pl-4 pb-3" colspan="2">Équipe médical</th>
                                <th scope="col" className="text-light text-uppercase pb-3">Fonctions</th>
                                <th scope="col" className="text-light pl-4" colspan="2">
                                    <Link to="/new-user" style={{ cursor: "pointer", borderRadius: '25px' }} className="p-1 bg-light" >
                                        <img
                                            src="./assets/icon/btn_AddUser.png"
                                            style={{ "height": "45px", "width": "45px" }}
                                            alt="btn_AddUser"
                                        />
                                    </Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user) => {
                                if (user.team === "Médical" && userData.name === user.adminName ||
                                user.team === "Médical" && user.adminName === "Demo") {
                                    return (
                                        <tr key={user._id}>
                                            <td class="table-success" >
                                                <img
                                                    alt=""
                                                    src={user.photoProfil}
                                                    width="40"
                                                    height="40"
                                                    style={{ 'borderRadius': '5px' }}
                                                    className="d-inline-block align-top"
                                                />
                                            </td>
                                            <td class="table-success" >{user.name} {user.surname}</td>
                                            <td class="table-success" >{user.job}</td>
                                            <td class="table-success" >
                                                <ModalRefs
                                                    user_team={user.team}
                                                    user_id={user._id}
                                                    user_adminName={user.adminName}
                                                />
                                            </td>
                                            <td class="table-success" >
                                                <DeleteUser
                                                    id={user._id}
                                                    name={user.name}
                                                    surname={user.surname}
                                                />
                                            </td>
                                        </tr>
                                    );
                                } else { return []; }
                            })}
                        </tbody>
                    </table>
                </Row>
            </Container>
        </>
    );
};

export default ReadUsers;