
import React, { Component } from 'react';
import { FlatList,View, Text, Image,Button ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Tour.db', createFromLocation : 1});
export default class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         staff: [],
       };
      db.transaction(tx => {
         tx.executeSql(
           'SELECT * FROM Staff  ',
           [],
           (tx, results) => {
             var temp = [];
             for (let i = 0; i < results.rows.length; ++i) {
               temp.push(results.rows.item(i));
             }
             this.setState({
               staff: temp,
             });
           }
         );
       });
       
    }
    img(name){
      switch (name) {
         case '7501.jpg': return require('./StaffPhoto/7501.jpg');
         case '7502.jpg': return require('./StaffPhoto/7502.jpg');
         case '7503.jpg': return require('./StaffPhoto/7503.jpg');
         case '7504.jpg': return require('./StaffPhoto/7504.jpg');
      }
    }
   
   render() {
      return (
         <ScrollView>
            <View style={styles.container}>
                <Text style ={styles.textTitlestyle}>Staff</Text>
                <FlatList
                  data={this.state.staff}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                     <View style = {styles.boxFlat}>
                        <Text style = {{fontSize :13}}>Staff Id : {item.SID}</Text>
                        <View style ={{flexDirection : 'row'}}>
                           
                           <Image style = {{width : 60 ,height : 60}} resizeMode = 'center' source = {
                              // require('./StaffPhoto/7501.jpg')
                              this.img(item.SPhoto)
                              
                           }
               
                              />
                           <View>
                              <Text style = {styles.textstyle}>Name : {item.SName}</Text>
                              <Text style = {styles.textstyle}>Telephone : {item.STelephone}</Text>
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

