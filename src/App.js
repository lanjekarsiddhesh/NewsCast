import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import NewsContainer from "./components/NewsContainer";
import defaultImage from "./Images/newscast1.png"

export default class App extends Component {

  articles = [""]
  constructor(){
    super();
    this.state = {articles:this.articles}
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c26eeb85c28c49839a157f9cb7b28e5b";
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({articles:parseData.articles})
  }
  render() {
    return (
      <div>
      <Navbar />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
          {this.state.articles.map((element)=>{
            return <NewsContainer key={element.url} url={element.url} title={element.title?element.title.slice(0, 112):""} description={element.description?element.description.slice(0, 146):""} imageurl={element.urlToImage?element.urlToImage:defaultImage} />
          })}
        </div>
      </div>
    </div>
    )
  }
}
