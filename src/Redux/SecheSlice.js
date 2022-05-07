import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Data from "../Data/Datas";

const initialState = {
    seche : Data,
    getSecheStatus : "",
    getSecheError : "",
};

export const secheSlice = createSlice({
    name: 'seche',
    initialState:initialState,
    reducers:{}
})