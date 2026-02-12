import React from 'react'
import "../assets/css/card.css";

const NoteCard = () => {
  return (
    <div className='note-card' >
      <div className="note-card-wrapper">
        <h2 className="card-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur vitae delectus quo ducimus unde doloremque aliquam saepe culpa odio porro!
        </h2>
        <div className="card-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque quibusdam consequatur asperiores consectetur, deleniti quos. Veniam amet mollitia rem.</p>
        </div>
<span className="card-details">read more</span>
<div className="card-footer">

  <span className="card-timline">
  {new Date().toLocaleString("en-IN", {
  })}
</span>

 <div className="card-actions">
  <div className="action-item-edit"> <i className="fa-solid fa-pen-to-square"></i></div>
    <div className="action-item-delete"> <i className="fa-solid fa-trash-can"></i></div>


<i class=""></i>
 </div>
</div>

      </div>
    </div>
  )
}

export default NoteCard