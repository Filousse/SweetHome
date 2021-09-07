import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Delete from './Delete';
import ModalReferences from './ModalReferences';


const Read = () => {
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    const history = useHistory()

    const handelCreateEmployee = () => {
        history.push("/employee-create")
    }

    return (
        <>
            <div className="table-responsive pl-3 pr-3">
                <Button className="mb-3 mt-3 bg-warning border border-dark text-light" onClick={handelCreateEmployee}>Nouvel employé</Button>
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
                                            <ModalReferences
                                                DataUser_id={user._id}
                                                DataName={user.name} DataSurname={user.surname} />
                                        </td>
                                        <td class="table-primary" >
                                            <Delete
                                                DataUser_id={user._id}
                                                DataName={user.name}
                                                DataSurname={user.surname}
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
                                            <ModalReferences
                                                DataUser_id={user._id}
                                                DataName={user.name} DataSurname={user.surname} />
                                        </td>
                                        <td class="table-success" >
                                            <Delete
                                                DataUser_id={user._id}
                                                DataName={user.name}
                                                DataSurname={user.surname}
                                            />
                                        </td>
                                    </tr>
                                );
                            } else {
                                return [];
                            }

                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Read;