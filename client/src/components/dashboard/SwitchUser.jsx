import React, { useState } from 'react';
import axios from "axios";
// import cookie from "js-cookie";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { Button, Modal } from "react-bootstrap";

function MydModalWithGrid(props) {
    const history = useHistory();

    const handelAdminLogin = () => {
        history.push("/login")
    }

    const handelSwitchUser = async (email, password) => {
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
            history.push("/dashboard");
        }).catch((err) => {
            console.log(err);
        })
    }

    // const removeCookie = (key) => {
    //     if (window !== "undefined") {
    //         cookie.remove(key, { expires: 1 });
    //     }
    // };

    // const handelSwitchUser = async (email, password) => {
    //     await axios({
    //         method: "get",
    //         url: `${process.env.REACT_APP_API_URL}api/user/logout`,
    //         withCredentials: true,
    //     }).then((email, password) =>
    //         removeCookie("jwt"),
    //         axios({
    //             method: "post",
    //             url: `${process.env.REACT_APP_API_URL}api/user/login`,
    //             withCredentials: true,
    //             data: {
    //                 email,
    //                 password,
    //             },
    //         }).then((res) => {
    //             console.log(res);
    //             history.push("/dashboard");
    //             window.location.reload()
    //         }).catch((err) => {
    //                 console.log(err);
    //             }),
    //     ).catch((err) => console.log(err));
    // };

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-center">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Visiter un profil de démonstration :
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table justify-content-md-center">
                    <tr className="table-primary" >
                        <td >
                            <img
                                alt=""
                                src="./uploads/profil/Provoost.jpg"
                                width="50"
                                height="50"
                                style={{ 'borderRadius': '5px' }}
                                className="d-inline-block align-top"
                            />
                        </td>
                        <td className="pt-3">Thomas Provoost</td>
                        <td className="pt-3">Éducateur spécialisé</td>
                        <td><Button onClick={() => handelSwitchUser("provoost@gmail.com", "provoost")} variant="outline-primary" >Service Éducatif</Button></td>
                    </tr>
                    <tr className="table-success" >
                        <td >
                            <img
                                alt=""
                                src="./uploads/profil/Saelens.jpg"
                                width="50"
                                height="50"
                                style={{ 'borderRadius': '5px' }}
                                className="d-inline-block align-top"
                            />
                        </td>
                        <td className="pt-3">Yasmine Saelens</td>
                        <td className="pt-3">Infirmière</td>
                        <td >
                            <Button
                                onClick={() => handelSwitchUser("saelen@gmail.com", "saelens")} variant="outline-success" >Service Médical
                            </Button>
                        </td>
                    </tr>
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