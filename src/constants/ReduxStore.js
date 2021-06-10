import RootReducer from "../reducers/rootReducer";
import { createStore } from 'redux';

export const store = createStore(RootReducer);
