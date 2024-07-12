import React, { Component } from "react";
import NewsContainer from "../components/NewsContainer";
import defaultImage from "../Images/newscast1.png";
import Lodder from "./Lodder";
import PropTypes from "prop-types";

export default class NewsItem extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [""];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      lodder: false,
    };
    document.title = `NewsCast - ${this.props.category}`
  }

  async NewsAPI() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c26eeb85c28c49839a157f9cb7b28e5b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ lodder: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      lodder: false,
      totalResults: parseData.totalResults,
    });
  }

  componentDidMount() {
    this.NewsAPI();
  }

  NextPage = () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.setState({
        page: this.state.page + 1
      })
      this.NewsAPI()
    }
  };

  PreviousPage = () => {
    this.setState({
      page: this.state.page - 1
    });
    this.NewsAPI()
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
            {this.state.lodder && <Lodder />}
            {!this.state.lodder &&
              this.state.articles.map((element) => {
                return (
                  <NewsContainer
                    key={element.url}
                    url={element.url}
                    title={element.title ? element.title.slice(0, 112) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 146)
                        : ""
                    }
                    imageurl={
                      element.urlToImage ? element.urlToImage : defaultImage
                    }
                    publishedAt={element.publishedAt}
                    author={element.author}
                    sourceName={element.source && element.source.name}
                  />
                );
              })}
          </div>
        </div>

        {!this.state.lodder && (
          <div className="container d-flex justify-content-between mt-2">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.PreviousPage}
            >
              {" "}
              &larr; Prev
            </button>

            <h1 className="badge text-bg-dark mt-2 text-center">
              {this.state.page}
            </h1>

            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.NextPage}
            >
              Next &rarr;{" "}
            </button>
          </div>
        )}
      </>
    );
  }
}
