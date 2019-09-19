
import React, { Component } from 'react';
import { FlatList,View, Text, Image ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
export default class Admin extends Component {
   constructor(props) {
      super(props);
    }
   
   render() {
      return (
         <ScrollView>
            <View style={styles.container}>
                <Image style = {styles.img} source = {require('./admin/admin.jpg')}/>
                <Text style = {styles.text}>ชื่อ : นาย สุทธิพงษ์ จินตาแก้ว</Text>
                <Text style = {styles.text}>มหาวิทยาลัยวลัยลักษณ์</Text>
                <Text style = {styles.textsmall}>สำนักวิชา สารสนเทศศาตร์</Text>
                <Text style = {styles.textsmall}>หลักสูตร วิศวกรรมซอฟต์แวร์</Text>
                <Text style = {styles.textsmall}>โทร : 091-315-2524</Text>
                <Text style = {styles.textsmall}>Facebook : Suttipong Jintakaew</Text>
                <Text style = {styles.textsmall}>Email : suttipong.kay.10@gmail.com</Text>
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
       width :200,
       height : 200,
      borderRadius : 360
    },
    text : {
       margin: 5,
       fontSize :18
      },
   textsmall : {
      margin: 5,
      fontSize :15
   }
});

