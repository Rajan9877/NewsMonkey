import React, { Component } from 'react';
import Newsitems from './Newsitems';
import './SampleOutput'
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles:  [],
      page: 1,
      loader: true,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    // Check if the category or page has changed
    if (
      prevProps.category !== this.props.category ||
      prevState.page !== this.state.page
    ) {
      this.fetchData();
    }
  }
  
  fetchData() {
    this.setState({loader: false});
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&pagesize=${this.props.pagesize}&page=${this.state.page}&apiKey=edc57022dfd94611b148161831670e27`)
      .then((response) => 
  response.json()
)
      .then((data) => {
        this.setState({
          loader: true,
          articles: data.articles,
          totalResults: data.totalResults
        });
        console.log(data.totalResults);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  

  previousButtonHandler = () => {
    this.setState((prevState) => ({
      page: prevState.page - 1
    }));
    console.log('previous page.')
    console.log(this.state.page);
  };
  
  nextButtonHandler = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }));
    console.log('next page.')
    console.log(this.state.page);
  };
  
  
  render() {
    document.title = `${this.props.category !== '' ? this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + " - NewsMonkey": 'Home - NewsMonkey'}`;
    return (
      <>
      <h1 className='text-center my-2'>Latest News { this.props.category !== '' ? "On " + this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1): ''}</h1>
        <div className="container my-3">
          <div className="row">
            {this.state.articles.length === 0 ? !this.state.loader ? <Spinner/> : (
                <div className='text-center'>There is no news at this moment.</div>
            ) : (
              this.state.articles.map((article) => (
                <div className="col-4">
                  <Newsitems
                    title={article.title}
                    desc={article.description}
                    url={article.url}
                    imgurl={article.urlToImage}
                    author={article.author}
                    date={article.publishedAt}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="container">
  <div className="row">
    <div className="col-md-6 d-flex justify-content-start">
      <button disabled={this.state.page <= 1} type="button" onClick={this.previousButtonHandler} className="btn btn-dark">&larr; Previous</button>
    </div>
    <div className="col-md-6 d-flex justify-content-end">
      <button  disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" onClick={this.nextButtonHandler} className="btn btn-dark">Next &rarr;</button>
    </div>
  </div>
</div>

      </>
    );
  }
}

export default News;
