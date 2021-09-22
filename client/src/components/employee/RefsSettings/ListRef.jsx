import React from 'react';
import { useDispatch } from "react-redux";
import { updateEducRef, updateMedicalRef } from "../../../actions/guest.actions"

const ListRef = (props) => {
    const guest_id = props.guest_id;
    const guestName = props.guest_name;
    const guestSurname = props.guest_surname;
    const guest_picture = props.guest_picture;
    const guest_team = props.guest_team;
    const dispatch = useDispatch();

    const handelDeleteRef = () => {
        if(guest_team === "Éducative"){
            dispatch(updateEducRef(guest_id, ""));
        }else {
            dispatch(updateMedicalRef(guest_id, ""));
        }
    }

    return (
        <>
            <div className="table-responsive pl-3 pr-3">
                <table className="table table-sm">
                    <thead class="bg-warning">
                        <tr class="bg-warning">
                            <th scope="col" className="text-light" colspan="2">Bénéficiare en référence :</th>
                            <th scope="col" className="text-light"></th>
                            <th scope="col" className="text-light" colspan="2">Supprimer :</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td class="table-warning warning" >
                                <img
                                    alt=""
                                    src={guest_picture}
                                    width="40"
                                    height="40"
                                    style={{ 'borderRadius': '5px' }}
                                    className="d-inline-block align-top"
                                />
                            </td>
                            <td class="table-warning mb-3" >{guestName} {guestSurname}</td>
                            <td class="table-warning" ></td>
                            <td class="table-warning" ></td>
                            <td class="table-warning" >
                                <img
                                    onClick={() => handelDeleteRef(guest_id)}
                                    src="./assets/icon/delete.png"
                                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                                    alt="basket_icon"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListRef;