import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';

export default class App extends Component {
  pageKey = 6
  newsKey = process.env.REACT_APP_NEWS_KEY

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={this.pageKey} progressLoad={this.setProgress}  
          apiKey={this.newsKey} countryName="us" category="general" />} />
          <Route exact path='/business' element={<News key="business" pageSize={this.pageKey} progressLoad={this.setProgress}  
          apiKey={this.newsKey} countryName="us" category="business" />} />
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageKey} progressLoad={this.setProgress}  
          apiKey={this.newsKey} countryName="us" category="entertainment" />} />
          <Route exact path='/health' element={<News key="health" pageSize={this.pageKey} progressLoad={this.setProgress}  
          apiKey={this.newsKey} countryName="us" category="health" />} />
          <Route exact path='/science' element={<News key="science" pageSize={this.pageKey} progressLoad={this.setProgress}  
          apiKey={this.newsKey} countryName="us" category="science" />} />
          <Route exact path='/sports' element={<News key="sports" pageSize={this.pageKey} progressLoad={this.setProgress}  
          apiKey={this.newsKey} countryName="us" category="sports" />} />
          <Route exact path='/technology' element={<News key="technology" pageSize={this.pageKey} progressLoad={this.setProgress}  
          apiKey={this.newsKey} countryName="us" category="technology" />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
    )
  }
}