import "../assets/css/upsert.css";

const UpsertNote = () => {
  return (
    <div className="upsert-note" >
        
      
      <div className="upsert-wrapper">
       <div className="upsert-header">
       <h2 className="heading">Add Note</h2> 
       <div className="close-btn">
        <i className="fa-solid fa-xmark"></i>
        </div>       
        </div>

        <form className="upsert-form">
            <input  required
             type="text" 
              placeholder="Title"
               className="input-form" 
               />
            
            <textarea placeholder="Enter yours note"  ></textarea>
            <div className="upsert-actions">
            <buttton className="ckear-btn">clear</buttton>
            <button className="save-btn">Save</button>
            </div>
            </form>
            </div>
            </div>
  )
}

export default UpsertNote