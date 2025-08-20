import React, { useState } from 'react'
import '../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';


let ListBooks = (props: { books: any[] }) => {

    return (
        <>
            <h1>ListBooks</h1>
            {props.books.map((book) => (
                <div key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                </div>
            ))}
        </>
    )
}

export default ListBooks
