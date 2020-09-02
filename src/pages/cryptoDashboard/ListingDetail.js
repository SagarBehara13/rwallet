import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import moment from 'moment'
import { Container, Header, Content, Thumbnail, Card, CardItem, Text, Icon, Right, Body, Left } from 'native-base';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33313b',
  },
  header: {
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
  }
});


class ListingDetail extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const item = this.props.navigation.getParam('item', {});;

    return (
      <Container>
        <Header />
        <Content>
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
                  {`${moment(`${item.last_updated}`).format('YYYY-MM-DD, h:mm a')}`}
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
        </Content>
      </Container>
    );

  }
};


export default ListingDetail
