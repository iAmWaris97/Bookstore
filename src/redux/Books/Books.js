import bookDetail from '../bookDetail';

const ADD = 'bookstore/components/books/ADD_BOOK';
const REMOVE = 'bookstore/components/books/REMOVE_BOOK';
const initialState = [
  {
    id: '1s',
    title: 'Introduction to Algorothm',
    author: 'Waris Haleem',
  },
  {
    id: '2s',
    title: 'Data Structures in JavaScript',
    author: 'Waris Haleem',
  },
];

const adding = (state, detail) => {
  const coming = bookDetail(detail);
  const comings = [...state, coming];
  return comings;
};

const removing = (state, id) => {
  const detail = state.filter((x) => x.id !== id);
  return detail;
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return adding(state, action.detail);
    case REMOVE:
      return removing(state, action.id);
    default:
      return state;
  }
};

const addBoook = (detail) => ({ type: ADD, detail });
const removeBook = (id) => ({ type: REMOVE, id });

export { addBoook, removeBook };
export default reducer;
