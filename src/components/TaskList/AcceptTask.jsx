import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
 
    <div className="taskcard" style={{  padding: "1rem", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
    <div className="taskcardheader">
      
      <h4 style={{fontSize:"clamp(1rem, 1vw, 1.5rem)"}}>high {data.priority}</h4>
      <p style={{fontSize:"clamp(.8rem, .8vw, 1rem)"}}>{data.dueDate}</p>
    </div>
    <h2 style={{fontSize:"clamp(1.2rem, 1.2vw, 2rem)"}}>{data.title}</h2>
    <p style={{ fontSize: "1rem", margin: "1rem 0" }}>
     {data.description}
    </p>
    <div style={{ display: "flex",gap:" 2rem", justifyContent: "center", marginTop: "1.5rem" }}>
    <button style={{backgroundColor: 'green', color: 'white', padding: ".7rem 1rem", borderRadius: '5px', border: 'none', cursor: 'pointer'}}>Completed</button>
    <button style={{backgroundColor: 'red', color: 'white',padding: ".7rem 1.8rem", borderRadius: '5px', border: 'none', cursor: 'pointer'}}>Failed</button>
</div>
  </div>
  )
}

export default AcceptTask