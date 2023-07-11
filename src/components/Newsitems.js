import React, { Component } from 'react'

export class Newsitems extends Component {
  render(props) {
    return (
      <>
       <div className="card my-2" style={{width: "18rem"}}>
  <img className="card-img-top" style={{height: "150px"}} src={this.props.imgurl===null?"https://s.yimg.com/uu/api/res/1.2/V5UrBWtI_v2pwHwxgNQpCg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/096bfbe0-19b9-11ee-bc3f-e04acc4cbdd8.cf.jpg": this.props.imgurl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title===null||this.props.title.length<=1?'There is no title of this news right now but you can read this.':this.props.title.slice(0,45)+"..."}</h5>
    <p className="card-text">{this.props.desc===null||this.props.desc.length<=1 ?'There is no description of this news right now but you can read this.':this.props.desc.slice(0,45)+"..."}</p>
    <a href={this.props.url} target="_blank" className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
      </>
    )
  }
}

export default Newsitems