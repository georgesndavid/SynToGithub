import React from 'react';
import logo from './logo.svg';
import './App.css';
import util from './header';

const myfirstelement =     <h1>Hello React!</h1>;
var mycar = new util.Car("Ford");
const showval = mycar.present();
var mymodel = new util.model("Ford", "Mustang");
const showmodel = mymodel.show();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {myfirstelement}

        {showmodel}
      </header>
    </div>
  );
}

/* ReactDOM.render(myfirstelement, document.getElementById("root1"));
ReactDOM.render(<util.Test />, document.getElementById("root2"));
ReactDOM.render(showval, document.getElementById("root3"));
ReactDOM.render(showmodel, document.getElementById("root4")); */

export default App;
