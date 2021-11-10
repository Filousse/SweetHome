import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalUpdate from "./ModalUpdate"
import ModalRead from "./ModalRead"

const BtnUpdateRead = (props) => {
    const data = {...props};
    const userReducer = useSelector((state) => state.userReducer);
    const [modalShowUpdate, setModalShowUpdate] = useState(false);
    const [modalShowView, setModalShowView] = useState(false)

    const handleUpdateGuest = () => {
        setModalShowUpdate(true)
    }

    const handleViewGuest = () => {
        setModalShowView(true)
    }

    return (
        <>
            {(data.educRef === userReducer._id ||
             data.medicalRef === userReducer._id ||
              data.adminName === userReducer.name ||
              data.adminName === "Demo" && !userReducer.adminName ) 
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