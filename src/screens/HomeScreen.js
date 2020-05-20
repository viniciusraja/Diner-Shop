import { LinearGradient } from 'expo-linear-gradient';
import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
  Linking,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import LoginContainer from '../components/container/LoginContainer';
import Header from '../components/container/Header';
import Constants from '../config/constants/Constants';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  shouldComponentRender=()=> {
  }

  render() {

    if (this.shouldComponentRender())
      return (
        <LinearGradient
          colors={[Constants.Colors.forestGreeen, Constants.Colors.lightforestGreeen]}
          start={[0, 0]}
          end={[0, 1]}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
          <ActivityIndicator size={60} color={Constants.Colors.darkGreen} />
        </LinearGradient>
      );

    return (
      <LinearGradient
      colors={[Constants.Colors.forestGreeen, Constants.Colors.lightforestGreeen]}
      start={[0, 0]}
        end={[0.5, 1]}
        style={{ flex: 1 }}>
        <View style={styles.container}>
          <Header/>
          <LoginContainer/>
          
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});



export default HomeScreen;