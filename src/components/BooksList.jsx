import useBooksContext from '../hooks/booksContextHook.js'
import BookShow from './BookShow.jsx'


function BooksList() {

    const { books } = useBooksContext()

    const bookList = books.map((book) => {
        return <BookShow book={book} key={book.id} />
    })

    return (
        <div>
            {bookList}
        </div>
    )
}

export default BooksList