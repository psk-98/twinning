import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL, LOAD_USER, LOGIN, LOGOUT, REGISTER } from "./type"

export const tokenConfig = (getState) => {
  const token = getState().accounts.token

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  if (token) {
    config.headers["Authorization"] = `Token ${token}`
  }

  return config
}

export const loadUser = createAsyncThunk(
  LOAD_USER,
  async (something, { getState, dispatch, rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/user`,
        null,
        tokenConfig(getState)
      )
      return { res }
    } catch (err) {
      console.log(err)
      return rejectWithValue(err?.res)
    }
  }
)

export const login = createAsyncThunk(
  LOGIN,
  async ({ username, password }, { getState, dispatch, rejectWithValue }) => {
    try {
      const body = { username, password }
      console.log(body)
      const res = await axios.post(`${BASE_URL}/login/`, body)

      return { res }
    } catch (err) {
      console.log(err?.response.data)
      return rejectWithValue(err?.res.data.non_field_errors[0])
    }
  }
)

export const logout = createAsyncThunk(
  LOGOUT,
  async (something, { getState, dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/logout/`,
        null,
        tokenConfig(getState)
      )
      return { res }
    } catch (err) {
      console.log(err)
      return rejectWithValue(err?.res)
    }
  }
)

export const register = createAsyncThunk(
  REGISTER,
  async (
    { name, surname, email, password },
    { getState, dispatch, rejectWithValue }
  ) => {
    try {
      const body = {
        first_name: name,
        last_name: surname,
        username: `${email}`,
        email,
        password,
      }
      const res = await axios.post(`${BASE_URL}/register/`, body)
      return { res }
    } catch (err) {
      console.log(err)
      return rejectWithValue(err?.res)
    }
  }
)
