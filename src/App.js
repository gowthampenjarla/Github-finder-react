import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar title='GitHub Finder' />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
