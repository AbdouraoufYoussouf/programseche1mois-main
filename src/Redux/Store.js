import {configureStore} from '@reduxjs/toolkit';
import secheSlice  from './SecheSlice';


export const store = configureStore({
    reducer : {
        secheState : secheSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
      })
});