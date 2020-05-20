import React, {useState} from 'react';
import { View, Animated, TouchableOpacity, Text, TextInput } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { SimpleLineIcons, FontAwesome, AntDesign } from '@expo/vector-icons'; 
import { styles } from './styles';
import Constants from '../../../config/constants/Constants'
import {googleIosClientId, googleAndroidClientId, facebookId} from '../../../config/constants/constantsKeys'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import {showLoginComponent} from '../../../store/ducks/actions/showComponent'


async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      androidClientId: googleAndroidClientId,
      iosClientId: googleIosClientId,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}


async function logInWithFacebook() {
  try {
    await Facebook.initializeAsync(facebookId);
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}


const LoginContainer = (props) => {
  const dispatch= useDispatch()
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const loginIsOpened= useSelector(state => (state.showComponent.loginContainer))
  return (
        loginIsOpened?<View style={styles.loginContainer} >
        <TouchableOpacity
       onPress={()=>dispatch(showLoginComponent())}
        style={{alignSelf:'flex-end', marginRight:10}}
        >
        <AntDesign name="close" size={20} color={Constants.Colors.lightGrey} />
        </TouchableOpacity>

        <View style={styles.inputsAndUserImgContainer}>
        <FontAwesome name="user-circle" size={75} color={Constants.Colors.lightGrey} />
        <View style={styles.signInContainer}>
        <TextInput style={styles.input}
          placeholder=" Email"
          placeholderTextColor={Constants.Colors.lightGrey}
          onChangeText={text => setUserEmail(text)}
          defaultValue={userEmail}
          />
        <TextInput style={styles.input}
          placeholder="Password"
          placeholderTextColor={Constants.Colors.lightGrey}
          onChangeText={text => setUserPassword(text)}
          defaultValue={userPassword}
          />
          
          <TouchableOpacity style={styles.signInButton}
          >
          <View style={styles.signInButtonContainer}>
          <SimpleLineIcons name="login" size={18} color="green" />
          <Text style={styles.signInButtonText}>Sign In</Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>

          <View style={{ height:20, justifyContent:'center'}}>
            <Text style={{color:Constants.Colors.lightGrey, fontSize:18}}>ou</Text>
          </View>

         <View style={styles.signUpButtonsContainer}>
          <TouchableOpacity style={styles.signInButton}
          onPress={()=>logInWithFacebook()}
          >
          <View style={styles.signInFacebookButtonContainer}>
          <FontAwesome name="facebook" size={18} color="#3b5998" style={{width:20}}/>
          <Text style={styles.signInFacebookButtonText}>Continue with Facebook</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton}
          onPress={()=>signInWithGoogleAsync()}
          >
          <View style={styles.signInGoogleButtonContainer}>
           <AntDesign name="google" size={18} color="#de5246" style={{width:20}} />
            <Text style={styles.signInGoogleButtonText}>Continue with Google</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createAccountButton}
          >
            <Text style={styles. createAcountText}> Create Account</Text>
          </TouchableOpacity>
          </View>
        </View>:<View/>
  );
};

export default LoginContainer;