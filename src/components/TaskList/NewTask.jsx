import React from 'react'

const NewTask = ({data}) => {
  return (
    <>
     <div className="taskcard" style={{ background: "lightblue" }}>
        <div className="taskcardheader">
          <h4>high</h4>
          <p>{data.dueData}</p>
        </div>
        <h2 style={{ fontSize: "1.2vw" }}>{data.title}</h2>
        <p style={{ margin: "1vw 0", fontSize: ".8vw" }}>
        {data.description}
        </p>
        <div style={{display:'flex',gap:"1vw",marginTop:"3vw" }}>
    <button style={{backgroundColor: 'green', color: 'white', padding: '.5vw 1vw', borderRadius: '5px', border: 'none', cursor: 'pointer'}}>Accept</button>
    <button style={{backgroundColor: 'red', color: 'white', padding: '.5vw 1vw', borderRadius: '5px', border: 'none', cursor: 'pointer'}}>Decline</button>
</div>
      </div>
      </>
  )
}

export default NewTask
