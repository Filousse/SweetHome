import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import DeleteUser from './DeleteUser';
import ModalRefs from './refsSettings/ModalRefs';

const ReadUsers = () => {
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    return (
        <>
            <div className="table-responsive pl-3 pr-3">
                <Row >
                <Col md={4} className="m-3 mt-4">
                    <Link  style={{ cursor: "pointer", border: '3px solid black', width: '50px', height: '50px', borderRadius: '25px' }}className="p-3" to="/employee-create">
                        <img src="./assets/icon/addEmployee.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
                    </Link>
                </Col>
                <Col md={5} className="m-3 mt-4">
                    <h1>Gestion du personnel :</h1>
                </Col>
                </Row>
                <table className="table table-sm">
                    <thead class="bg-primary">
                        <tr class="bg-primary">
                            <th scope="col" className="text-light" colspan="2">Équipe éducative:</th>
                            <th scope="col" className="text-light">Fonctions:</th>
                            <th scope="col" className="text-light" colspan="2">Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user) => {
                            if (user.team === "Éducative" && userData.name === user.adminName) {
                                return (
                                    <tr key={user._id}>
                                        <td class="table-primary" >
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
                                        <td class="table-primary" >
                                            <DeleteUser
                                                DataUser_id={user._id}
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
                            <th scope="col" className="text-light" colspan="2">Equipe médical:</th>
                            <th scope="col" className="text-light">Fonctions:</th>
                            <th scope="col" className="text-light" colspan="2">Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user) => {
                            if (user.team === "Médical" && userData.name === user.adminName) {
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
                                                DataUser_id={user._id}
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
            </div>
        </>
    );
};

export default ReadUsers;