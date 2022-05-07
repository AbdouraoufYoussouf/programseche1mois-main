import {configureStore} from '@reduxjs/toolkit';
import { secheSlice } from './SecheSlice';


export const store = configureStore({
    reducer : {
        secheState : secheSlice.reducer,
    }
});