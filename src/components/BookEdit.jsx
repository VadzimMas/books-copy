import { useState } from 'react'
import useBooksContext from '../hooks/booksContextHook'


function BookEdit({ id, handleEdit }) {
    const [newTitle, setNewTitle] = useState('')
    const { editBookById } = useBooksContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        editBookById(id, newTitle)
        setNewTitle('')
        handleEdit()
    }

    return (
        < div >
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <button type="submit">Save Title</button>
            </form>
        </ div>
    )
}

export default BookEdit