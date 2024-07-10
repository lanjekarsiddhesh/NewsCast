import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsItem from "./components/NewsItem";

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <NewsItem pageSize={10}/>
      </div>
    );
  }
}
