import * as React from "react";

const welcome = {
  'title': 'React',
  'greeting': 'hey'
};

function getTitle() {
  return welcome.greeting + ' ' + welcome.title;
  }

function App() {
  

  return (
    <div>
      <h1>{getTitle()}</h1>

      <label htmlFor="search">Search</label>
      <input type="text" id="search" ></input>
    </div>
  );
}
export default App;
