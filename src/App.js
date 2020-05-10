import React from 'react';
import logo from './logo.svg';
import logocodesnippet from './logo.svg';
import './App.css';
import util from './vehicle';

const myfirstelement = <h1>Hello React!</h1>;

var mycar = new util.Car("Ford");
const showval = mycar.present();
var mymodel = new util.model("Ford", "Mustang");
const showmodel = mymodel.show();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <td nowrap>&nbsp;
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </td>
            {/* <td>{myfirstelement}</td> */}
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <img src="logo_codesnippet_01.png" className="App-logosnippet" alt="logo" />
            </td>
  <td>{myfirstelement}{showmodel}</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
