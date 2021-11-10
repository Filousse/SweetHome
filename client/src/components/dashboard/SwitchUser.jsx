import React, { useState } from 'react';
import axios from "axios";
import cookie from "js-cookie";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { Button, Modal } from "react-bootstrap";

function MydModalWithGrid(props) {
    const history = useHistory()
    const user = useSelector(state => state.usersReducer);

    const removeCookie = (key) => {
        if (window !== "undefined") {
            cookie.remove(key, { expires: 1 });
        }
    };

    const handelSwitchUser = async (email, password) => {
        console.log(email, password);
        await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials: true,
        }).then((email, password) =>
            removeCookie("jwt"),
            axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/user/login`,
                withCredentials: true,
                data: {
                    email,
                    password,
                },
            }).then((res) => {
                console.log(res);
                window.location = "/dashboard";
            })
                .catch((err) => {
                    console.log(err);
                }),
        )
            .catch((err) => console.log(err));
    };

    const handelAdminLogin = () => {
        history.push("/login")
    }

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-center">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Visiter un profil de démonstration :
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table justify-content-md-center">
                    {user.map((user) => {
                        if(user.surname === "Thomas") {
                            return(
                            <tr className="table-primary" >
                                <td >
                                    <img
                                        alt=""
                                        src={user.photoProfil}
                                        width="50"
                                        height="50"
                                        style={{ 'borderRadius': '5px' }}
                                        className="d-inline-block align-top"
                                    />
                                </td>
                                <td className="pt-3">{user.surname} {user.name}</td>
                                <td className="pt-3">{user.job}</td>
                                <td><Button onClick={() => handelSwitchUser(user.email, "provoost")} variant="outline-primary" >Service Éducatif</Button></td>
                            </tr>
                            )}if(user.surname === "Yasmine") {
                                return(
                                <tr className="table-success" >
                                    <td >
                                        <img
                                            alt=""
                                            src={user.photoProfil}
                                            width="50"
                                            height="50"
                                            style={{ 'borderRadius': '5px' }}
                                            className="d-inline-block align-top"
                                        />
                                    </td>
                                    <td className="pt-3">{user.surname} {user.name}</td>
                                    <td className="pt-3">{user.job}</td>
                                    <td >
                                        <Button
                                            onClick={() => handelSwitchUser(user.email, "saelens")} variant="outline-success" >Service Médical</Button>
                                    </td>
                                </tr>

                                )}
                    })}

                </table>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-danger" onClick={handelAdminLogin}>Me connecter à mon profil</Button>
            </Modal.Footer>

        </Modal>
    );
}

const SwitchUser = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div className="left-nav-container">
                <div className="icons">
                    <div onClick={() => setModalShow(true)} className="icons-bis">
                        <img className="img" src="./assets/icon/btn_SwitchUser.png" alt="btn_SwitchUser" />
                    </div>
                </div>
            </div>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default SwitchUser;