import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>1Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text >Shake your phone to open the developer menu.</Text>


          <TextInput   
             style={styles.style_pwd_input}                
              placeholder='密码'  
              numberOfLines={1} 
               alignItems="center"
              underlineColorAndroid={'transparent'}   
              secureTextEntry={true}  
              textAlign='right'  
          />  


          <View style = {styles.btn}>
          </View>                              
        
        {/* <TextInput/> */}
        {/* <Text> 123</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
     btn: {
        width: 155,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23bfff',
        height: 45,    
        alignItems: 'stretch',            
        borderRadius: 4,

    },
      style_pwd_input:{    
      backgroundColor:'#fff',  
      height:45,  
  }, 
  // redColor:{
  //   textColor:redColor
  // }
});
