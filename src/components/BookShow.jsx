import useBooksContext from '../hooks/booksContextHook'
import BookEdit from './BookEdit';
import { useState } from 'react';

function BookShow({ book }) {
    const { deleteBookById } = useBooksContext()
    const [isShowBookEdit, setIsShowBookEdit] = useState(false)

    const handleEdit = () => setIsShowBookEdit(!isShowBookEdit)

    return (
        <div>
            <button
                onClick={() => deleteBookById(book.id)}
            >
                delete
            </button>
            <button
                onClick={handleEdit}
            >
                edit
            </button>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
            <h4>Title : {book.title} </h4>
            <h6>id : {book.id} </h6>
            {isShowBookEdit
                ? <BookEdit id={book.id} handleEdit={handleEdit} />
                : null}
            <br />
            <hr />
            <br />
        </div >
    )
}

export default BookShow