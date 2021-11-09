import { GET_GUESTS, POST_GUEST, DELETE_GUEST, UPLOAD_PICTURE, UPDATE_EDUC_REF, UPDATE_MEDICAL_REF  } from "../actions/guest.actions"

const initialState = {}

export default function gestReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GUESTS:
            return action.payload;
        case POST_GUEST:
            return action.payload;
        case DELETE_GUEST:
            return action.payload;
        case UPDATE_EDUC_REF:
            return action.payload;
        case UPDATE_MEDICAL_REF:
            return action.payload;
        case UPLOAD_PICTURE:
            return action.payload;
        default:
            return state;
    }
}