import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsItem from "./components/NewsItem";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <Navbar  />
          <Routes> 
            <Route exact  path="/" element={<NewsItem key="/" pageSize={10} country="in" category="general"/>} /> 
            <Route exact  path="/sports" element={<NewsItem key="sports" pageSize={10} country="in" category="sports"/>} /> 
            <Route exact  path="/business" element={<NewsItem key="business" pageSize={10} country="in" category="business"/>} /> 
            <Route exact  path="/technology" element={<NewsItem key="technology" pageSize={10} country="in" category="technology"/>} /> 
            <Route exact  path="/science" element={<NewsItem key="science" pageSize={10} country="in" category="science"/>} /> 
            <Route exact  path="/entertainment" element={<NewsItem key="entertainment" pageSize={10} country="in" category="entertainment"/>} /> 
            <Route exact  path="/health" element={<NewsItem key="health" pageSize={10} country="in" category="health"/>} /> 
          </Routes>
        </Router>

      </div>
    );
  }
}
