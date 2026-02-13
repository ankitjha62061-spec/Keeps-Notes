import React from 'react'

import "../assets/css/details.css";
const NoteDetails = ({setView}) => {


  return (
    <div className='note-details'>
     <div className="details-wrapper">

        <div className="details-back-btn" onClick={()=>setView(false)} >
            <i className="fa-solid fa-arrow-left"></i>
        </div>

        <h2 className="details-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Incidunt animi assumenda similique veniam eligendi labore dolore optio velit 
            corporis atque.
            </h2>

<span className="details-timeline">
  {new Date().toDateString()}
</span>


          <div className="details-body">

    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum velit modi, dolorem 
    sapiente illum ex eligendi magnam, omnis, ipsum sed fuga? Modi quo delectus, nostrum qui 
    sequi quod in adipisci!
    </p>

          </div>

     </div>
   </div>
  );
}

export default NoteDetails