import React from 'react'
import { useState } from 'react'
import axios from axios

export default function Home() {

   

    const[ books,setbooks] = useState ([])
    axios.get(` api URl`)
      .then(res => {
        const bookdata = res.data.results.map(obj => [obj.title, obj.overview]);
        setbooks({ bookdata });
      });
  return (

    
    <div>
        <h1> Home Page</h1>
        <ul>
          {this.state.books.map(book =>
              <li key={book.toString()}>{book.title}</li>
            )}
        </ul>
        <ul>
          {this.state.users.map(user =>
              <li key={user.toString()}>{user.Name}</li>
            )}
        </ul>
    </div>
  )
}
