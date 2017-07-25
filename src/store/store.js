import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';


/* eslint-disable */
<<<<<<< HEAD

=======
const persistedState = localStorage.getItem('applican_store') ? JSON.parse(localStorage.getItem('applican_store')) : {};
>>>>>>> fix(store): fix bug preventing reading from local storage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
/* eslint-enable */

export default store;
