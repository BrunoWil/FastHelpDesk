import { createStore } from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './userReducer';
const persistConfig = {
    key: 'fasthelp',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };