import React from 'react'
import ReactDOM from 'react-dom'
import {books} from './books'
import Book from './Book'

import './index.css'

function BookList() {
  return (
    <section className="booklist">
      
      {books.map(book => 
         <Book {...book}/>
      )}

    </section>
  )
}




ReactDOM.render(<BookList />, document.getElementById('root'))