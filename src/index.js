import React from 'react';
import ReactDOM from 'react-dom';
  
class App extends React.Component{
  render(){
    return(
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <searchmovies/>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


