import React, { Component } from "react";
import NewsContainer from "../components/NewsContainer";
import defaultImage from "../Images/newscast1.png";
import Lodder from "./Lodder";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

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

  // articles = [""];
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      lodder: false,
      totalResults: 0,
    };
    document.title = `NewsCast - ${this.props.category}`
  }

  async NewsAPI() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(25)
    this.setState({ lodder: true });
    let data = await fetch(url);
    this.props.setProgress(25)
    let parseData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parseData.articles,
      lodder: false,
      totalResults: parseData.totalResults,
    });
    this.props.setProgress(100)
  }

  componentDidMount() {
    this.NewsAPI();
  }

  fetchMoreData = async () => {
  const totalPages = Math.ceil(Number(this.state.totalResults) / this.props.pageSize);
  if (this.state.page < totalPages){
    this.setState({page: this.state.page + 1});
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles)
    });
  }
  };

  render() {
    return (
      <>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.page < Math.ceil(Number(this.state.totalResults) / this.props.pageSize)}
          loader={<Lodder />}
        >
          <div className="container">
            {this.state.lodder && <Lodder/>}
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {this.state.articles.map((element,index) => {
              const key = `${element.title}_${index}`;
                return (
                  <NewsContainer
                    key={key}
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
          </InfiniteScroll>

        
      </>
    );
  }
}
