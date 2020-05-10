import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import util from './header';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/* var mycar = new util.Car("Ford");

const showval = mycar.present();

var mymodel = new util.model("Ford", "Mustang");

const showmodel = mymodel.show();

ReactDOM.render(myfirstelement, document.getElementById("root1"));
ReactDOM.render(<util.Test />, document.getElementById("root2"));
ReactDOM.render(showval, document.getElementById("root3"));
ReactDOM.render(showmodel, document.getElementById("root4")); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
