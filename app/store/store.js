import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(reduxThunk))
);

export default store;
