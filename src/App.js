import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsItem from "./components/NewsItem";
import About from "./components/About";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



const App = ()=> {

  const [progressBar, setProgress] = useState(0)

  const pageSize = 12
  const apiKey = process.env.REACT_APP_NEWS_API;
 

    return (
      <div>
        <Router>
        <Navbar  />
        <LoadingBar
        color='#f11946'
        progress={progressBar}
      />
          <Routes> 
            <Route exact  path="/" element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="/" pageSize={pageSize} country="in" category="general"/>} /> 
            <Route exact  path="/sports" element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>} /> 
            <Route exact  path="/business" element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>} /> 
            <Route exact  path="/technology" element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>} /> 
            <Route exact  path="/science" element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>} /> 
            <Route exact  path="/entertainment" element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} /> 
            <Route exact  path="/health" element={<NewsItem setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>} /> 
            <Route exact  path="/about" element={<About key="about" s/>} /> 
          </Routes>
        </Router>

      </div>
    );
  }




export default App
