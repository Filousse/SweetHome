import { GET_GUEST_ERRORS } from "../actions/guest.actions";
import { GET_USER_ERRORS } from "../actions/user.actions";

const initialState = { postError: [], userError: [], guestError:[] };

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GUEST_ERRORS:
      return {
        guestError: action.payload,
        postError: []
      }
    case GET_USER_ERRORS:
      return {
        userError: action.payload,
        postError: []
      }
    default: 
      return state;
  }
}