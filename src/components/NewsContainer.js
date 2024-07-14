import React from "react";

const NewsContainer = (props) =>{

    let { title, description, imageurl, url, publishedAt, author, sourceName } = props;
    return (
      <div className="col" >
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "black", textDecoration: "none" }}
        >
          <div className="card" style={{ maxWidth: "18 rem" }}>
            <span className="position-absolute top-0 start-50 mt-2 p-2 translate-middle badge rounded-pill bg-dark">
              @{sourceName}{" "}
            </span>

            <img
              src={imageurl}
              className="card-img-top"
              alt=".."
              loading="lazy"
              style={{ height: "20rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {title.length < 112 ? title : title + " Read more....."}
              </h5>
              <p className="card-text">
                {description.length < 146
                  ? description
                  : description + " Read more....."}
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </div>
          </div>
        </a>
      </div>
    );
}


export default NewsContainer
