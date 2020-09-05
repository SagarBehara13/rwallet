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
    padding: 10
  }
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
            <Title style={styles.headerText}>Coin Details</Title>
          </Body>
        </Header>
        <Content style={styles.contentContainer}>
          <Card>
            <CardItem header>
              <Left>
                <Thumbnail source={{ uri: item.image }} />
                <Body>
                  <Text>{`${item.symbol.toUpperCase()}`}</Text>
                  <Text note>{`${item.name}, #${item.market_cap_rank}`}</Text>
                </Body>
              </Left>
              <Right>
                <Text note>
                  {`${moment(`${item.last_updated}`).format('DD/MM/YY, h:mm a')}`}
                </Text>
                <Text note>{`Curr. $${item.current_price.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{`1h % Change`}</Text>
                <Text note>
                  {
                    `${item.price_change_percentage_1h_in_currency ?
                      item.price_change_percentage_1h_in_currency.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%' :
                      '-'}`
                  }
                </Text>
              </Body>
              <Body>
                <Text>{`24h % Change`}</Text>
                <Text note>
                  {
                    `${item.price_change_percentage_24h_in_currency ?
                      item.price_change_percentage_24h_in_currency.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%' :
                      '-'}`
                  }
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{`24h Price change`}</Text>
                <Text note>
                  {
                    `${item.price_change_24h ?
                      '$' + item.price_change_24h.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
                      '-'}`
                  }
                </Text>
              </Body>
              <Body>
                <Text>{`24h Low`}</Text>
                <Text note>
                  {
                    `${item.low_24h ?
                      '$' + item.low_24h.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
                      '-'}`
                  }
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{`7d % Change`}</Text>
                <Text note>
                  {
                    `${item.price_change_percentage_7d_in_currency ?
                      item.price_change_percentage_7d_in_currency.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%' :
                      '-'}`
                  }
                </Text>
              </Body>
              <Body>
                <Text>{`Total Volume`}</Text>
                <Text note>
                  {
                    `${item.total_volume ?
                      item.total_volume.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
                      '-'}`
                  }
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{`Market Cap.`}</Text>
                <Text note>
                  {
                    `${item.market_cap ?
                      item.market_cap.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
                      '-'}`
                  }
                </Text>
              </Body>
              <Body>
                <Text>{`24h Market cap.`}</Text>
                <Text note>
                  {
                    `${item.market_cap_change_percentage_24h ?
                      item.market_cap_change_percentage_24h.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '%' :
                      '-'}`
                  }
                </Text>
              </Body>
            </CardItem>
          </Card>
          <CardItem style={styles.theme}>
            <Body>
              <Button bordered light>
                <Text>Top Highlishts</Text>
              </Button>
            </Body>
            <Body>
              <Button bordered light>
                <Text>Latest News</Text>
              </Button>
            </Body>
          </CardItem>
        </Content>
      </Container>
    );

  }
};


export default ListingDetail
