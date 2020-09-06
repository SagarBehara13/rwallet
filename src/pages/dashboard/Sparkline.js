import React from 'react'
import moment from 'moment'
import { Dimensions } from 'react-native';
import Sparkline from 'react-native-sparkline';
import { LineChart } from 'react-native-chart-kit';


export default SparklineChart = (props) => {
  const xLabelDates = []
  // for (let i = props.days - 1; i >= 0; i--) {
  //   const date = props.date - i * 24 * 60 * 60 * 1000
  //   xLabelDates.push(moment(`${new Date(date)}`).format('DD'))
  // }

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }

  const chartStyle = {
    marginVertical: 8,
    borderRadius: 8,
  }

  const chartData = {
    labels: xLabelDates,
    datasets: [{ data: props.data }]
  }

  return (
    <LineChart
      data={chartData}
      withDots={false}
      withVerticalLines={false}
      withHorizontalLines={false}
      width={Dimensions.get('window').width * 0.9}
      height={220}
      chartConfig={chartConfig}
      style={chartStyle}
    />
    // <Sparkline data={props.data}>
    //   <Sparkline.Line />
    // </Sparkline>
  )
}
