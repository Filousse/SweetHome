import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import cookie from "js-cookie";
import { useHistory } from "react-router-dom"

function MydModalWithGrid(props) {
    const history = useHistory()
    const user = useSelector(state => state.usersReducer);
    const userReducer = useSelector(state => state.userReducer);

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
                    {userReducer.name !== "Gomesin" &&
                        <>
                            <tr className="table-primary" >
                                <td >
                                    <img
                                        alt=""
                                        src={user[15].photoProfil}
                                        width="40"
                                        height="40"
                                        style={{ 'borderRadius': '5px' }}
                                        className="d-inline-block align-top"
                                    />
                                </td>
                                <td className="pt-3">{user[15].surname} {user[15].name}</td>
                                <td className="pt-3">{user[15].job}</td>
                                <td><Button onClick={() => handelSwitchUser(user[15].email, user[15].name)} variant="outline-primary" >Service Éducatif</Button></td>

                            </tr>
                            <tr className="table-success" >
                                <td >
                                    <img
                                        alt=""
                                        src={user[5].photoProfil}
                                        width="40"
                                        height="40"
                                        style={{ 'borderRadius': '5px' }}
                                        className="d-inline-block align-top"
                                    />
                                </td>
                                <td className="pt-3">{user[5].surname} {user[5].name}</td>
                                <td className="pt-3">{user[5].job}</td>
                                <td >
                                    <Button
                                        onClick={() => handelSwitchUser(user[5].email, user[5].name)} variant="outline-success" >Service Médical</Button>
                                </td>
                            </tr>
                        </>
                    }
                </table>
            </Modal.Body>
            { userReducer.adminName &&
                <Modal.Footer>
                    <Button  variant="outline-danger" onClick={handelAdminLogin}>Me connecter à mon profil</Button>
                </Modal.Footer>
            }
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
                        <img className="img" src="./assets/icon/switchUser.png" alt="home" />
                    </div>
                </div>
            </div>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default SwitchUser;