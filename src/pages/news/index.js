import moment from 'moment'
import React, { Component } from 'react';
import { FlatList, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Separator, Content, Spinner, ListItem, Left, Body, Right, Thumbnail, Text, Title } from 'native-base';

import { getTopNews, getLatestNews } from '../../api/news'

const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}

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
  },
  contentContainer: {
    padding: 10,
    marginBottom: 1,
  },
  listItem: {
    marginTop: 15,
    marginLeft: 2,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10
  }
});



class NewsDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topIsLoading: true,
      topErrMessage: '',
      topNews: [],
      latestIsLoading: true,
      latestErrMessage: '',
      latestNews: []
    }
  }

  componentDidMount() {
    getTopNews()
      .then(res => this.setState({ topNews: res.response, topIsLoading: false }), err => { throw err })
      .catch(err => this.setState({ topIsLoading: false, topErrMessage: err.statusText }))

    getLatestNews()
      .then(res => this.setState({ latestNews: res.response, latestIsLoading: false }), err => { throw err })
      .catch(err => this.setState({ latestIsLoading: false, latestErrMessage: err.statusText }))
  }

  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = ({ item, index }) => (
      <ListItem
        key={index}
        style={styles.listItem}
        onPress={() => navigate('NewsDetail', { item: item })}
      >
        <Left>
          <Thumbnail source={{ uri: item.thumbnail }} />
          <Body>
            <Text style={styles.listText}>{`${item.title}`}</Text>
            <Text note>{`${item.sourceName}`}</Text>
          </Body>
        </Left>
        <Right>
          <Text note>
            {`${moment(`${item.publishedAt}`).format('DD/MM/YY, h:mm a')}`}
          </Text>
        </Right>
      </ListItem>
    );

    if (this.state.topIsLoading) {
      return (
        <Container style={styles.theme}>
          <Header style={styles.theme}>
            <Body style={styles.headerBody}>
              <Title style={styles.headerText}>Top news and updates</Title>
            </Body>
          </Header>
          <Content>
            <Spinner color='red' />
          </Content>
        </Container>

      );
    }
    else if (this.state.topErrMessage) {
      return (
        <Container style={styles.theme}>
          <Header style={styles.theme}>
            <Body style={styles.headerBody}>
              <Title style={styles.headerText}>Top news and updates</Title>
            </Body>
          </Header>
          <Content>
            <Text note>{this.state.topErrMessage || 'Error occured, Try again later'}</Text>
          </Content>
        </Container>

      );
    }
    else {
      return (
        <Container style={styles.theme}>
          <Header style={styles.theme}>
            <Body style={styles.headerBody}>
              <Title style={styles.headerText}>Top news and updates</Title>
            </Body>
          </Header>
          <ScrollView>
            <Content style={styles.contentContainer}>
              <Separator bordered>
                <Text>Top news</Text>
              </Separator>
              <FlatList
                data={this.state.topNews.slice(0, 2)}
                renderItem={renderMenuItem}
                keyExtractor={item => item._id.toString()}
              />
              <Separator bordered>
                <Text>Latest News</Text>
              </Separator>
              <FlatList
                data={this.state.latestNews.slice(0, 2)}
                renderItem={renderMenuItem}
                keyExtractor={item => item._id.toString()}
              />
            </Content>
          </ScrollView>
        </Container>
      );
    }
  }
};


export default NewsDashboard
