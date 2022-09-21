import React, { useState } from 'react';
//mock data
 import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json";
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';
//import { Footer } from './components/Footer';


function App() {


  

  return (
    <div className="container text-center App">
      <h1 style={{ margin:'20px'}}>----TODOS----</h1>
      <hr/>
    <div className="card text-center">
      <div className="card-header">
        ToDoList
        </div>
        <div className="card-body">
      {/* <Header/> */}
      <ToDoList />
      {/* <Footer/> */}
      
      
      </div>
    </div></div>
  );
}

export default App;
