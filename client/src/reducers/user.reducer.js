import { GET_USER, UPLOAD_PICTURE, UPDATE_BIO, DELETE_USER } from "../actions/user.actions"

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER: 
            return action.payload
        case UPLOAD_PICTURE:
            return {
                ...state,
                photoProfil: action.payload,
            }
        case UPDATE_BIO: 
            return {
                ...state,
                bio: action.payload,
            }
        case DELETE_USER:
            return action.payload
        default:
            return state;
    }
}