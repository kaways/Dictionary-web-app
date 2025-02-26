import { configureStore, ThunkAction, Action  } from "@reduxjs/toolkit";
import dictionaryReducer from './dictionary/dictionarySlice';

const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
