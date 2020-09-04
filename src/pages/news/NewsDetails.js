import moment from 'moment'
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Thumbnail, Button, Card, CardItem, Text, Title, Right, Body, Left } from 'native-base';

import * as news from '../../api/news'


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
  contentContainer: {
    padding: 10,
  },
});



class ListingDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: null
    }
  }

  componentDidMount() {
    news.getTopNews().then(res => this.setState({ news: res })).catch(res => this.setState({ news: res }))
  }

  render() {
    const item = this.props.navigation.getParam('item', {});;

    return (
      <Container style={styles.theme}>
        <Header style={styles.theme}>
          <Body style={styles.headerBody}>
            <Title style={styles.headerText}>News Details</Title>
          </Body>
        </Header>
        <Content style={styles.contentContainer}>
          <Card>
            <CardItem header>
              <Left>
                <Thumbnail source={{ uri: item.thumbnail }} />
                <Body>
                  <Text>{`${item.title}`}</Text>
                  <Text note>{`${item.sourceName}`}</Text>
                </Body>
              </Left>
              <Right>
                <Text note>
                  {`${moment(`${item.publishedAt}`).format('DD/MM/YY, h:mm a')}`}
                </Text>
                <Text note>{`${item.sourceDomaing}`}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text note>
                  {
                    `${item.price_change_percentage_1h_in_currency ?
                      item.price_change_percentage_1h_in_currency.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%' :
                      '-'}`
                  }
                </Text>
              </Body>
              <Body>
                <Text note>
                  {
                    `${item.description}`
                  }
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );

  }
};


export default ListingDetail
