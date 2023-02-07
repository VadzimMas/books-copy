import { useState } from 'react'
import useBooksContext from '../hooks/booksContextHook.js';


function CreateBook() {
    const [text, setText] = useState('')
    const { createBook } = useBooksContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        createBook(text)
        setText('')
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>Add Book</button>
            </form>
        </div>
    )
}

export default CreateBook