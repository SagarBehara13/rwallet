import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation';

import TopNews from './topNews'
import LatestNews from './latestNews'


export default createMaterialTopTabNavigator({
  'Top news': TopNews,
  'Latest news': LatestNews
},
  {
    tabBarOptions: {
      activeTintColor: 'white',
      showLabel: true,
      style: {
        color: 'white',
        backgroundColor: '#33313b'
      }
    },
  }
);
