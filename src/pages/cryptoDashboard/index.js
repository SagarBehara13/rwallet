import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container, Header, Content, Spinner, Icon, ListItem, Left, Body, Right, Thumbnail, Text, Title } from 'native-base';

import { getTopListingsMarketData } from '../../clientApi'



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33313b',
  },
  headerTitle: {
    textAlign: 'center',
    backgroundColor: '#33313b',
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#eaeaea"
  },
  listItem: {
    borderRadius: 2
  }
});



class CryptoDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      errMessage: '',
      topListingsMarketData: []
    }
  }

  componentDidMount() {
    getTopListingsMarketData()
      .then(res => this.setState({ topListingsMarketData: res, isLoading: false }), err => { throw err })
      .catch(err => this.setState({ isLoading: false, errMessage: err.statusText }))
  }

  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = ({ item, index }) => (
      <ListItem
        key={index}
        avatar
        onPress={() => navigate('ListingDetail', { item: item })}
      >
        <Left>
          <Thumbnail source={{ uri: item.image }} />
        </Left>
        <Body>
          <Text>{`${item.name} (${item.symbol.toUpperCase()})`}</Text>
          <Text note>{`Current Price: ${item.current_price}`}</Text>
        </Body>
        <Right>
          <Text note>
            <Icon name="arrow-forward" />
          </Text>
        </Right>
      </ListItem>
    );

    if (this.state.isLoading) {
      return (
        <Container style={styles.container}>
          <Header style={styles.container}>
            <Body>
              <Title style={styles.headerTitle}>Top 100 coins by their Market Cap.</Title>
            </Body>
          </Header>
          <Content>
            <Spinner color='red' />
          </Content>
        </Container>

      );
    }
    else if (this.state.errMessage) {
      return (
        <Container style={styles.container}>
          <Header style={styles.container}>
            <Body>
              <Title style={styles.headerTitle}>Top 100 coins by their Market Cap.</Title>
            </Body>
          </Header>
          <Content>
            <Text note>{this.state.errMessage || 'Error occured, Try again later'}</Text>
          </Content>
        </Container>

      );
    }
    else {
      return (
        <Container style={styles.container}>
          <Header style={styles.container}>
            <Body>
              <Title style={styles.headerTitle}>Top 100 coins by their Market Cap.</Title>
            </Body>
          </Header>
          <Content>
            <FlatList
              data={this.state.topListingsMarketData}
              renderItem={renderMenuItem}
              keyExtractor={item => item.market_cap_rank.toString()}
            />
          </Content>
        </Container>
      );
    }
  }
};


export default CryptoDashboard
