import React from 'react';
import { Share } from 'react-native';


const onShare = async (message = '', url = '', title = '') => {
  try {
    const result = await Share.share({
      message: `${title}\n\n${message}\n\nArticle source:\n${url}`,
      url: url,
      title: title
    }, {
      // Android only:
      dialogTitle: 'Share the news'
    });

    // To be used to show feedback sharing done or not.
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        alert(result.activityType)
      } else {
        alert('Article shared')
      }
    } else if (result.action === Share.dismissedAction) {
      alert('Cancelled')
    }
  } catch (error) {
    // Replace with proper feedback of error.
    alert(error.message);
  }
};


export default onShare;
