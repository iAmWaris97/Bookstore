import bookDetail from '../bookDetail';

const ADD = 'bookstore/components/books/ADD_BOOK';
const REMOVE = 'bookstore/components/books/REMOVE_BOOK';
const initialState = {
  books: [],
};

const adding = (state, detail) => [...state.books, bookDetail(detail)];
const removing = (state, id) => state.books.filter((x) => x.id !== id);
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return adding(state, action.detail);
    case REMOVE:
      return removing(state);
    default:
      return state;
  }
};

const addBoook = (detail) => ({ type: ADD, detail });
const removeBook = (id) => ({ type: REMOVE, id });

export { addBoook, removeBook };
export default reducer;
