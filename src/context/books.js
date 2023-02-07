import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const BooksContext = createContext()

function Provider({ children }) {

    const [books, setBooks] = useState([]);

    const fetchBooks = () => {
        axios.get('http://localhost:3001/books')
            .then((response) => {
                setBooks(response.data)
            })
            .catch((error) => console.log(error))
    }

    const createBook = (title) => {
        axios
            .post('http://localhost:3001/books/', { "title": title })
            .then((response) => setBooks([...books, response.data]))
            .catch((error) => console.log(error))
    }

    const deleteBookById = (id) => {

        axios
            .delete(`http://localhost:3001/books/${id}`)
            .then((response) => {
                setBooks(books.filter((book) => {
                    return book.id !== id ? book : null
                }))
            })
            .catch((error) => console.log(error))
    }

    const editBookById = (id, newTitle) => {
        axios
            .put(`http://localhost:3001/books/${id}`, { "title": newTitle })
            .then((response) => {
                setBooks(books.map((book) => {
                    return book.id !== id ? book : response.data
                }))
            })
            .catch((error) => console.log(error))
    }

    const value = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookById,
    }

    return (
        <BooksContext.Provider value={value}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider }
export default BooksContext