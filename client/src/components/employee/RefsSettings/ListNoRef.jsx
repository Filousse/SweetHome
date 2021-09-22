import React from 'react';
import { useDispatch } from "react-redux";
import { updateEducRef, updateMedicalRef } from "../../../actions/guest.actions"

const ListNoRef = (props) => {
    const user_id = props.user_id;
    const guest_id = props.guest_id;
    const guestName = props.guest_name;
    const guestSurname = props.guest_surname;
    const guest_picture = props.guest_picture;
    const user_team = props.user_team;
    const guest_adminName = props.guest_adminName;
    const user_adminName = props.user_adminName;
    const dispatch = useDispatch();

    const handelAddRef = () => {
        if (user_team === "Éducative") {
            // console.log("user_adminName=>", user_adminName);
            // console.log("user_team =>", user_team);
            // console.log("user_id ADD EDUC=>", user_id);
            // console.log("guest_id ADD EDUC=>", guest_id);
            dispatch(updateEducRef(guest_id, user_id));
        } else {
            // console.log("user_adminName=>", user_adminName);
            // console.log("user_team =>", user_team);
            // console.log("user_id ADD MEDICAL=>", user_id);
            // console.log("guest_id ADD MEDICAL=>", guest_id);
            dispatch(updateMedicalRef(guest_id, user_id));
        }
    }

    return (
        <>
            {user_adminName === guest_adminName  &&
                <>
                    <div className="table-responsive pl-3 pr-3">
                        <table className="table table-sm">
                            <thead class="bg-info">
                                <tr class="bg-info">
                                    <th scope="col" className="text-light" colspan="2">Bénéficiare sans référence :</th>
                                    <th scope="col" className="text-light"></th>
                                    <th scope="col" className="text-light" colspan="2">Ajouter :</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td class="table-info info" >
                                        <img
                                            alt=""
                                            src={guest_picture}
                                            width="40"
                                            height="40"
                                            style={{ 'borderRadius': '5px' }}
                                            className="d-inline-block align-top"
                                        />
                                    </td>
                                    <td class="table-info mb-3" >{guestName} {guestSurname}</td>
                                    <td class="table-info" ></td>
                                    <td class="table-info" ></td>
                                    <td class="table-info" >
                                        <img
                                            onClick={() => handelAddRef(guest_id)}
                                            src="./assets/icon/add-beneficiary.png"
                                            style={{ width: "30px", height: "30px", cursor: "pointer" }}
                                            alt="basket_icon"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </>
    );
};

export default ListNoRef;