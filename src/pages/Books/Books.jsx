import React, { Suspense} from "react";
import Book from "../Book/Book";

const Books = ({books}) => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch("../../../public/booksData.json")
//       .then((res) => res.json())
//       .then((data) => setBooks(data));
//   }, []);
  return (
    <div>
      <h3 className="text-center text-3xl font-bold mb-6">Book</h3>
      <div>
        <Suspense fallback={<p>Loading....</p>}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <Book book={book} key={book.bookId}></Book>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
