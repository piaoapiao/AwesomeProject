import React from 'react';
import { StyleSheet, Text, View,TextInput ,Image,Button,Alert,WebView,Picker,Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class App extends React.Component {


     constructor(props: any ) {
        super(props);
        this.state = {language:'java'}
    }

//  onPressLearnMore()
//  {
//     console.log("click")
//  }

// var DEFAULT_URL = "https://www.baidu.com";

//var url = "http://www.58.com";

// var BGWASH = 'rgba(255,255,255,0.8)';

 onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>

        <Button
            title = "click2"
            color = "red"
            onPress={this.onPressButton}
            accessibilityLabel="Learn more2 about this purple button"
         />

        <Text>1Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text >Shake your phone to open the developer menu.</Text>         

         <Image source={require('./img/image.jpg')} style={{width:100,height:100}} />

         <Button
            title = "click"
            color = "red"
            onPress={() => { Alert.alert('You tapped the button!')}}
            accessibilityLabel="Learn more about this purple button"
         />      

          <TextInput   
             style={styles.style_pwd_input}                
              placeholder='密码'  
              numberOfLines={1} 
               alignItems="center"
              underlineColorAndroid={'transparent'}   
              secureTextEntry={true}  
              textAlign='center'  
          />  


          <View style = {styles.btn}>
          </View>  

        <Picker style={{ marginLeft:7, marginRight:8, flex:1}}
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>          
        <Picker.Item label="Java2" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>


          <WebView
           style = {{
            backgroundColor: "white",
            height: 200,
            width:200,
           }}
            source = {{uri: "http://www.baidu.com"}}
            javaScriptEnabled={true} 
            domStorageEnabled={true} 
            scalesPageToFit={false}  
          />
    

        
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
 webView: {
    // backgroundColor: BGWASH,
    height: 350,
  },    
  // redColor:{
  //   textColor:redColor
  // }
});
