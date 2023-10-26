import React, { Component } from "react";
import Newitems from "./Newitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Sidesection from "./Sidesection";
import Footer from "./Footer";

export default class News extends Component {
  static defaultProps = {
    conuntryName: "us",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    countryName: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `InfoWave - ${this.firstCapitalize(this.props.category)}`
  }

  newsUpdate = async () => {
    this.props.progressLoad(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryName}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.progressLoad(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.progressLoad(50);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.progressLoad(100);
  };

  componentDidMount() {
    this.newsUpdate();
  }

  //   handleNextBtn = async () => {
  //     this.setState({ page: this.state.page + 1 });
  //     this.newsUpdate();
  //   };

  //   handlePrevBtn = async () => {
  //     this.setState({ page: this.state.page - 1 });
  //     this.newsUpdate();
  //   };

  firstCapitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  Capitalize(word) {
    return word.toUpperCase();
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.countryName
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
      <Sidesection />
        <div className="newsSection">

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                <div className="mt-5">
                    <h1 className="">Latest {this.firstCapitalize(this.props.category)} Highlights</h1>
                    <h1 className="pt-1">Stay Informed, Stay Ahead!</h1>
                </div>
                {this.state.articles.map((element) => {
                  if (element.url === "https://removed.com") {
                    return null;
                  } else {
                    return (
                      <div className="cardDiv col-md-6" key={element.url}>
                        <Newitems
                          title={element ? this.Capitalize(element.title) : ""}
                          description={
                            element.description == null
                              ? "Discover the latest news and stay informed with our reliable news platform."
                              : `${element.description.slice(0, 100)}...`
                          }
                          description2={
                            element.description === ""
                              ? "Discover the latest news and stay informed with our reliable news platform."
                              : null
                          }
                          imageUrl={element.urlToImage}
                          newUrl={element.url==null?"":element.url}
                          date={element.publishedAt}
                          source={
                            element.source.name == null
                              ? "Unknown"
                              : element.source.name
                          }
                        />
                      </div>
                    );
                  }
                })}

                {/* <div className='container d-flex justify-content-end'>
                        <button disabled={this.state.page<=1} className='btn btn-dark mx-3' onClick={this.handlePrevBtn}>&larr;</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextBtn}>&rarr;</button>
                    </div> */}
              </div>
            </div>
          </InfiniteScroll>
        </div>
        <Footer />
      </>
    );
  }
}
