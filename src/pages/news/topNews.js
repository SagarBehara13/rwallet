import React, { Component } from 'react';

import NewsList from './newsList'
import { getTopNews } from '../../api/news'


class TopNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      errMessage: '',
      topNewsData: [],
    }
  }

  componentDidMount() {
    getTopNews()
      .then(res => this.setState({ topNewsData: res.response, isLoading: false }), err => { throw err })
      .catch(err => this.setState({ isLoading: false, errMessage: err.statusText }))
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <NewsList
        isLoading={this.state.isLoading}
        errMessage={this.state.errMessage}
        newsList={this.state.topNewsData}
        navigationProp={(item) => navigate('NewsDetail', { item: item })}
      />
    )
  }
};


export default TopNews
