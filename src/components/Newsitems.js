import React, { Component } from 'react'

export class Newsitems extends Component {
  render(props) {
    return (
      <>
      <div className="card my-2">
  <div className="position-relative">
    <img
      className="card-img-top"
      style={{ height: "150px" }}
      src={this.props.imgurl === null ? "https://s.yimg.com/uu/api/res/1.2/V5UrBWtI_v2pwHwxgNQpCg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/096bfbe0-19b9-11ee-bc3f-e04acc4cbdd8.cf.jpg" : this.props.imgurl}
      alt="Card image cap"
    />
    <span className="badge badge-secondary" style={{zIndex: "1"}}>New</span>
  </div>
  <div className="card-body">
    <h5 className="card-title">{this.props.title === null || this.props.title.length <= 1 ? 'There is no title of this news right now but you can read this by clicking on the read more button.' : this.props.title.slice(0, 60) + "..."}</h5>
    <p className="card-text">{this.props.desc === null || this.props.desc.length <= 1 ? 'There is no description of this news right now but you can read this by clicking on the read more button.' : this.props.desc.slice(0, 85) + "..."}</p>
    <a href={this.props.url} target="_blank" className="btn btn-dark btn-sm">Read More</a>
    <p class="card-text"><small class="text-body-secondary my-2">{this.props.author === null ? "No Author" : this.props.author} - {new Date(this.props.date).toUTCString()}</small></p>
  </div>
</div>

      </>
    )
  }
}

export default Newsitems