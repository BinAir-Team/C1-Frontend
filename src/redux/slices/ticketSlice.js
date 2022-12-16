import * as ticket from "../services/ticketServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retriveTickets = createAsyncThunk(
  "ticket/retrive",
  async ({ params, redirect }, { rejectWithValue }) => {
    try {
      const res = await ticket.retrive(params);
      redirect && redirect("/flight/search");
      return res.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
      redirect("/flight/search");
      return rejectWithValue(error.response);
    }
  }
);

export const createTickets = createAsyncThunk(
  "tickets/create",
  async (forData, { rejectWithValue }) => {
    try {
      const res = await ticket.create(forData);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    loading: false,
    status: "",
    message: "",
    search: {},
    ticket: [],
  },
  reducers: {
    clearState: (state, action) => {
      return {
        loading: false,
        message: "",
        ticket: [],
        status: "",
        search: {},
      };
    },
    setSearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
  },
  extraReducers: {
    [retriveTickets.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveTickets.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        ticket: action.payload.data,
        status: action.payload.status,
      };
    },
    [retriveTickets.rejected]: (state, action) => {
      console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        ticket: action.payload.data.data,
        status: action.payload.data.status,
      };
    },
    [createTickets.pending]: (state, action) => {
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        loading: true,
      };
    },
    [createTickets.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        status: action.payload.status,
        ticket: [...state.ticket, action.payload.data],
      };
    },
    [createTickets.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
        message: action.payload.data.message,
      };
    },
  },
});

export const { setSearch } = ticketSlice.actions;
export default ticketSlice.reducer;
