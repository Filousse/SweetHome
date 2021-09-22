import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Delete from './DeleteUser';
import ModalRefs from './RefsSettings/ModalRefs';
import {uid } from '../appContext'
const Read = () => {
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    return (
        <>
            <div className="table-responsive pl-3 pr-3">
                <div className="justify-content-center d-flex align-items-center m-2" style={{ cursor: "pointer", border: '1px solid black', width: '55px', height: '55px', borderRadius: '20px' }}>
                    <Link className="p-3" to="/employee-create">
                        <img src="./assets/icon/addEmployee.png" style={{ "height": "35px", "width": "35px" }} alt="launchpad" />
                    </Link>
                </div>
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
                                            <Delete
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
                                            <Delete
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

export default Read;