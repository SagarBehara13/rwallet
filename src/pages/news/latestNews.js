import React, { Component } from 'react';

import NewsList from './newsList'
import { getLatestNews } from '../../api/news'


class LatestNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      errMessage: '',
      latestNewsData: [],
    }
  }

  componentDidMount() {
    getLatestNews()
      .then(res => this.setState({ latestNewsData: res.response, isLoading: false }), err => { throw err })
      .catch(err => this.setState({ isLoading: false, errMessage: err.statusText }))
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <NewsList
        isLoading={this.state.isLoading}
        errMessage={this.state.errMessage}
        newsList={this.state.latestNewsData}
        navigationProp={(item) => navigate('NewsDetail', { item: item })}
      />
    )
  }
};


export default LatestNews
