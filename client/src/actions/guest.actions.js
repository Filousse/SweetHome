import axios from 'axios';

export const GET_GUESTS = "GET_GUESTS";
export const POST_GUEST = "POST_GUEST";
export const DELETE_GUEST = "DELETE_GUEST"; 
export const UPLOAD_GUEST_PIC = "UPLOAD_GUEST_PIC";
export const UPDATE_EDUC_REF = "UPDATE_EDUC_REF";
export const UPDATE_MEDICAL_REF = "UPDATE_MEDICAL_REF"

export const GET_USER_ERRORS = "GET_USER_ERRORS"
export const GET_GUEST_ERRORS = "GET_GUEST_ERRORS"

export const getGuests = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/guest`)
            .then((res) => {
                dispatch({type: GET_GUESTS, payload: res.data });
            })
            .catch((err)=>console.log(err));
    }
}

export const addGuest = (name, surname, dateBirthday, adminName, educRef, medicalRef) => {
    return(dispatch) => {  
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/guest`,
            data: {
              name,
              surname,
              dateBirthday,
              adminName,
              educRef,
              medicalRef,
            },
          })
        .then((res)=> {
            axios.get(`${process.env.REACT_APP_API_URL}api/guest`)
            .then((res) =>{
                dispatch({type: GET_GUESTS, payload: res.data });
            })
            .catch((err)=> console.log(err));
        })
        .catch((err)=> console.log(err));
    }
}

export const deleteGuest = (guestId) => {
    return(dispatch) => {
        axios.delete(`${process.env.REACT_APP_API_URL}api/guest/`+ guestId)
        .then((res)=> {
            axios.get(`${process.env.REACT_APP_API_URL}api/guest`)
            .then((res) =>{
                dispatch({type: DELETE_GUEST, payload: res.data });
            })
            .catch((err)=> console.log(err));
        })
        .catch((err)=> console.log(err));
    }
}

export const uploadGuestPicture = ( data, id ) => {
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_API_URL}api/guest/upload`, data )
        .then((res) => {
            if (res.data.errors) {
              dispatch({ type: GET_GUEST_ERRORS, payload: res.data.errors });
            } else {
              dispatch({ type: GET_GUEST_ERRORS, payload: "" });
            }  
        })
        return axios.get(`${process.env.REACT_APP_API_URL}api/guest/` + id)
        .then((res)=> {
            dispatch({ type: UPLOAD_GUEST_PIC, payload: res.data });
        })
    }
}

export const updateEducRef = ( guestId, educRef ) => {
    return (dispatch) => {
      return axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/guest/educRef/` + guestId,
        data: { educRef },
      })
        .then((res) => {
            dispatch({ type: UPDATE_EDUC_REF, payload: educRef });
        })
        .catch((err) => console.log(err));
    };
};

export const updateMedicalRef = ( guestId, medicalRef ) => {
    return (dispatch) => {
      return axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/guest/medicalRef/` + guestId,
        data: { medicalRef },
      })
        .then((res) => {
            dispatch({ type: UPDATE_EDUC_REF, payload: medicalRef });
        })
        .catch((err) => console.log(err));
    };
};
