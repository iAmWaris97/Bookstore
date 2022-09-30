import Book from './Book';
import AddBook from './AddBook';

const Books = () => (
  <div className="books">
    <Book title="The Hunger Games" author="Suzanne Collins" />
    <AddBook />
  </div>
);

export default Books;