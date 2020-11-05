import { createStore } from "redux";

const INITIAL_STATE = {
    text: '',
    sentiments:[]
  };
  const rootReducer = (state, action) => {
    switch (action.type) {
      case 'analyzed':
        return {
          ...state,
          sentiments: action.sentiments
        };
      case 'update-text':
        return {
          ...state,
          text: action.text,
        };
      default:
        return state;
    }
  };
  const store = createStore(
    rootReducer,
    INITIAL_STATE,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  export {
    INITIAL_STATE,
    rootReducer,
    store
  }