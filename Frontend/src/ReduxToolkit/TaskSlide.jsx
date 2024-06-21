import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../api/api";

export const fetchTasks = createAsyncThunk(
  "task/fetchTasks",
  async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.get("/api/tasks", {
        params: { status },
      });
      console.log("fetch tasks: ", data);
      return data;
    } catch (error) {
      console.log(error);
      throw Error(error.response.data.error);
    }
  }
);

export const fetchUsers = createAsyncThunk(
  "task/fetchUsersTasks",
  async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.get("/api/tasks/users", {
        params: { status },
      });
      console.log("fetch tasks: ", data);
      return data;
    } catch (error) {
      console.log(error);
      throw Error(error.response.data.error);
    }
  }
);

export const fetchTasksById = createAsyncThunk(
  "task/fetchUsersTasks",
  async ({ taskId }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.get(`/api/tasks/${taskId}`);
      console.log("fetch tasks: ", data);
      return data;
    } catch (error) {
      console.log(error);
      throw Error(error.response.data.error);
    }
  }
);

export const createTask = createAsyncThunk(
  "task/createTask",
  async ({ taskData }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.post("/api/tasks", taskData);
      console.log("created  tasks: ", data);
      return data;
    } catch (error) {
      console.log(error);
      throw Error(error.response.data.error);
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/createTask",
  async ({ id, updatedTaskData }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
      const { data } = await api.post(`/api/tasks/${id}`, updatedTaskData);
      console.log("created  tasks: ", data);
      return data;
    } catch (error) {
      console.log(error);
      throw Error(error.response.data.error);
    }
  }
);
