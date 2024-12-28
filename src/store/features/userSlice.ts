import { useAppSelector } from "@/hooks/useRedux";
import checkJWTExpiration from "@/lib/checkJWTExpiration";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const checkAuth = createAsyncThunk(
  `user/checkAuth`,
  (_, { dispatch }) => {
    try {
      const token = window.localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const isTokenExpired = checkJWTExpiration(token);

      if (isTokenExpired) {
        throw new Error("Token expired");
      }

      dispatch(authenticate({ token }));
      return null;
    } catch {
      dispatch(logout());
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    authenticate(state, action) {
      const token = action.payload.token;
      state.token = token;
      window.localStorage.setItem("token", token);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      window.localStorage.removeItem("token");
    },
  },
});

export const { setUser, authenticate, logout } = userSlice.actions;

export const useIsAuthenticated = () =>
  useAppSelector((state) => state.user.token !== null);
export const useUserDetailsSelector = () =>
  useAppSelector((store) => store.user);

export default userSlice.reducer;
