import { createSlice } from "@reduxjs/toolkit";
import { DictionaryState } from './dictionaryTypes';
import { fetchWordDefinition } from './dictionaryThunks';

const initialState: DictionaryState = {
  data: null,
  loading: false,
  error: null,
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWordDefinition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWordDefinition.fulfilled,
        (state, action) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchWordDefinition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dictionarySlice.reducer;
