import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: { email: "", nom: "", prenom: "", address: "" }
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = { email: "", nom: "", prenom: "", address: "" }
        }
    }

})
export const { login, logout } = userSlice.actions
export default userSlice.reducer