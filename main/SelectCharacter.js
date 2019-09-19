
import React, { Component } from 'react';
import { ScrollView,View, Text, Image ,StyleSheet,TouchableHighlight} from 'react-native'
export default class SelectCharacter extends Component {
  
   constructor(props){
     super(props)
     this.state = {sex : true , count : 0,
      class : [{'className' : 'Sword','M' : require('./img/swordMan.jpg') , 'W' : require('./img/swordWoman.jpg')},
      {'className' : 'Wizard','M' : require('./img/magicMan.jpg') , 'W' : require('./img/magicWoman.jpg')},
      {'className' : 'Assasin','M' : require('./img/assasin.png') , 'W' : require('./img/assasinW.png')},
      ]
    }
   }
   changSex = ()=> {
     this.setState(oldstate =>{
       return {sex : !oldstate.sex }
     })
   }
   setrightcount = () => {
     this.setState(oldstate => { 
      if(this.state.count == 2){
        return {count : 0};
      }
      else{
        return {count : oldstate.count +1}
      }
     })
   }
   setleftcount = () => {
    this.setState(oldstate => { 
     if(this.state.count == 0){
       return {count : 2};
     }
     else{
       return {count : oldstate.count -1}
     }
    })
  }
   render() {
      return (
        <ScrollView>
         <View style={styles.container}>
            {this.state.class.map((classN , key) =>(
              <View>
                {this.state.count == key ? <Text style = {styles.editText}>อาชีพ : {classN.className} </Text> : null}
                <View style = {{justifyContent : 'space-between' , flexDirection : 'row'}}>
                  <View style = {{justifyContent : 'center'}}>
                  {this.state.count == key ?<TouchableHighlight onPress = {this.setleftcount} underlayColor = 'white'>
                      <Image source={require('./img/back.png')} style={{height: 30, width: 30 }}/>
                    </TouchableHighlight>: null}
                  </View>
                  {this.state.count == key ? <Image resizeMode = 'contain' source={this.state.sex ? classN.M : classN.W} style={{height: 400, width: 300 }}/> : null}
                  <View style = {{justifyContent : 'center'}}>
                  {this.state.count == key ?<TouchableHighlight onPress = {this.setrightcount} underlayColor = 'white'>
                      <Image source={require('./img/next.png')} style={{height: 30, width: 30 }}/>
                    </TouchableHighlight> : null}
                  </View>
                </View> 
              </View>
              ))
            }
            <TouchableHighlight onPress = {this.changSex} underlayColor = 'white' style ={{backgroundColor : "yellow"}}>
              <Text>เปลี่ยนเพศตัวละคร : {this.state.sex ? 'ชาย' : 'หญิง'}</Text>
            </TouchableHighlight>
         </View>
         </ScrollView>
      )
   }
}
const styles = StyleSheet.create({
  editText: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color : '#CC0033'
 },
 container: {
    //paddingTop: 20,
    alignItems: 'center',
    justifyContent : 'space-between'

  },
  input: {
    marginEnd: 10,
    alignItems : 'flex-end',
    height: 40,
    width: 260,
    // borderColor: '#7a42f4',
    // borderWidth: 1
  },
  
  
});

 