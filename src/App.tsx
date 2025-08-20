import React, { useState } from 'react'
import './App.css'

import Header from './subcomponents/Header'
import AddBook from './subcomponents/AddBook'
import BookList from './subcomponents/ListBooks'
import Footer from './subcomponents/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  let books = [
    {id: 1, title: 'Book 1', author: 'Author 1'},
    {id: 2, title: 'Book 2', author: 'Author 2'},
    {id: 3, title: 'Book 3', author: 'Author 3'},
  ]

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/add-book" element={<AddBook/>}/>
        <Route path="/" element={<BookList books={books}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
