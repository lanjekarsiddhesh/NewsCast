import React, { Component } from "react";

export default class NewsContainer extends Component {

  render() {
    let {title, description,imageurl,url} = this.props
    return (
      <div className="col">
        <a href={url} target="_blank" rel="noreferrer" style={{color:"black",textDecoration:"none"}}>
        <div className="card" style={{ maxWidth: "18 rem" }}>
          <img src={imageurl} className="card-img-top" alt=".." loading="lazy" style={{height:"20rem"}} />
          <div className="card-body">
            <h5 className="card-title">{title.length<112?title:title+"....."}</h5>
            <p className="card-text">
              {description.length<146?description:description+"....."}
            </p>
          </div>
        </div>
        </a>
      </div>
    );
  }
}
