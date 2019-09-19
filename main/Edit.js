import React, { Component } from 'react';
import { FlatList,View, Text, Alert,Button ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
var db = openDatabase({ name: 'Tour.db', createFromLocation : 1});
export default class Edit extends Component {
   constructor(props) {
      super(props);
      this.state = {
        GTour : this.props.navigation.state.params.GTour,
        Lunch : this.props.navigation.state.params.Lunch,
        TTour : this.props.navigation.state.params.TTour,
        Dinner : this.props.navigation.state.params.Dinner,
        CID :this.props.navigation.state.params.CID,
      }
    }
    updateDb=()=>{
        db.transaction(tx => {
           tx.executeSql(
             'UPDATE Booking set GTour=? ,Lunch = ? ,TTour = ? ,Dinner=? where CID = ?',
             [this.state.GTour,this.state.Lunch,this.state.TTour,this.state.Dinner,this.state.CID],
             (tx, results) => {
                Alert.alert("Save", "Success!!! ",[
                    {
                      text: 'Ok',
                      onPress: () =>
                        this.props.navigation.navigate('Book')
                    },
                  ]);
             }
           );
        });
    }
   
   render() {
      return (
        <View>
           
           <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.container}>Customer ID : </Text>
                <Text style = {[styles.container]}>{this.state.CID}</Text>
           </View>
           <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.container}>Garden tour : </Text>
                <View style = {[styles.container,{justifyContent :'space-between',flexDirection : 'row'}]}>{this.state.GTour == 1 ? <Icon name = "check" size = {15}/> : <Icon name = "remove" size = {15}/>}
                {this.state.GTour == 1 ? <Button title = "Cancle" color='red' onPress = {()=>this.setState({GTour :0})}/> : <Button title = "Buy" color = 'green'onPress = {()=>this.setState({GTour :1})}/>}
                </View>
           </View>
           <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.container}>Lunch : </Text>
                <View style = {[styles.container,{justifyContent :'space-between',flexDirection : 'row'}]}>{this.state.Lunch == 1 ? <Icon name = "check" size = {15}/> : <Icon name = "remove" size = {15}/>}
                {this.state.Lunch == 1 ? <Button title = "Cancle" color='red' onPress = {()=>this.setState({Lunch :0})}/> : <Button title = "Buy" color = 'green' onPress = {()=>this.setState({Lunch :1})}/>}
                </View>
           </View>
           <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.container}>Toompang tour : </Text>
                <View style = {[styles.container,{justifyContent :'space-between',flexDirection : 'row'}]}>{this.state.TTour == 1 ? <Icon name = "check" size = {15}/> : <Icon name = "remove" size = {15}/>}
                {this.state.TTour == 1 ? <Button title = "Cancle" color='red' onPress = {()=>this.setState({TTour :0})}/> : <Button title = "Buy" color = 'green' onPress = {()=>this.setState({TTour :1})}/>}
                </View>
           </View>
           <View style = {{flexDirection : 'row'}}>
                <Text style = {styles.container}>Dinner : </Text>
                <View style = {[styles.container,{justifyContent :'space-between',flexDirection : 'row'}]}>{this.state.Dinner == 1 ? <Icon name = "check" size = {15}/> : <Icon name = "remove" size = {15}/>}
                {this.state.Dinner == 1 ? <Button title = "Cancle" color='red' onPress = {()=>this.setState({Dinner :0})} /> : <Button title = "Buy" color = 'green' onPress = {()=>this.setState({Dinner :1})}/>}
                </View>
           </View>
           <Button title = "Save"  onPress = {this.updateDb} />
        </View>
      )
   }
}
const styles = StyleSheet.create({
    container : {
        padding : 20 ,
        width : '50%',
        height : 80
    },
 });
 




