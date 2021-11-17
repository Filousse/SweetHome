import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { updateEducRef, updateMedicalRef, getGuests } from "../../../actions/guest.actions"
import { isEmpty } from "../../Utils";
import { useHistory } from "react-router-dom";
import InfoDemo from "../../files/guestFiles/InfoDemo";


const ListNoRef = (props) => {
    const history = useHistory();
    const propsData = { ...props };
    const guestsReducer = useSelector((state) => state.guestsReducer);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        !isEmpty(guestsReducer) && setLoading(false);
    }, [guestsReducer]);
    // Ready for reel Version
    // const handelAddRef = (guestId) => {
    //     if (propsData.user_team === "Éducative") {
    //         dispatch(updateEducRef(guestId, propsData.user_id));
    //         alert("Référence éducative ajouté !");
    //         history.push("/employee");
    //         // window.location.reload();
    //     } else {
    //         dispatch(updateMedicalRef(guestId, propsData.user_id));
    //         dispatch(getGuests());
    //         alert("Référence médical ajouté !");
    //         history.push("/employee");
    //         // window.location.reload();
    //     }
    // }

    return (
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
                                    src={propsData.guest_picture}
                                    width="40"
                                    height="40"
                                    style={{ 'borderRadius': '5px' }}
                                    className="d-inline-block align-top"
                                />
                            </td>
                            <td class="table-info mb-3" >{propsData.guest_name} {propsData.guest_surname}</td>
                            <td class="table-info" ></td>
                            <td class="table-info" ></td>
                            <td class="table-info" >
                                <InfoDemo addRefEmploye={true} />
                                {/* <img
                                    onClick={() => handelAddRef(propsData.guest_id)}
                                    src="./assets/icon/btn_AddRefs.png"
                                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                                    alt="btn_AddRefs"
                                /> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListNoRef;