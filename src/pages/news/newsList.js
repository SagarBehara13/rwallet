import React, { Component } from 'react';
import { FlatList, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Spinner, ListItem, Left, Body, Thumbnail, Text } from 'native-base';


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
    textAlign: 'justify',
    fontFamily: 'Avenir-Heavy',
  },
  contentContainer: {
    padding: 10,
    marginBottom: 1,
  },
  listItem: {
    marginLeft: 2,
  }
});



class NewsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderListItem = ({ item, index }) => (
      <ListItem
        key={index}
        style={styles.listItem}
        onPress={() => this.props.navigationProp(item)}
      >
        <Left>
          <Thumbnail source={{ uri: item.thumbnail || item.originalImageUrl }} />
          <Body>
            <Text style={styles.listText}>{`${item.title}`}</Text>
            <Text note>{`${item.sourceName || item.sourceDomain || 'Anonymous'}`}</Text>
          </Body>
        </Left>
      </ListItem>
    );

    if (this.props.isLoading) return (
      <Container style={styles.theme}>
        <Content>
          <Spinner />
        </Content>
      </Container>
    )

    if (this.props.errMessage) return (
      <Container style={styles.theme}>
        <Content>
          <Text>Error</Text>
        </Content>
      </Container>
    );

    return (
      <Container style={styles.theme}>
        <ScrollView>
          <Content>
            <FlatList
              data={this.props.newsList}
              renderItem={renderListItem}
              keyExtractor={item => item._id.toString()}
            />
          </Content>
        </ScrollView>
      </Container>
    );
  }
};


export default NewsList
