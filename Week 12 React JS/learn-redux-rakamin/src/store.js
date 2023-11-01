import {configureStore} from "@reduxjs/toolkit";

import counterReducer from "./reduxToolkit";

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});