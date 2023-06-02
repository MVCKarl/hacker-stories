// eslint-disable-next-line no-unused-vars
import * as React from 'react';

const books = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
},
];

const reduxBooks = books.filter(book => {
  return book.title === 'Redux';
});

function App() {

  return (
    <div>
      <h1>My Hacker Stories</h1>
      
      <ul>
        {
          reduxBooks.map((book) => <li key={book.id}>{book.title}</li> )



          //books.filter(function(book){
          //  if (book.title === 'Redux') {
          //    return book.title
          //  }
          //})
        }

        {
          //books.map((book) => <li key={book.id}>{book.title}</li> )
        }
      </ul>

      <label htmlFor='name'>Search: </label>
      <input type="text" id="name" />
    </div>
  );
}
export default App;