import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
    render() {
      return <h2>Hello React!</h2>;
    }
  }
  
  class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return "I have a " + this.brand;
    }
  }
  
  class model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }
    show() {
      return this.present() + ", it is a " + this.model;
    }
  }
  
  var mycar = new Car("Ford");
  
  const showval = mycar.present();
  
  var mymodel = new model("Ford", "Mustang");
  
  const showmodel = mymodel.show();

  export default {Car, model, Test};