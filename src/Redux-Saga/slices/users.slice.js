import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  usersLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.usersLoading = true;
      state.error = null;
    },
    fetchUsersSuccesss(state, action) {
      state.usersLoading = false;
      state.users = [...action.payload];
    },
    fetchUsersError(state, action) {
      state.usersLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccesss,
  fetchUsersError,
} = userSlice.actions;

export default userSlice.reducer;
