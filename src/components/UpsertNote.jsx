import "../assets/css/upsert.css";

const UpsertNote = ({setOpen}) => {
  return (
    <div className="upsert-note" >
        
      
      <div className="upsert-wrapper">
       <div className="upsert-header">
       <h2 className="heading">Add Note</h2> 
       <div className="close-btn" onClick={()=>setOpen(false)} >
        <i className="fa-solid fa-xmark"></i>
        </div>       
        </div>

        <form className="upsert-form">
            <input  required
             type="text" 
              placeholder="Title"
               className="input-form" 
               />


            
            <textarea className="textarea-form" 
            placeholder="Enter yours note"  >
           </textarea>


            <div className="upsert-actions">
            <button className="clear-btn">clear</button>
            <button className="save-btn">Save</button>
            </div>
            </form>

            </div>
            </div>
  )
}

export default UpsertNote