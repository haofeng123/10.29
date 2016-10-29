import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

 import FirstPageComponent from './FirstPageComponent';

var STORAGE_KEY_ONE = '@haofeng:key_one';
export default class haofeng extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }


  render() {

    let defaultName = 'FirstPageComponent';
    let defaultComponent = FirstPageComponent;
    return (
      <View style={{flex:1}}>
       <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
      </View>
    );
  }
}



AppRegistry.registerComponent('haofeng', () => haofeng);