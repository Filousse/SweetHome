import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateEducRef, updateMedicalRef } from "../../../actions/guest.actions"
import { isEmpty } from "../../Utils";
import { useHistory } from "react-router-dom"


const ListRef = (props) => {
    const history = useHistory();
    const [ loading, setLoading ] = useState(false);
    const guestsReducer = useSelector((state) => state.guestsReducer);
    const propsData = {...props};
    const dispatch = useDispatch();

    useEffect(() => {
        !isEmpty(guestsReducer) && setLoading(false);
    }, [guestsReducer]);

    const handelDeleteRef = () => {
        if (propsData.user_team === "Éducative") {
            dispatch(updateEducRef(propsData.guest_id, ""));
            alert("Référence supprimé !");
            history.push("/employee");
            window.location.reload();
        } else {
            dispatch(updateMedicalRef(propsData.guest_id, ""));
            alert("Référence supprimé !");
            history.push("/employee");
            window.location.reload();
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
                                    src={propsData.guest_picture}
                                    width="40"
                                    height="40"
                                    style={{ 'borderRadius': '5px' }}
                                    className="d-inline-block align-top"
                                />
                            </td>
                            <td class="table-warning mb-3" >{propsData.guest_name} {propsData.guest_surname}</td>
                            <td class="table-warning" ></td>
                            <td class="table-warning" ></td>
                            <td class="table-warning" >
                                <img
                                    onClick={() => handelDeleteRef(propsData.guest_id)}
                                    src="./assets/icon/btn_Delete.png"
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