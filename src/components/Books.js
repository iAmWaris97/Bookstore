import './styles/Books.css';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => (
  <div className="books">
    <ul>
      <li className="book">
        <Book title="Introduction to Algorothms" author="Waris Haleem" category="Algorithms" />
      </li>
      <li className="book">
        <Book title="Data Structures in JavaScript" author="Waris Haleem" category="Data" />
      </li>
    </ul>
    <hr className="line" />
    <AddBook />
  </div>
);

export default Books;
