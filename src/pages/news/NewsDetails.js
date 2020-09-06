import moment from 'moment'
import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Title, Body, Icon, Right, Left } from 'native-base';

import RecommendationCarousel from './recommendations'
import onShare from '../../components/common/share'


const styles = StyleSheet.create({
  theme: {
    backgroundColor: '#33313b',
  },
  justifyText: {
    textAlign: 'justify'
  },
  leftAlignText: {
    textAlign: 'left'
  },
  headerBody: {
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'justify',
    fontFamily: 'Avenir-Heavy',
  },
  categoryContainerAlign: {
    marginLeft: 0,
  },
  contentContainer: {
    padding: 10,
  },
});


class ListingDetail extends Component {
  constructor(props) {
    super(props);
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
        <ScrollView>
          <Content style={styles.contentContainer}>
            <Card>
              <CardItem header>
                <Body>
                  <Text style={styles.leftAlignText}>{`${item.title}`}</Text>
                  <Text style={styles.justifyText} note>
                    {`${item.sourceName || item.sourceDomain || 'Anonymous'}`}
                    {`, ${moment(`${item.publishedAt || new Date()}`).format('DD/MM/YY, h:mm a')}`}
                  </Text>
                </Body>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{ uri: item.thumbnail || item.originalImageUrl }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={styles.justifyText}>
                    {
                      `${item.description}`
                    }
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Text
                    style={styles.categoryContainerAlign}
                    note
                  >
                    #{`${item.primaryCategory.toLowerCase()}`}
                    {item.coins.map(c => `, #${c.tradingSymbol.toLowerCase()}`)}
                  </Text>
                </Left>
                <Right>
                  <Icon
                    name='paper-plane'
                    onPress={() => {
                      onShare(item.description, item.url, item.title)
                    }}
                  />
                </Right>
              </CardItem>
            </Card>
          </Content>
          <RecommendationCarousel recommendations={item.similarArticles} />
        </ScrollView>
      </Container>
    );

  }
};


export default ListingDetail
