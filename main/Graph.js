/*Screen to delete the user*/
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import { Button, Text, View, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_id: '',
    };
  }
  render() {
    return (
      <ScrollView>
        <Text>
          Chart
        </Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }]
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel={'$'}
          chartConfig={chartCom}
          //bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        /> 
        <View >
          <PieChart 
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartCom}
            accessor="population"
            backgroundColor="black"
            paddingLeft="15"
            absolute
          />
        </View>
        <View>
          <ProgressChart
            data={dataProgress}
            width={screenWidth}
            height={220}
            chartConfig={chartCom}
          />
        </View>
        <View>
          <BarChart
            //style={graphStyle}
            data={dataBar}
            width={screenWidth}
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: 'black',
              backgroundGradientTo: '#fb8c00',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            
          />
        </View>
      </ScrollView>
    );
  }
}
const data = [
  { name: 'Seoul', population: 2150, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Toronto', population: 280, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Beijing', population: 527, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'New York', population: 8538, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Moscow', population: 11009, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
]
const chartCom = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  }
}
const dataProgress = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8]
}
const screenWidth = Dimensions.get('window').width

const dataBar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43 ]
  }]
}