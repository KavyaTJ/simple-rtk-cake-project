import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type user = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type initialState = {
  loading: boolean;
  users: user[];
  error: string;
};

const initialState: initialState = {
  loading: false,
  users: [],
  error: "",
};

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data; // Return the full user object array
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<user[]>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message ?? "Something went wrong";
    });
  },
});

export default userSlice.reducer;
