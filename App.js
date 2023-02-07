import *as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from "./navigation/navigator"
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTabNavigator/>
        
      </NavigationContainer>
    )
  }
}