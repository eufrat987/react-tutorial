import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
var url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const {loading, products} = useFetch(url)

  setTimeout(() => {
    url = 'google.pl'
    console.log('changed')
  }, 4000)
  
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
