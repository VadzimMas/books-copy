import BooksList from './components/BooksList'
import CreateBook from './components/CreateBook'
import useBooksContext from './hooks/booksContextHook';
import { useEffect } from 'react';

function App() {
    const { fetchBooks } = useBooksContext()
    useEffect(() => fetchBooks(), [])

    return (
        <div>
            <h1>Reading list.</h1>
            <BooksList />
            <CreateBook />
        </div>
    )
}

export default App