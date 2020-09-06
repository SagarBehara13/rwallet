import moment from 'moment'
import React, { PureComponent } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Header, Content, Card, CardItem, Text, Title, Body } from 'native-base';


const { width } = Dimensions.get('window');
const viewWidth = width * 0.9;


const styles = StyleSheet.create({
  theme: {
    backgroundColor: '#33313b',
  },
  leftAlignText: {
    textAlign: 'left'
  },
  headerBody: {
    borderBottomWidth: 0,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
  },
  headerText: {
    alignSelf: 'baseline',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'justify',
    fontFamily: 'Avenir-Heavy',
  },
  contentContainer: {
    padding: 10,
  },
  carouselContainer: {
    alignSelf: 'baseline'
  },
  cardItem: {
    minHeight: 150
  }
});


export default class RecommendationCarousel extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const renderItem = ({ item, index }) => (
      <Card>
        <CardItem style={styles.cardItem}>
          <Body>
            <Text style={styles.leftAlignText}>{`${item.title}`}</Text>
            <Text style={styles.justifyText} note>
              {`${item.sourceName || item.sourceDomain || 'Anonymous'}`}
              {`, ${moment(`${item.publishedAt || new Date()}`).format('DD/MM/YY, h:mm a')}`}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );

    return (
      <Content style={styles.contentContainer}>
        <Header style={[styles.theme, styles.headerBody]}>
          <Body>
            <Title style={styles.headerText}>Similar artciles</Title>
          </Body>
        </Header>
        <Content>
          <Carousel
            style={styles.carouselContainer}
            layout={'default'}
            data={this.props.recommendations}
            renderItem={renderItem}
            sliderWidth={viewWidth}
            itemWidth={viewWidth - 40}
            onSnapToItem={(index) => this.setState({ activeSlide: index })}
          />
        </Content>
      </Content>
    );
  }
}
