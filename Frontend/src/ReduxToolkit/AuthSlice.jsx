import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api, setAuthHeader } from "../api/api";

const BASE_URL = "http://example.com"; // Replace with your actual base URL

export const login = createAsyncThunk("auth/signin", async (userData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/login`, userData);
    localStorage.setItem("jwt", data.jwt);
    console.log("login success", data);
    return data;
  } catch (error) {
    console.log(error);
    throw Error(error.response?.data?.error || error.message);
  }
});

export const register = createAsyncThunk("auth/register", async (userData) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/signup`, userData);
    localStorage.setItem("jwt", data.jwt);
    console.log("register success", data);
    return data;
  } catch (error) {
    console.log(error);
    throw Error(error.response?.data?.error || error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    localStorage.clear();
    console.log("logout success");
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
});

export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async (jwt) => {
    setAuthHeader(jwt, api);
    try {
      const { data } = await api.get(`/api/users/profile`);
      console.log("profile fetch success", data);
      return data;
    } catch (error) {
      console.log(error);
      throw Error(error.response?.data?.error || error.message);
    }
  }
);

export const getUserList = createAsyncThunk("auth/getUserList", async (jwt) => {
  setAuthHeader(jwt, api);
  try {
    const { data } = await api.get(`/api/users`);
    console.log("user list fetch success", data);
    return data;
  } catch (error) {
    console.log(error);
    throw Error(error.response?.data?.error || error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loggedIn: false,
    loading: false,
    error: null,
    jwt: null,
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.jwt = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.loggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.jwt = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.loggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.jwt = null;
        state.loggedIn = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
