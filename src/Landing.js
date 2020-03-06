import React, { Component } from "react";
import { Dimensions, ImageBackground,StyleSheet, Text, View, Platform , Image} from 'react-native';
import {Button} from 'native-base'

var myBackground = require('../assets/landing.jpg')
var {height, width} = Dimensions.get('window');

export class Landing extends Component {
  render() {
    return (
      <View style = {{ flex : 1}}>
        <ImageBackground
          source={myBackground}
          style={{ width: width, height: height }}
        >
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button block={true} 
                style={styles.buttonStyle} 
                onPress={()=>this.props.switchScreen("search")}
            >
              <Text style={styles.buttonText}>Start Searching</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle : {
      flex : 1 ,
      flexDirection : 'column',
      justifyContent : "center",
      alignItems : 'center'
    },
    titleStyle : {
      fontSize : 30,
      color : "blue",
      alignItems : "center"
    },
    buttonStyle : {
      margin : 20,
    },
    buttonText : {
      color : 'white'
    }
  });

export default Landing;
