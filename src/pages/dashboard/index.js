import React, { Component } from 'react';
import { FlatList, StyleSheet, ScrollView } from 'react-native';
import { Container, Header, Content, Spinner, ListItem, Left, Body, Right, Thumbnail, Text, Title } from 'native-base';

import { getTopListingsMarketData } from '../../api/coinGecko'


const styles = StyleSheet.create({
  theme: {
    backgroundColor: '#33313b',
  },
  headerBody: {
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Avenir-Heavy',
  },
  listText: {
    color: 'white',
    fontFamily: 'Avenir-Heavy',
    marginTop: 10,
    marginLeft: 10
  },
  listName: {
    marginLeft: 10
  },
  contentContainer: {
    padding: 10,
    marginBottom: 1,
  },
  listItem: {
    marginTop: 10,
    marginLeft: 2,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10
  },
  imgLogo: {
    marginLeft: 15
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
        style={styles.listItem}
        onPress={() => navigate('ListingDetail', { item: item })}
      >
        <Left>
          <Thumbnail style={styles.imgLogo} source={{ uri: item.image }} />
          <Body>
            <Text style={styles.listText}>{`${item.symbol.toUpperCase()}`}</Text>
            <Text style={styles.listName} note>{`${item.name}`}</Text>
          </Body>
        </Left>
        <Right>
          <Text note>
            {
              `${item.price_change_percentage_1h_in_currency ?
                item.price_change_percentage_1h_in_currency.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%' :
                '-'}`
            }
          </Text>
        </Right>
      </ListItem>
    );

    if (this.state.isLoading) {
      return (
        <Container style={styles.theme}>
          <Header style={styles.theme}>
            <Body style={styles.headerBody}>
              <Title style={styles.headerText}>Top 100 coins by their Market Cap.</Title>
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
        <Container style={styles.theme}>
          <Header style={styles.theme}>
            <Body style={styles.headerBody}>
              <Title style={styles.headerText}>Top 100 coins by their Market Cap.</Title>
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
        <Container style={styles.theme}>
          <Header style={styles.theme}>
            <Body style={styles.headerBody}>
              <Title style={styles.headerText}>Top 100 coins by their Market Cap.</Title>
            </Body>
          </Header>
          <ScrollView>
            <Content style={styles.contentContainer}>
              <FlatList
                data={this.state.topListingsMarketData}
                renderItem={renderMenuItem}
                keyExtractor={item => item.market_cap_rank ? item.market_cap_rank.toString() : item.id}
              />
            </Content>
          </ScrollView>
        </Container>
      );
    }
  }
};


export default CryptoDashboard
