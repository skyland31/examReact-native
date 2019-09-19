import React, { Component } from 'react';
import { FlatList,View, Text, Image,Button ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Tour.db', createFromLocation : 1});
export default class Customer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         package: [],
       };
      
      db.transaction(tx => {
         tx.executeSql(
           'SELECT * FROM Customer  ',
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
    
   
   render() {
      return (
         <ScrollView>
            <View style={styles.container}>
                <Text style ={styles.textTitlestyle}>Customer</Text>
                <FlatList
                  data={this.state.package}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                     <View style = {styles.boxFlat}>
                        <Text style = {{fontSize :13}}>Customer Id : {item.CID}</Text>
                        <View style ={{flexDirection : 'row'}}>
                           <View>
                              <Text style = {styles.textstyle}>Name : {item.CName}</Text>
                              <Text style = {styles.textstyle}>Telephone : {item.CTelephone}</Text>
                              <Text style = {styles.textstyle}>Sex : {item.Csex =='M'? 'ชาย' : 'หญิง'}</Text>
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




