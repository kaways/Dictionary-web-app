import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWordDefinition = createAsyncThunk(
  "dictionary/fetchWordDefinition",
  async (word: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
