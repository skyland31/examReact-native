
import React, { Component } from 'react';
import { FlatList,View, Text, Image ,StyleSheet,Button,ScrollView} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
var db = openDatabase({ name: 'Tour.db', createFromLocation : 1});
export default class Book extends Component {
   constructor(props) {
      super(props);
      this.state = {
         booking: [],
         sumL: 0,
         sumT: 0,
         sumD: 0,
         sumG: 0,
         find:[],
         title : ''

       };
      this.select();
    
   }
   select(){
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Booking',
        [],
        (tx, results) => {
          var temp = [];
          var tempG = 0;
          var tempL = 0;
          var tempT = 0;
          var tempD = 0;
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
            tempG = tempG + results.rows.item(i).GTour;
            tempL = tempL+ results.rows.item(i).Lunch;
            tempT = tempT+ results.rows.item(i).TTour;
            tempD = tempD + results.rows.item(i).Dinner;
          }
          this.setState({
            booking: temp,
          });
          {this.setState({
            sumG : tempG,
            sumL : tempL,
            sumT : tempT,
            sumD : tempD
        })}
        }
      );
    });
   }
   findCG = () => {
      db.transaction(tx => {
         tx.executeSql(
           'SELECT * FROM Booking where GTour = ?',
           [1],
           (tx, results) => {
             var temp = [];
             for (let i = 0; i < results.rows.length; ++i) {
               temp.push(results.rows.item(i));
             }
             this.setState({
              find: temp,
             });
           }
         );
       });
   }
   findCL = () => {
      db.transaction(tx => {
         tx.executeSql(
           'SELECT * FROM Booking where Lunch = ?',
           [1],
           (tx, results) => {
             var temp = [];
             for (let i = 0; i < results.rows.length; ++i) {
               temp.push(results.rows.item(i));
             }
             this.setState({
              find: temp,
             });
           }
         );
       });
   }
   findCT = () => {
      db.transaction(tx => {
         tx.executeSql(
           'SELECT * FROM Booking where TTour = ?',
           [1],
           (tx, results) => {
             var temp = [];
             for (let i = 0; i < results.rows.length; ++i) {
               temp.push(results.rows.item(i));
             }
             this.setState({
              find: temp,
             });
           }
         );
       });
       
   }
   findCD = () => {
      db.transaction(tx => {
         tx.executeSql(
           'SELECT * FROM Booking where Dinner = ?',
           [1],
           (tx, results) => {
             var temp = [];
             for (let i = 0; i < results.rows.length; ++i) {
               temp.push(results.rows.item(i));
             }
             this.setState({
              find: temp,
             });
           }
         );
       });
   }
   
   
   render() {
      return (
         <ScrollView>
           {
             db.transaction(tx => {
              tx.executeSql(
                'SELECT * FROM Booking',
                [],
                (tx, results) => {
                  var temp = [];
                  
                  for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));

                  }
                  this.setState({
                    booking: temp,
                  });
                }
              );
            })
           }
          
            <View style={styles.container}>
                <Text style ={styles.textTitlestyle}>Book</Text>
                <FlatList
                  data={this.state.booking}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                     <View style = {styles.boxFlat}>
                        <Text style = {{fontSize :13}}>Customer Id : {item.CID}</Text>
                        <View style ={{flexDirection : 'row',justifyContent : 'space-between'}}>
                           <View>
                              <Text style = {styles.textstyle}>Garden tour </Text> 
                              {item.GTour == 1 ? <Icon name = "check" size = {15}/>: <Icon name = "remove" size = {15}/>}
                              {/* {this.setState({sumG : this.state.sumG + item.GTour,})} */}
                           </View>
                           <View>
                              <Text style = {styles.textstyle}>Lunch </Text>
                              {item.Lunch == 1 ? <Icon name = "check" size = {15}/>: <Icon name = "remove" size = {15}/>}
                              {/* {this.setState({sumL : this.state.sumL + item.Lunch})} */}
                           </View>
                           <View>
                              <Text style = {styles.textstyle}>Toompang tour</Text>
                              {/* {this.setState({sumT : this.state.sumT + item.TTour})} */}
                              {item.TTour == 1 ? <Icon name = "check" size = {15}/>: <Icon name = "remove" size = {15}/>}
                           </View>
                           <View>
                              <Text style = {styles.textstyle}>Dinner</Text>
                              {/* {this.setState({sumD : this.state.sumD + item.Dinner})} */}
                              {item.Dinner == 1 ? <Icon name = "check" size = {15}/>: <Icon name = "remove" size = {15}/>}
                           </View>   
                        </View>
                        <Button style = {{padding : 2}} title = 'edit' onPress = {()=>this.props.navigation.navigate('Edit',{CID : item.CID ,
                        GTour : item.GTour,
                        Lunch : item.Lunch,
                        TTour : item.TTour,
                        Dinner : item.Dinner
                        })}/>
                     </View>
                  )}
               />
            </View>
            <Text style = {{fontSize :13}}>Garden tour : {this.state.sumG} Lunch : {this.state.sumL} Toompang tour : {this.state.sumT} Dinner : {this.state.sumD}</Text>
            <Button style = {{padding : 2}} title = 'Refresh Total' onPress ={()=>this.select()}/>
            <Text style = {{color : 'red'}}>Find Customer Of Package</Text>
            <View style = {{flexDirection : 'row',justifyContent : 'space-around',padding : 10}}>
               <Button title = "Garden" onPress = {this.findCG}/>
               <Button title = "Lunch" onPress = {this.findCL}/>
               <Button title = "Toompang" onPress = {this.findCT}/>
               <Button title = "Dinner" onPress = {this.findCD}/>            
            </View>
            <FlatList
                  data={this.state.find}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                     <View style = {{borderBottomColor : 'black' ,borderBottomWidth : 1 ,width : '100%',height : 30}}>
                        <Text style = {{fontSize :13}}>Customer Id : {item.CID}</Text>
                     </View>
                  )}
               />
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

