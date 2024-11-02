import React from "react";

const Failed = ({ data }) => {
  return (
    <>
      <div className="taskcard" style={{background:"grey", padding:"1rem", width: "80%", margin: "2vw auto"}}>
        <div className="taskcardheader">
          <h4 style={{fontSize: "clamp(1rem, 1.5vw, 2rem)"}}>high</h4>
          <p style={{fontSize: "clamp(0.8rem, 1vw, 1.2rem)"}}>{data.dueDate}</p>
        </div>
        <h2 style={{fontSize: "clamp(1.5rem, 2vw, 3rem)"}} >{data.title}</h2>
        <p  style={{margin:"clamp(0.5rem, 1vw, 1.5rem) 0" , fontSize:"clamp(1rem, 1.2vw, 1.5rem)"}}>{data.description}</p>
        <div style={{ display: "flex", marginTop: "clamp(1rem, 3vw, 4rem)", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "clamp(0.2rem, 0.5vw, 0.8rem) clamp(0.5rem, 1vw, 1.5rem)",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontSize: "clamp(0.8rem, 1vw, 1.2rem)"
            }}
          >
            Failed
          </button>
        </div>
      </div>
    </>
  );
};

export default Failed;