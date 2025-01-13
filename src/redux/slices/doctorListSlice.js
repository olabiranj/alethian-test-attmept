import { createSlice } from "@reduxjs/toolkit";
import { doctorData } from "../../utils/data";

const initialState = [...doctorData];

export const doctorsListSlice = createSlice({
  name: "doctorsList",
  initialState,
  reducers: {},
});

export default doctorsListSlice.reducer;
