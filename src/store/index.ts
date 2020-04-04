import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import app, { AppStore } from "./app/reducer";
import image, { ImageStore } from "./image/reducer";

const persistConfig = {
  key: "root",
  whitelist: ["persisted"],
  storage,
};

export const reducers = combineReducers({
  app,
  image,
});

export type Store = {
  app: AppStore;
  image: ImageStore;
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
