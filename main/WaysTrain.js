
import React, { Component } from 'react';
import { FlatList,View, Text, Image ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
const ways = [
    {
        // main : require('./train/green.jpg'),
        way : require('./train/greenway.jpg')
    },
    {
        // main : require('./train/red.jpg'),
        way : require('./train/redway.jpg')
    },
    {
        // main : require('./train/blue.jpg'),
        way : require('./train/blueway.jpg')
    },
    {
        // main : require('./train/skyblue.jpg'),
        way : require('./train/skyblueway.jpg')
    },
    {
        // main : require('./train/gray.jpg'),
        way : require('./train/grayway.jpg')
    },
    {
        // main : require('./train/yellow.jpg'),
        way : require('./train/yellowway.jpg')
    },
]
export default class WayTrain extends Component {
   constructor(props) {
      super(props);
    }
   render() {
      return (
         <ScrollView>
            <View style={styles.container}>
                <FlatList
                    numColumns={1}
                    data={ways}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Image resizeMode = 'contain' style = {styles.img} resizeMode = 'center' source = {item.way}/>
                    )}
                />
            </View>
         </ScrollView>
      )
   }
}
const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        padding : 20 ,
        justifyContent : 'center'
    },
    img : {
        paddingTop : 1,
       width :300,
       height : 300,
    },
    text : {
       margin: 5,
       fontSize :18
      },
   textsmall : {
      fontSize :15,
      color : 'red'
   }
});
