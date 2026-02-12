import React from 'react'
import "./assets/css/app.css";
import Navbar from './components/Navbar';
import NoteCard from './components/NoteCard';
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






</div>

</div>
</div>

     
    </div>
  )
}

export default App