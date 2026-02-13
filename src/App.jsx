import React from 'react'
import "./assets/css/app.css";
import Navbar from './components/Navbar';
import NoteCard from './components/NoteCard';
import UpsertNote from './components/UpsertNote';
import NoteDetails from './components/NoteDetails';
const App = () => {
  return (
    <div>

<div className="app">
<Navbar/>
  <div className=" wrapper container"> 
  <div className="search-wrapper">
  <input type="text" className="search"  placeholder='Search' />
    
<button className="search-btn">
     <i className="fa-solid fa-magnifying-glass"></i> </button>
</div>

<div className="notes-wrapper">
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
<NoteCard/>
</div>

<UpsertNote/>

<NoteDetails/>

</div>
</div>

     
    </div>
  )
}

export default App