//import { axios } from "axios";

export const ACTION_TYPES = {
    LOGIN: 'LOGIN',
    PRELOADER: 'PRELOADER',
    HANDLE_SUCCESS_CONTACTS: 'HANDLE_SUCCESS_CONTACTS',
    HANDLE_SUCCESS_FACEBOOK: 'HANDLE_SUCCESS_FACEBOOK',
    HANDLE_SUBMIT_REGISTER: 'HANDLE_SUBMIT_REGISTER',
    };
  
const {
  HANDLE_SUCCESS_FACEBOOK,
  HANDLE_SUCCESS_CONTACTS,
  HANDLE_SUBMIT_REGISTER,
  PRELOADER,  
} = ACTION_TYPES;

const API_URL_INFO = 'https://api.publicapis.org/random';
const API_URL_CONTACTS = 'https://randomuser.me/api/?page=1&results=10&seed=abc';

//actions
export const handleSuccessFacebook = ({ result, userKey }) => ({
    type: HANDLE_SUCCESS_FACEBOOK,
    payload: { result, userKey },
});

export const handleSubmitRegister = ({ name, pass }) => ({
    type: HANDLE_SUBMIT_REGISTER,
    payload: { name, pass },
});

export const handleSuccessContacts = payload => {
    return {
    type: HANDLE_SUCCESS_CONTACTS,
    payload,
}};

export const preLoader = () => ({ type: PRELOADER });

//functions
export const connectWithDB = (name, pass, confirmPass) => async dispatch => {
    
    //     console.log('ddd');
    // const response = await axios.post(`mongodb+srv://cluster0-jyrjb.mongodb.net/test`)
    //     .then(res => {
    //       console.log(res);
    //     });
    // const result = response.json();

    //dispatch(handleSubmitRegister({ name, pass, confirm }));
}

export const loadFacebookData = () => async dispatch => {
    console.log('rrr');
    const response = await fetch(API_URL_INFO);
    const info = await response.json();
    const result = info.entries[0];

    dispatch(handleSuccessFacebook({ result }));
}

export const loadContactsData = () => async dispatch => {
    const response = await fetch(API_URL_CONTACTS);
    const { results } = await response.json();
    
    dispatch(handleSuccessContacts(results));
}

  