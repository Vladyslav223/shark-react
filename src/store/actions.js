import { axios } from "axios";

export const ACTION_TYPES = {
  LOGIN: "LOGIN",
  PRELOADER: "PRELOADER",
  HANDLE_SUCCESS_CONTACTS: "HANDLE_SUCCESS_CONTACTS",
  HANDLE_SUCCESS_FACEBOOK: "HANDLE_SUCCESS_FACEBOOK",
  HANDLE_SUCCESS_POSTLIST: "HANDLE_SUCCESS_POSTLIST",
  HANDLE_SUCCESS_USERLIST: "HANDLE_SUCCESS_USERLIST",
  HANDLE_SUBMIT_REGISTER: "HANDLE_SUBMIT_REGISTER",
  HANDLE_SUCCESS_COMMENTS: "HANDLE_SUCCESS_COMMENTS",
  HANDLE_OPEN_USER: "HANDLE_OPEN_USER"
};

const {
  HANDLE_SUCCESS_FACEBOOK,
  HANDLE_SUCCESS_CONTACTS,
  HANDLE_SUBMIT_REGISTER,
  HANDLE_SUCCESS_POSTLIST,
  HANDLE_SUCCESS_USERLIST,
  HANDLE_SUCCESS_COMMENTS,
  HANDLE_OPEN_USER,
  PRELOADER
} = ACTION_TYPES;

const API_URL_INFO = "https://api.publicapis.org/random";
const API_URL_CONTACTS =
  "https://randomuser.me/api/?page=1&results=10&seed=abc";
const API_URL_POSTLIST = "http://jsonplaceholder.typicode.com/posts";
const API_URL_USERLIST = "http://jsonplaceholder.typicode.com/users";
const API_URL_COMMENTS = "http://jsonplaceholder.typicode.com/comments";

//actions
export const handleSuccessPostlist = payload => ({
  type: HANDLE_SUCCESS_POSTLIST,
  payload
});

export const handleSuccessUserlist = payload => ({
  type: HANDLE_SUCCESS_USERLIST,
  payload
});

export const handleSuccessComments = payload => ({
  type: HANDLE_SUCCESS_COMMENTS,
  payload
});

export const handleSuccessFacebook = ({ result }) => ({
  type: HANDLE_SUCCESS_FACEBOOK,
  payload: { result }
});

export const handleSubmitRegister = ({ name, pass }) => ({
  type: HANDLE_SUBMIT_REGISTER,
  payload: { name, pass }
});

export const handleSuccessContacts = payload => {
  return {
    type: HANDLE_SUCCESS_CONTACTS,
    payload
  };
};

export const handleOpenUser = payload => {
  return {
    type: HANDLE_OPEN_USER,
    payload
  };
};

export const preLoader = () => ({ type: PRELOADER });

//functions
export const connectWithDB = a => async dispatch => {
  const { name, pass, confirmPass } = a;
  const response = await axios.post(name, pass, confirmPass).then(res => {});
  const result = response.json();

  dispatch(handleSubmitRegister({ name, pass, confirmPass }));
};

export const loadPostList = () => async dispatch => {
  const response = await fetch(API_URL_POSTLIST);
  const result = await response.json();
  dispatch(handleSuccessPostlist({ result }));
};

export const loadUserList = () => async dispatch => {
  const response = await fetch(API_URL_USERLIST);
  const result = await response.json();
  dispatch(handleSuccessUserlist({ result }));
};

export const loadCommentList = () => async dispatch => {
  const response = await fetch(API_URL_COMMENTS);
  const result = await response.json();
  dispatch(handleSuccessComments({ result }));
};

export const loadFacebookData = () => async dispatch => {
  const response = await fetch(API_URL_INFO);
  const info = await response.json();
  const result = info.entries[0];

  dispatch(handleSuccessFacebook({ result }));
};

export const loadContactsData = () => async dispatch => {
  const response = await fetch(API_URL_CONTACTS);
  const { results } = await response.json();
  console.log(results);
  dispatch(handleSuccessContacts(results));
};

export const onClickUser = id => dispatch => {
  dispatch(handleOpenUser(id));
};
