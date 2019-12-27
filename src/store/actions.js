import axios from "axios";

export const ACTION_TYPES = {
  LOGIN: "LOGIN",
  PRELOADER: "PRELOADER",
  HANDLE_SUCCESS_CONTACTS: "HANDLE_SUCCESS_CONTACTS",
  HANDLE_SUCCESS_FACEBOOK: "HANDLE_SUCCESS_FACEBOOK",
  HANDLE_SUCCESS_POSTLIST: "HANDLE_SUCCESS_POSTLIST",
  HANDLE_SUCCESS_USERLIST: "HANDLE_SUCCESS_USERLIST",
  HANDLE_SUBMIT_REGISTER: "HANDLE_SUBMIT_REGISTER",
  HANDLE_SUCCESS_COMMENTS: "HANDLE_SUCCESS_COMMENTS",
  HANDLE_OPEN_USER: "HANDLE_OPEN_USER",
  HANDLE_DELETE_COMMENT: "HANDLE_DELETE_COMMENT",
  HANDLE_EDIT_COMMENT: "HANDLE_EDIT_COMMENT"
};

const {
  HANDLE_SUCCESS_FACEBOOK,
  HANDLE_SUCCESS_CONTACTS,
  HANDLE_SUBMIT_REGISTER,
  HANDLE_SUCCESS_POSTLIST,
  HANDLE_SUCCESS_USERLIST,
  HANDLE_SUCCESS_COMMENTS,
  HANDLE_DELETE_COMMENT,
  HANDLE_EDIT_COMMENT,
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

export const handleDeleteComment = payload => ({
  type: HANDLE_DELETE_COMMENT,
  payload
});

export const handleEditComment = payload => {
  return {
    type: HANDLE_EDIT_COMMENT,
    payload
  };
};

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

// export const connectWithDB = a => async dispatch => {
//   const { name, pass, confirmPass } = a;
//   const response = await axios.post(name, pass, confirmPass).then(res => {});
//   const result = response.json();
//   dispatch(handleSubmitRegister({ name, pass, confirmPass }));
// };

export const loadPostList = () => dispatch => {
  axios.get(API_URL_POSTLIST).then(res => {
    const result = res.data;
    dispatch(handleSuccessPostlist({ result }));
  });
};

export const loadUserList = () => dispatch => {
  axios.get(API_URL_USERLIST).then(res => {
    const result = res.data;
    dispatch(handleSuccessUserlist({ result }));
  });
};

export const loadCommentList = () => dispatch => {
  axios.get(API_URL_COMMENTS).then(res => {
    const result = res.data;
    dispatch(handleSuccessComments({ result }));
  });
};

export const deleteComment = id => dispatch => {
  const URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  axios.delete(URL).then(res => {
    console.log(res);
  });
  dispatch(handleDeleteComment(id));
};

export const editComment = (values, id) => dispatch => {
  const URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  axios
    .put(URL, {
      name: values[0],
      body: values[1],
      id
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  dispatch(handleEditComment({ values, id }));
};

export const loadFacebookData = () => dispatch => {
  axios.get(API_URL_INFO).then(res => {
    const result = res.data.entries[0];
    dispatch(handleSuccessFacebook({ result }));
  });
};

export const loadContactsData = () => async dispatch => {
  axios.get(API_URL_CONTACTS).then(res => {
    const result = res.data.results;
    dispatch(handleSuccessContacts(result));
  });
};

export const onClickUser = user => dispatch => {
  dispatch(handleOpenUser(user));
};
