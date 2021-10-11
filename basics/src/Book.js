import React from 'react'

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1> { title } </h1>
      <h4> { author } </h4>
      <button type="button" onClick={()=> { alert("aloha") }} > but </button>
    </article>
  )
}

export default Book