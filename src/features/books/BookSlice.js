import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "./bookService";

const initialState = {
  posts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAllBooks = createAsyncThunk(
  "book/getAllBooks",
  async (_, thunkAPI) => {
    try {
      return await bookService.getAllPosts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const addBook = createAsyncThunk(
  "book/addNewBook",
  async (post, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bookService.addNewPost(post, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const approvepost = createAsyncThunk(
//   "post/approvepost",
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await postService.changepostStatus(id, "approved", token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

const postSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addNewPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books.push(action.payload);
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
