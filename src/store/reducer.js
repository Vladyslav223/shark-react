import { ACTION_TYPES } from './actions';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

const {
  HANDLE_SUCCESS_FACEBOOK,
  HANDLE_SUCCESS_CONTACTS,
  HANDLE_SUBMIT_REGISTER,
  PRELOADER,
} = ACTION_TYPES;

export const initialState = {
  info: {
      entries: [
        {
          API: '',
          Auth: '',
          Category: '',
          Cors: '',
          Description: '',
          HTTPS: '',
          Link: '',
        }
      ],
    },
  contacts: [],  
  isLoading: false,  
  userKeyFlag: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case HANDLE_SUCCESS_FACEBOOK:
      return {
        ...state,
        info: action.payload.result,
        userKeyFlag: !!action.payload.userKey,
        isLoading: false,
        };

    case HANDLE_SUCCESS_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        userKeyFlag: !!action.payload.userKey,
        isLoading: false,
        };

    case HANDLE_SUBMIT_REGISTER:
        const user = {
          name: action.payload.name,
          pass: action.payload.pass,
        }       

      return {
        ...state,
        };    

    case PRELOADER:
      return {
        ...state,        
        isLoading: true,
        };    

    default:
      return state;
  }
};

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  reducer,
  form: formReducer,
});