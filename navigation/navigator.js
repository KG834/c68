import *as React from "react"
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Transaction from "../screens/transaction"
import Search from "../screens/search"

const Tab=createBottomTabNavigator()
export default class BottomTabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Transaction}/>
        <Tab.Screen name="Search" component={Search}/>
      </Tab.Navigator>
    )
  }
}