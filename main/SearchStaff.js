
import React, { Component } from 'react';
import { Button,View, Text, Image ,StyleSheet,TouchableHighlight,ScrollView,TextInput} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Tour.db', createFromLocation : 1});
export default class SearchStaff extends Component {
   constructor(props) {
      super(props);
      this.state = {
         local : null,
         name: '',
         staffId:0,
         tel : '',
         input : ''
       };
      
    }
    search=()=> {
      db.transaction(tx => {
         tx.executeSql(
           'SELECT * FROM Staff Where SID = ? or SName = ?',
           [this.state.input,this.state.input],
           (tx, results) => {
             var len = results.rows.length;
            if(len > 0){
                this.setState({
                  name : results.rows.item(0).SName,
                  staffId : results.rows.item(0).SID,
                  tel: results.rows.item(0).STelephone,
                  local : results.rows.item(0).SPhoto
                });
                alert('Search Success');
                
            }
            else {
               alert('Not found');
            }
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
                <Text style ={styles.textTitleStyle}>Search Staff</Text>
                <TextInput style = {styles.textInput} onChangeText = {(input) => this.setState({input})} placeholder = 'Please ID or Name of Staff' />
                <Button style = {styles.buttonstyle} title = 'Search Staff' onPress = {this.search}/>
                <View style = {styles.boxFlat}>
                  <Text style = {{fontSize :13}}>Staff Id : {this.state.staffId}</Text>
                  <View style ={{flexDirection : 'row'}}>
                     <Image style = {{width : 60 ,height : 60}} resizeMode = 'center' source = {this.img(this.state.local)}/>
                     <View>
                        <Text style = {styles.textstyle}>Name : {this.state.name}</Text>
                        <Text style = {styles.textstyle}>Telephone : {this.state.tel}</Text>
                     </View>
                  </View>
               </View>
            </View>
         </ScrollView>
      )
   }
}
const styles = StyleSheet.create({
    container : {
        padding : 20 ,
        width : '100%'
    },
    textTitleStyle : {
      alignSelf : 'center',
      padding : 1.5,
      fontSize : 34,
      color : 'red'
    },
    textInput : {
       padding : 1.5,
       width : '90%',
       borderWidth: 1,
       margin : 20
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
   },
   buttonstyle : {
      width : '90%'
   }
});

