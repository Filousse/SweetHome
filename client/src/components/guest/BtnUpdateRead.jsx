import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UpdateGuest from "./UpdateGuest"
import ReadGuest from "./ReadGuest"

const BtnUpdateRead = (props) => {
    const guest = {...props};
    const [modalShowUpdate, setModalShowUpdate] = useState(false);
    const [modalShowView, setModalShowView] = useState(false)
    const userData = useSelector((state) => state.userReducer);


    const handleUpdateGuest = () => {
        console.log("guestguest=>", guest.adminName);
        setModalShowUpdate(true)
    }
    const handleViewGuest = () => {
        setModalShowView(true)
    }

    return (
        <>
            {(guest.educRef === userData._id || guest.medicalRef === userData._id || guest.adminName === userData.name ) 
                ?(
                    <img
                    onClick={handleUpdateGuest}
                    src="./assets/icon/update.png"
                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                    alt="basket_icon"
                />
                ) : (
                    <img
                    onClick={handleViewGuest}
                    src="./assets/icon/visit.png"
                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                    alt="basket_icon"
                />
                )
            }
                
            <UpdateGuest show={modalShowUpdate} idGuest={guest.idGuest} onHide={() => setModalShowUpdate(false)} />
            <ReadGuest show={modalShowView} idGuest={guest.idGuest} onHide={() => setModalShowView(false)} />

        </>
    );
}

export default BtnUpdateRead;