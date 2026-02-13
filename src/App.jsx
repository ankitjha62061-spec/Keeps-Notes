import React, { useState } from 'react';
import "./assets/css/app.css";
import Navbar from './components/Navbar';
import NoteCard from './components/NoteCard';
import UpsertNote from './components/UpsertNote';
import NoteDetails from './components/NoteDetails';

const App = () => {

  const [onCreateNote, setOnCreate] = useState(false);
  const [onViewNote, setOnView] = useState(false);





  return (
    <div className="app">
      <Navbar setOpen={setOnCreate} />

      <div className="wrapper container"> 
        <div className="search-wrapper">
          <input type="text" className="search" placeholder='Search' />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>




        <div className="notes-wrapper">
          <NoteCard />
        </div>





        {onCreateNote && <UpsertNote setOpen={setOnCreate} />}
        {onViewNote && <NoteDetails setView={setOnView} />}
      </div>
    </div>
  );
}

export default App;
