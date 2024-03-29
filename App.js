import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookTansactionScreen from './screens/BookTransactionScreen'
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen'
export default class App extends React.Component {
  render(){
  return (
  <AppContainer/>
  )
}
}
const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:BookTansactionScreen},
  Search:{screen:SearchScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName
      if(routeName==="Transaction"){
return(
  <Image source={require("./assets/book.png")} style={{width:40, height:40}}/>
)
  } else if(routeName==="Search"){
    return(
      <Image source={require("./assets/searchingbook.png")} style={{width:40, height:40}}/>
    )
      }}
  })
})
const switchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})
const AppContainer=createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
