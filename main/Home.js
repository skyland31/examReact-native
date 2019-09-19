
import React, { Component } from 'react';
import { Button,View, Text, Image ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
export default class Home extends Component {
   constructor(props) {
      super(props);
    }
   
   render() {
      return (
        <View style={styles.container}>
            <Text style ={styles.textstyle}>WU Tour</Text>
            <TouchableHighlight style={styles.button} onPress={()=>this.props.navigation.navigate('Admin')}>
                <Text>Admin</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={()=>this.props.navigation.navigate('WayTrain')}>
                <Text>Electric train Ways WU</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={()=>this.props.navigation.navigate('Graph')}>
                <Text>Graph</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={()=>this.props.navigation.navigate('SelectCharacter')}>
                <Text>Character Ro</Text>
            </TouchableHighlight>
        </View>
      )
   }
}
const styles = StyleSheet.create({
    container : {
        padding : 20 ,
        width : '100%',
        height : '100%',
        alignItems : 'center',
        flexDirection : 'column',
        justifyContent : 'center',
        
    },
    textstyle : {
        fontSize : 34,
        color : 'red'
    },
    button:{
        margin: 5,
        padding : 5 ,
        height : 30,
        backgroundColor : 'blue',
        borderRadius : 45
    }
});

