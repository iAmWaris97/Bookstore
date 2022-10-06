/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { keys } from 'lodash';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import conditions from '../conditions';

const generateBook = (detail) => ({
  item_id: detail.id,
  ...detail,
});

const domain = 'bookstore/books';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const uniqueId = 'ZfZlYIPklYMjNRYjepsF';
const endPoint = `${url}/apps/${uniqueId}/books`;
const setup = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  },
};

const getBook = createAsyncThunk(
  `${domain}/getBook`,
  async () => {
    const response = await axios.get(endPoint, setup);
    return response.detail;
  },
);

const addBook = createAsyncThunk(
  `${domain}/ADDBOOK`,
  async (detail, apiThunk) => {
    const book = generateBook(detail);
    const response = await axios.post(endPoint, book, setup);
    const responseStatus = {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
    if (responseStatus.status === 201) apiThunk.dispatch(getBook());
    return responseStatus;
  },
);

const endPointId = (itemId) => `${endPoint}/${itemId}`;

const removeBook = createAsyncThunk(
  `${domain}/DELETEBOOK`,
  async (itemId, apiThunk) => {
    const response = await axios.delete(endPointId(itemId), setup);

    const responseStatus = {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
    if (responseStatus.status === 201) apiThunk.dispatch(getBook());
    return responseStatus;
  },
);

const booksSlice = createSlice({
  name: domain,
  initialState: {
    loading: conditions.normal,
    books: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.loading = conditions.pending;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.loading = conditions.succeeded;
        const Ids = keys(action.payload);
        state.books = Ids.map((item_id) => ({
          item_id,
          ...action.payload[item_id][0],
        }));
      })
      .addCase(getBook.rejected, (state) => {
        state.loading = conditions.failed;
      })
      .addCase(addBook.pending, (state) => {
        state.loading = conditions.pending;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.loading = conditions.succeeded;
      })
      .addCase(addBook.rejected, (state) => {
        state.loading = conditions.failed;
      })
      .addCase(removeBook.pending, (state) => {
        state.loading = conditions.pending;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.loading = conditions.succeeded;
      })
      .addCase(removeBook.rejected, (state) => {
        state.loading = conditions.failed;
      });
  },
});

const { actions, reducer } = booksSlice;
export {
  actions, getBook, addBook, removeBook,
};

export default reducer;
