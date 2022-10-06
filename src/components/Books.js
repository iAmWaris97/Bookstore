import './styles/Books.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBook } from '../redux/Books/Books';
import conditions from '../redux/conditions';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.books);
  const load = useSelector((state) => state.books.loading);
  useEffect(() => {
    if (load === conditions.idle) dispatch(getBook());
  }, [dispatch]);
  return (
    <div className="books">
      {bookList.map((b) => (
        // eslint-disable-next-line react/jsx-key
        <ul>
          <li className="book">
            <Book
              key={b.item_id}
              title={b.title}
              author={b.author}
              id={b.item_id}
            />
          </li>
        </ul>
      ))}
      <hr className="line" />
      <AddBook />
    </div>
  );
};

export default Books;
