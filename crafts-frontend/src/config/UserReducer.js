import { createAsyncThunk, createSlice, createReducer } from "@reduxjs/toolkit";
import Axios from 'axios';
import { BASE_URL } from "./Endpoints";

export const signInUser = createAsyncThunk("signInUser",
    async (data) => {
        //console.log("data from slice", data);
        const response = await Axios.post(BASE_URL + "/oauth/oauth2/login", {}, {
            auth: {
                username: data.username,
                password: data.password
            }
         });
        //console.log("response", response);
        //  .then(response => {
        //     console.log("response", response);

        //     // return response;

        //     // if (response.status === 200) {
        //     //     dispatch(addUser(
        //     //         {
        //     //             users: response.data,
        //     //             loading: false
        //     //         }
        //     //     ))
        //     //     localStorage.setItem("users", JSON.stringify(response.data));
        //     //     navigate("/");
        //     // }
        // }).catch((error) => {
        //     // alert(error.response.status)
        //     // navigate("/error", { state: { data: error.response.status } })
        // })

        // const result = await response.json();
        // console.log("result: ", result);
        return response;
    }
);

export const categoryData = createAsyncThunk("categoryData",
    (data) => {
        console.log("category data from slice", data);
        return data;
    }
);


const userSlice = createSlice({
    name: "users",
    initialState: {
        users: {},
        categoryData: {},
        loading: false,
        error: null,
    },
    reducers: {
        addUser: (state, action) => {

        },
        addCategory: (state, action) => {
            console.log("category action...", action.payload);
            state.loading = false;
            state.categoryData = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(signInUser.fulfilled, (state, action) => {
            //console.log("action...", action.payload);
            state.loading = false;
            state.users = action.payload.data;
            localStorage.setItem("users", JSON.stringify(action.payload.data));
        })
    }

})

// const categoryDataSlice = createSlice({
//     name: "categoryItem",
//     initialState: {
//         categoryData: {},
//         loading: false,
//         error: null,
//     },
//     reducers: {
//         addCategory: (state, action) => {
//             console.log("category action...", action.payload);
//             state.loading = false;
//             state.categoryData = action.payload.data;
//         }
//     },
//     extraReducers: builder => {
//         builder.addCase(categoryData.fulfilled, (state, action) => {
            
//             //localStorage.setItem("users", JSON.stringify(action.payload.data));
//         })
//     }

// })

export const { addUser, addCategory } = userSlice.actions;
export default userSlice.reducer;

// export const { addCategory } = categoryDataSlice.actions;
// export default categoryDataSlice.reducer;