import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <>
      <div className="taskcard" style={{ background: "darkgreen", padding: "1rem", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <div className="taskcardheader">
          <h4 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#fff" }}>high</h4>
          <p style={{ fontSize: "1rem", color: "#fff" }}>{data.dueDate}</p>
        </div>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1rem 0" }}>{data.title}</h2>
        <p style={{ fontSize: "1rem", margin: "1rem 0" }}>{data.description}</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              padding: ".5rem 1rem",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default CompleteTask;