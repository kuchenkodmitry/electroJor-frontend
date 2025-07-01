import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fetchPhone = createAsyncThunk("settings/fetchPhone", async () => {
  const { data } = await axios.get("/settings/phone");
  return data.phone;
});

export const updatePhone = createAsyncThunk(
  "settings/updatePhone",
  async (phone) => {
    const { data } = await axios.put("/settings/phone", { phone });
    return data.phone;
  }
);

const settingsSlice = createSlice({
  name: "settings",
  initialState: { phone: "", status: "loading" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhone.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhone.fulfilled, (state, action) => {
        state.status = "loaded";
        state.phone = action.payload;
      })
      .addCase(fetchPhone.rejected, (state) => {
        state.status = "error";
      })
      .addCase(updatePhone.fulfilled, (state, action) => {
        state.phone = action.payload;
      });
  },
});

export const settingsReducer = settingsSlice.reducer;
