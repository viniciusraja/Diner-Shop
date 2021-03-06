import { StyleSheet } from 'react-native';
import Constants from '../../../config/constants/Constants';

export const styles = StyleSheet.create({
  headerContainer: {
    height:Constants.Layout.headerHeight,
    width:'100%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:Constants.Colors.backgroundColor
  },
  cartButtonContainer:{
    height:'100%',
    width:45,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    height:40,
    width: '70%',
    paddingLeft:10,
    textAlign: 'left',
    color: '#FFF',
    backgroundColor:'#fff',
    borderRadius:30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    opacity:0.7,
    },
    quantityOfItemsInCartContainer:{
    position:'absolute',
    height:15,
    width:15,
    bottom:6,
    right:0,
    backgroundColor:Constants.Colors.yellowMostard,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    },
    quantityOfItemsInCartText:{
      textAlign:'center',
      color:'#fff',
      fontFamily:Constants.fontFamily,
      fontSize:12,
    },
    loginButtonContainer:{
    height:'100%',
    width:45,
    justifyContent:'center',
    alignItems:'center'
    },
    








    autoCompleteContainerToFixPosition: {
      position:'absolute',
      zIndex: 60,
      width:282,
      left:(Constants.Layout.window.width-282)/2,
      top:(Constants.Layout.headerHeight-40)/2,
      height:Constants.Layout.headerHeight,
    },
    inputSearchProductContainer: {
      height: 40,
      width: '100%',
      borderRadius: 20,
      backgroundColor: '#F5F5F5',
      elevation: 7,
      fontFamily: Constants.fontFamily,
      fontSize: 20,
      textAlign: 'center',
    },
    inputContainerStyle: {
      height: 29,
      width: 280,
      borderWidth: 0,
      borderRadius: 20,
    },
    containerStyle: {
      
    },
    listContainerStyle: {
      justifyContent:'center',
      alignItems:'center',
    },
    listStyle: {
      height:600,
      backgroundColor: 'transparent',
      borderWidth: 0,
      marginTop: 2,
      width: '100%',
    },
    inputSearchCountryItemContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 60,
      backgroundColor: '#F5F5F5',
      borderRadius: 20,
      marginVertical: 2,
    },
    inputSearchCountryFlagImage: {
      height: 25,
      width: 35,
      borderRadius: 7,
      marginRight: 20,
      marginLeft: 10,
    },
    inputSearchCountryText: {
      fontFamily:Constants.fontFamily,
      fontSize: 20,
      textAlign: 'center',
    },

});
