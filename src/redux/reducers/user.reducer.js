import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userFetched: (user, action) => {
      return action.payload;
    },
    userDismissed: (user, action) => {
      return {};
    },
  },
});

export const { userFetched, userDismissed } = slice.actions;

export default slice.reducer;

// Selectors

const selectAuth = (state) => state.auth;

export const selectUser = createSelector(selectAuth, (el) => el.user);
