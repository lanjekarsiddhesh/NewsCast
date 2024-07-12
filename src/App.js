import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsItem from "./components/NewsItem";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  pageSize = 10
  render() {
    return (
      <div>
        <Router>
        <Navbar  />
          <Routes> 
            <Route exact  path="/" element={<NewsItem key="/" pageSize={this.pageSize} country="in" category="general"/>} /> 
            <Route exact  path="/sports" element={<NewsItem key="sports" pageSize={this.pageSize} country="in" category="sports"/>} /> 
            <Route exact  path="/business" element={<NewsItem key="business" pageSize={this.pageSize} country="in" category="business"/>} /> 
            <Route exact  path="/technology" element={<NewsItem key="technology" pageSize={this.pageSize} country="in" category="technology"/>} /> 
            <Route exact  path="/science" element={<NewsItem key="science" pageSize={this.pageSize} country="in" category="science"/>} /> 
            <Route exact  path="/entertainment" element={<NewsItem key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} /> 
            <Route exact  path="/health" element={<NewsItem key="health" pageSize={this.pageSize} country="in" category="health"/>} /> 
            <Route exact  path="/about" element={<About key="about" />} /> 
          </Routes>
        </Router>

      </div>
    );
  }
}
