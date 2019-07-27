import React from 'react';
import './App.scss';
import MainHeader from './layout/MainHeader';
import MainFooter from './layout/MainFooter';
import Register from './layout/Register';
import Login from './layout/Login';

function App() {
  return (
    <div className="App">
        <MainHeader></MainHeader>
        <Register></Register>
        <Login></Login>
        <MainFooter></MainFooter>
    </div>
  );
}

export default App;
