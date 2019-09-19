import React, { Component } from 'react';
import { FlatList,View, Text, Image,Button ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Tour.db', createFromLocation : 1});
export default class Package extends Component {
   constructor(props) {
      super(props);
      this.state = {
         package: [],
       };
      
      db.transaction(tx => {
         tx.executeSql(
           'SELECT * FROM Productts  ',
           [],
           (tx, results) => {
             var temp = [];
             for (let i = 0; i < results.rows.length; ++i) {
               temp.push(results.rows.item(i));
             }
             this.setState({
               package: temp,
             });
           }
         );
       });
       
    }
    img(name){
      switch (name) {
         case 'GTour.jpg': return require('./PackagePhoto/GTour.jpg');
         case 'Toompang.jpg': return require('./PackagePhoto/Toompang.jpg');
         case 'Lunch.jpg': return require('./PackagePhoto/Lunch.jpg');
         case 'Dinner.jpg': return require('./PackagePhoto/Dinner.jpg');
      }
    }
   
   render() {
      return (
         <ScrollView>
            <View style={styles.container}>
                <Text style ={styles.textTitlestyle}>Package</Text>
                <FlatList
                  data={this.state.package}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                     <View style = {styles.boxFlat}>
                        <View style ={{flexDirection : 'row'}}>
                        <Image style = {{width : 60 ,height : 60}} resizeMode = 'center' source = {this.img(item.PPhoto)}/>
                           <View>
                              <Text style = {styles.textstyle}>Name : {item.PName}</Text>
                              <Text style = {styles.textstyle}>Price : {item.PPrice}</Text>
                           </View>
                        </View>

                     </View>
                  )}
               />
            </View>
         </ScrollView>
      )
   }
}
const styles = StyleSheet.create({
    container : {
        padding : 20 ,
    },
    textTitlestyle : {
        fontSize : 34,
        color : 'red'
    },
    textstyle : {
       padding : 1.5,
      fontSize : 16
   },
   boxFlat : {
      borderBottomColor : 'black' ,
      borderBottomWidth : 1 ,
      width : '100%',
      height : 100
      }
});



