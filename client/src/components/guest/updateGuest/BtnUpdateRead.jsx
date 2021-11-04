import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalUpdate from "./ModalUpdate"
import ModalRead from "./ModalRead"

const BtnUpdateRead = (props) => {
    const data = {...props};
    const [modalShowUpdate, setModalShowUpdate] = useState(false);
    const [modalShowView, setModalShowView] = useState(false)
    const userData = useSelector((state) => state.userReducer);

    const handleUpdateGuest = () => {
        setModalShowUpdate(true)
    }

    const handleViewGuest = () => {
        setModalShowView(true)
    }

    return (
        <>
            {(data.educRef === userData._id || data.medicalRef === userData._id || data.adminName === userData.name ) 
                ?(
                    <img
                    onClick={handleUpdateGuest}
                    src="./assets/icon/btn_Update.png"
                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                    alt="btn_Update"
                    />
                ) : (
                    <img
                    onClick={handleViewGuest}
                    src="./assets/icon/btn_Visit.png"
                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                    alt="btn_Visit"
                    />
                )
            }
                
            <ModalUpdate show={modalShowUpdate} idGuest={data.idGuest} onHide={() => setModalShowUpdate(false)} />
            <ModalRead show={modalShowView} idGuest={data.idGuest} onHide={() => setModalShowView(false)} />

        </>
    );
}

export default BtnUpdateRead;