import React, { useEffect, useState } from "react";
import NewsContainer from "../components/NewsContainer";
import defaultImage from "../Images/newscast1.png";
import Lodder from "./Lodder";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsItem = (props) => {

  const [articles, SetArticles] = useState([])
  const [lodder, SetLodder] = useState(false)
  const [page, SetPage] = useState(1)
  const [totalResults, SetTotalResults] = useState(0)
  const [error, setError] = useState()

    // document.title = `NewsCast - ${props.category}`


   const NewsAPI = async () => {
    try{
    SetLodder(true)
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(25)
    document.title = `NewsCast - ${props.category}`
    let data = await fetch(url);
    props.setProgress(25)
    let parseData = await data.json();
    props.setProgress(70)
    SetArticles(parseData.articles)
    SetLodder(false)
    SetTotalResults(parseData.totalResults)
    props.setProgress(100)
    }catch (error){
      setError(error.message);
      SetLodder(false)
    }
  }


  useEffect(()=>{
    NewsAPI();
    // eslint-disable-next-line
  },[])


  const fetchMoreData = async () => {
  const totalPages = Math.ceil(Number(totalResults) / props.pageSize);
  if (page < totalPages){
    
   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
   SetPage(page + 1)
   let data = await fetch(url);
    let parseData = await data.json();
    SetArticles(articles.concat(parseData.articles))
    SetTotalResults(parseData.totalResults)
   
  }
  };


    return (
      <>
        {error && <div>Error: {error}</div>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={page < Math.ceil(Number(totalResults) / props.pageSize)}
          loader={<Lodder />}
        >
          <div className="container">
            {lodder && <Lodder/>}
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {articles.map((element,index) => {
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


NewsItem.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};

NewsItem.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  setProgress: PropTypes.func
};

export default NewsItem
