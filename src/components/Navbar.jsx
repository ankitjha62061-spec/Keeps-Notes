import React from 'react'
import "../assets/css/navbar.css";

const palettes = [
    { id: 1, color: "#0d1282", name: "blue-palette" },
    { id: 2, color: "#ff2171", name: "rose-palette" },
    { id: 3, color: "#360d95", name: "violet-palette" },
    { id: 4, color:  "#333", name: "black-palette"},

];





const Navbar = () => {



  
  return (
    <div className='navbar'>
       <div className="nav-wrapper container">
        <span className="logo"> Notes</span>
        <nav className="options">
            <div className="nav-icon">

          <div className="palettes">


          {palettes.map((palette) => (
          <div 
        key={palette?.id}
        style={{ backgroundColor: palette?.color }}
        className="palette-items"
         ></div>
        ))}
     </div> 

      



<div className="nav-icons">
  <div className="nav-icon">
    <i className="fa-solid fa-circle-half-stroke"></i>
  </div>

  <div className="nav-icon">
    <i className="fa-solid fa-plus"></i>
  </div>
</div>





         </div>
        </nav>
       </div>
    </div>
  )
}

export default Navbar