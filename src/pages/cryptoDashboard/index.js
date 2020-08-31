import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { FlatList, Text, View } from 'react-native';

import { getTopListingsMarketData } from '../../clientApi'


class CryptoDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      errMess: '',
      topCoinList: []
    }
  }

  static navigationOptions = {
    title: 'Top 100 coins according to their Market Cap.'
  }

  componentDidMount() {
    getTopListingsMarketData()
      .then(res => this.setState({ topCoinList: res, isLoading: false }), err => { throw err })
      .catch(err => this.setState({ isLoading: false, errMess: err.statusText }))
  }

  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = ({ item, index }) => (
      <ListItem
        key={index}
        title={`${item.name} (${item.symbol.toUpperCase()})`}
        subtitle={`Current Price: ${item.current_price}`}
        // onPress={() => navigate('Dishdetail', { dishId: item.id })}
        leftAvatar={{ size: 'medium', source: { uri: item.image } }}
      />
    );

    if (this.state.isLoading) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    else if (this.state.errMess) {
      return (
        <View>
          <Text>{this.state.errMess}</Text>
        </View>
      );
    }
    else {
      return (
        <FlatList
          data={this.state.topCoinList}
          renderItem={renderMenuItem}
          keyExtractor={item => item.market_cap_rank.toString()}
        />
      );
    }
  }
};


export default CryptoDashboard
