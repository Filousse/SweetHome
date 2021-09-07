/////////////////// NEW //////////////////////////////////////////////////////////////////////
// Logger une donnée du state rapidement ;)
const handelLog = () => {
    console.log("createEmployee=>", createEmployee);
}
<button onClick={handelLog}>handelLog</button>

/////////////////// NEW //////////////////////////////////////////////////////////////////////
// importer une donnée d'un reducer ;)
import { useSelector } from 'react-redux'
const userData = useSelector((state) => state.userReducer);
// exemple à utiliser dans render :
userData.name, userData.surname

/////////////////// NEW //////////////////////////////////////////////////////////////////////
// affichage conditionné
{
    error.format &&
    <p class="text-danger"> {error.format}</p>
}

/////////////////// NEW //////////////////////////////////////////////////////////////////////
// NEW affichage conditionné double
{createEmployee
        ? <h2 className="text-center mb-4">Je crée un compte employé : </h2>
        : <h2 className="text-center mb-4">Je créer mon compte :</h2>
}

/////////////////// NEW //////////////////////////////////////////////////////////////////////
// affichage conditionner double de plusieurs tags 
{formSubmit
        ? (
            <>
                <Container className="justify-content-center m-4">
                    <div class="alert alert-success" role="alert">Compte de l'employer {userSurname.name} {userSurname.surname}  supprimer.</div>
                    <Button onClick={window.location = "/employee"}>retour à la liste des employés</Button>
                </Container>
            </>
        ) : ( 
            <>
                <Container className="justify-content-center m-4">
                    <div class="alert alert-success" role="alert">Compte de l'employer {userSurname.name} {userSurname.surname}  supprimer.</div>
                    <Button onClick={window.location = "/employee"}>retour à la liste des employés</Button>
                </Container>
            </>
        )
}

/////////////////// NEW //////////////////////////////////////////////////////////////////////
// affichage conditionner valeur à true
{formSubmit &&
    <>
    </>
}

/////////////////// NEW //////////////////////////////////////////////////////////////////////
// updateBio axios & redux payload: get bio
// 1) dans le component qui envoi l'action => axios redux ex/ ProfilUpdate.jsx
import { useDispatch } from "react-redux";
const dispatch = useDispatch();
const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio)); // en préparation
  };

// 2) dans action écrire les fonction axios et dispatch ex/ user.actions.jsx
import axios from 'axios';
export const UPDATE_BIO = "UPDATE_BIO";
export const updateBio = (userId, bio) => {
    return (dispatch) => {
      return axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
        data: { bio },
      })
        .then((res) => {
          dispatch({ type: UPDATE_BIO, payload: bio });
        })
        .catch((err) => console.log(err));
    };
  };

// 3) faire le reducer
import { GET_USER, UPLOAD_PICTURE, UPDATE_BIO } from "../actions/user.actions"
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
        default:
            return state;
    }
}

// 4) si création d'un nouveau ficheir reducer le connecter à action/index.js
import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';

export default combineReducers({
    userReducer,
    usersReducer,
});

// 5) Hydrater au store le store au plus haut Get => ex/ getUsers dans index.jsx}
import { getUsers } from './actions/users.actions';
store.dispatch(getUsers())
// 5) Ou hydrater le store ailleurs pour prendre un argument au passage ex/ index.js
import { getUser } from './actions/user.actions';
dispatch(getUser(uid));
// 5) Ou ne pas hydrater et laisser faire dispatch(action function)

//6) Aller cherher la data du payload dispatcher : useSelector
import { useSelector } from 'react-redux'
const userData = useSelector((state) => state.userReducer);
{userData.name}

//INFO De fonctionnement logique des payload : 
// On est obliger d'hydrate le plus haut possible a partir du moment ou l'on attrape 
// ,dans le bon component, le(s) argument necessaire pour envoyer l'action. (ex: uploadImage, UploadBio)
// Mais il est également pratique de faire des get des collections db pour hydrater tout les 
// components au plus haut possible pour permettre des useSelector() partout! (ex: getUsers, getUser)
// Même pour changer une data d'une collection déjà hydrater, il est bon de faire un payload.
// Car cela lance l'hydratation de suite et actualise les reducers!

////////////////// NEW //////////////////////////////////////////////////////////////////////



