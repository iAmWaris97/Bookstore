import './styles/Books.css';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <div className="books">
      {bookList.map((b) => (
        <ul key={0}>
          <li className="book">
            <Book
              key={b.id + b.title}
              title={b.title}
              author={b.author}
              id={b.id}
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
