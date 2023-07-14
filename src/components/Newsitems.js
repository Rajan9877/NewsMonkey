import React from 'react'

const Newsitems = (props) => {
    return (
      <>
      <div className="card my-2">
  <div className="position-relative">
    <img
      className="card-img-top"
      style={{ height: "150px" }}
      src={props.imgurl === null ? "https://i2-prod.dailystar.co.uk/incoming/article30369671.ece/ALTERNATES/s1200/0_Jake-Paul-v-Tommy-Fury-Press-Conference.jpg" : props.imgurl}
      alt="Card image cap"
    />
    <span className="badge badge-secondary" style={{zIndex: "1"}}>New</span>
  </div>
  <div className="card-body" style={props.dark=="dark" ? {backgroundColor: "black", color: "white"} : {backgroundColor: "white", color: "black"}}>
    <h5 className="card-title">{props.title === null || props.title.length <= 1 ? 'There is no title of this news right now but you can read this by clicking on the read more button.' : props.title.slice(0, 60) + "..."}</h5>
    <p className="card-text">{props.desc === null || props.desc.length <= 1 ? 'There is no description of this news right now but you can read this by clicking on the read more button.' : props.desc.slice(0, 85) + "..."}</p>
    <a href={props.url} target="_blank" className={`btn btn-${props.dark == "dark"?"light":"dark"} btn-sm`}>Read More</a>
    <p className="card-text"><small className="text-body-secondary my-2">{props.author === null ? "No Author" : props.author} - {new Date(props.date).toUTCString()}</small></p>
  </div>
</div>

      </>
    )
  }

export default Newsitems