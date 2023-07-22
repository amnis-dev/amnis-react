import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { stateSet } from '@amnis/state';
import { webSet } from '@amnis/state/web';

export const store = configureStore({
  reducer: combineReducers({
    ...stateSet.reducers,
    ...webSet.reducers,
  }),
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat([...stateSet.middleware ,...webSet.middleware])
  ),
});