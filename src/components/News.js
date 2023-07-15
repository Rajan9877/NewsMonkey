import React, { useState, useEffect } from 'react';
import Newsitems from './Newsitems';
import './SampleOutput';
import Spinner from './Spinner';

const News = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData();
  }, [props.category, page, props.search]);

  const fetchData = () => {
    props.setProgress(5);
    setLoader(false);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&pagesize=${props.pagesize}&page=${page}&q=${props.query}&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        props.setProgress(50);
        setLoader(true);
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        props.setProgress(100);
        console.log(data.totalResults);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const previousButtonHandler = () => {
    setPage((prevPage) => prevPage - 1);
    console.log('previous page.');
    console.log(page);
  };

  const nextButtonHandler = () => {
    setPage((prevPage) => prevPage + 1);
    console.log('next page.');
    console.log(page);
  };

  useEffect(() => {
    document.title = `${
      props.category !== ''
        ? props.category.charAt(0).toUpperCase() +
          props.category.slice(1) +
          ' - NewsMonkey'
        : 'Home - NewsMonkey'
    }`;
  }, [props.category]);

  return (
    <>
      <h1 className='text-center' style={{ marginTop: '66px' }}>
        Latest News{' '}
        {props.category !== ''
          ? 'On ' +
            props.category.charAt(0).toUpperCase() +
            props.category.slice(1)
          : ''}
      </h1>
      <div className='container my-3'>
        <div className='row'>
          {articles.length === 0 ? (
            !loader ? (
              <Spinner />
            ) : (
              <div className='text-center'>
                There is no news at this moment.
              </div>
            )
          ) : (
            articles.map((article) => (
              <Newsitems
                title={article.title}
                desc={article.description}
                url={article.url}
                imgurl={article.urlToImage}
                author={article.author}
                date={article.publishedAt}
                dark={props.dark}
                setDark={props.setDark}
              />
            ))
          )}
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0'>
            <button
              disabled={page <= 1}
              type='button'
              onClick={previousButtonHandler}
              className={`btn btn-${
                props.dark === 'light' ? 'dark' : 'light'
              }`}
            >
              &larr; Previous
            </button>
          </div>
          <div className='col-md-6 d-flex justify-content-center justify-content-md-end'>
            <button
              disabled={page >= Math.ceil(totalResults / props.pagesize)}
              type='button'
              onClick={nextButtonHandler}
              className={`btn btn-${
                props.dark === 'light' ? 'dark' : 'light'
              }`}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
