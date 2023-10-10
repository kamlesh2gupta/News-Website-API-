
import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0
    }
  }
  async getApiData() {

    var response
    if (this.props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&sortBy=publishedAt%20&language=${this.props.language}&apiKey=172cc7afe8ad43858736a8ac052e6c0b`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&sortBy=publishedAt%20&language=${this.props.language}&apiKey=172cc7afe8ad43858736a8ac052e6c0b`)
    response = await response.json()
    this.setState({
      // card me remove image keyboard(.filter((x)=>x.title!=="[Removed]"))
      articles: response.articles.filter((x) => x.title !== "[Removed]"),
      totalResults: response.totalResults

    })
  }
  componentDidMount() {
    this.getApiData()
  }
  componentDidUpdate(old) {
    if (this.props !== old)
      this.getApiData()
  }
  render() {
    return (
      <>
        <h5 className='bg-primary text-center text-light p-2 my-1'>{this.props.q} News Articles</h5>
        <div className="container">
          <div className="row">
            {this.state.articles.map((item, index) => {
              return <NewsItem key={index}
                pic={item.urlToImage}
                title={item.title}
                description={item.description}
                url={item.url}
                date={item.publishedAt}
                source={item.source.name}


              />
            })}
          </div>
        </div>


      </>
    )
  }
}


