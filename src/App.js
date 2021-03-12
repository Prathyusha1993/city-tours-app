//import logo from './logo.svg';
import './App.scss';
import React, { Component } from 'react'
import Header from './components/navbar/Header';
import TourList from './components/tourLists/index'

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  };

  render() {
    return(
      <div>
        <Header />
        <TourList />
      </div>
    );
  }
}



export default App;
