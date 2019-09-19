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
        <View >
          <PieChart 
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartCom}
            accessor="cost"
            backgroundColor="black"
            paddingLeft="15"
            absolute
          />
        </View>
      </ScrollView>
    );
  }
}
const data = [
  { name: 'Pawarin', cost: 2150, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Kittiphob', cost: 280, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Phongsathon', cost: 527, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Fareeda', cost: 8538, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 }
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
const screenWidth = Dimensions.get('window').width
