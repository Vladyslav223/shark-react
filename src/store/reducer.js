import { ACTION_TYPES } from "./actions";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";

const {
  HANDLE_SUCCESS_FACEBOOK,
  HANDLE_SUCCESS_CONTACTS,
<<<<<<< HEAD
  //HANDLE_SUBMIT_REGISTER,
  HANDLE_SUCCESS_POSTLIST,
  HANDLE_SUCCESS_USERLIST,
  HANDLE_SUCCESS_COMMENTS,
  HANDLE_DELETE_COMMENT,
  HANDLE_EDIT_COMMENT,
=======
  HANDLE_SUBMIT_REGISTER,
  HANDLE_SUCCESS_POSTLIST,
  HANDLE_SUCCESS_USERLIST,
  HANDLE_SUCCESS_COMMENTS,
>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7
  HANDLE_OPEN_USER,
  PRELOADER
} = ACTION_TYPES;

export const initialState = {
  info: {
    entries: [
      {
        API: "",
        Auth: "",
        Category: "",
        Cors: "",
        Description: "",
        HTTPS: "",
        Link: ""
      }
    ]
  },
<<<<<<< HEAD
  comment: {
    name: null,
    body: null,
    id: null
  },

  user: null,
=======
  currentUser: null,
>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7
  posts: [],
  contacts: [],
  isLoading: false,
  userKeyFlag: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SUCCESS_FACEBOOK:
      return {
        ...state,
        info: action.payload.result,
        userKeyFlag: !!action.payload.userKey,
        isLoading: false
      };

    case HANDLE_SUCCESS_POSTLIST:
      return {
        ...state,
        posts: action.payload.result,
        isLoading: false
      };

    case HANDLE_SUCCESS_COMMENTS:
      return {
        ...state,
        comments: action.payload.result,
        isLoading: false
      };

<<<<<<< HEAD
    case HANDLE_DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload
        )
      };

    case HANDLE_EDIT_COMMENT:
      return {
        ...state,
        comment: {
          name: action.payload.values.UserCommentTitle,
          body: action.payload.values.UserCommentBody,
          id: action.payload.id
        }
      };

=======
>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7
    case HANDLE_SUCCESS_USERLIST:
      return {
        ...state,
        userList: action.payload.result,
        isLoading: false
      };

    case HANDLE_SUCCESS_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        userKeyFlag: !!action.payload.userKey,
        isLoading: false
      };
<<<<<<< HEAD
=======

    case HANDLE_SUBMIT_REGISTER:
      const user = {
        name: action.payload.name,
        pass: action.payload.pass
      };
>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7

    case HANDLE_OPEN_USER:
      return {
        ...state,
<<<<<<< HEAD
        user: action.payload
=======
        currentUser: action.payload
>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7
      };

    case PRELOADER:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
};

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    reducer,
    form: formReducer
  });
