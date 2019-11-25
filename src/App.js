import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Profile from "./components/layout/Profile";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
