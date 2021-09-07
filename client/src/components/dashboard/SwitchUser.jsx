import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import cookie from "js-cookie";
import { useHistory } from "react-router-dom"



function MydModalWithGrid(props) {
    const history = useHistory()
    const user = useSelector(state => state.usersReducer);
    const admin = useSelector(state => state.userReducer);

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
                    {admin.name !== "Gomesin" &&
                        <>
                            <tr className="table-primary" >
                                <td >
                                    <img
                                        alt=""
                                        src={user[11].photoProfil}
                                        width="40"
                                        height="40"
                                        style={{ 'borderRadius': '5px' }}
                                        className="d-inline-block align-top"
                                    />
                                </td>
                                <td className="pt-3">{user[11].surname} {user[11].name}</td>
                                <td className="pt-3">{user[11].job}</td>
                                <td><Button onClick={() => handelSwitchUser(user[11].email, user[11].name)} variant="outline-primary" >Service Éducatif</Button></td>

                            </tr>
                        </>
                    }
                    {admin.name !== "Alfana" &&
                        <>
                            <tr className="table-success" >
                                <td >
                                    <img
                                        alt=""
                                        src={user[12].photoProfil}
                                        width="40"
                                        height="40"
                                        style={{ 'borderRadius': '5px' }}
                                        className="d-inline-block align-top"
                                    />
                                </td>
                                <td className="pt-3">{user[12].surname}</td>
                                <td className="pt-3">{user[12].job}</td>
                                <td >
                                    <Button
                                        onClick={() => handelSwitchUser(user[12].email, user[12].name)} variant="outline-success" >Service Médical</Button>
                                </td>
                            </tr>
                        </>
                    }
                </table>
            </Modal.Body>
            { admin.adminName &&
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
                        <img className="img" src="./assets/img/switchUser.png" alt="home" />
                    </div>
                </div>
            </div>
            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default SwitchUser;