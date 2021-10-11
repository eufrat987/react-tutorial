import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book 
      title = 'I Love You to the Moon and Back' 
      author = 'Amelia Hepworth' 
      img = "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"  
      />

      <Book 
      title = 'American Marxism' 
      author = 'Mark R. Levin'
      img = "https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg"  
      />
 
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props;

  // const title = 'I Love You to the Moon and Back'
  // const author = 'Amelia Hepworth'
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1> { title } </h1>
      <h4> { author } </h4>
      
    </article>
  )
}



ReactDOM.render(<BookList />, document.getElementById('root'))