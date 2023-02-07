import *as React from "react"
import {Button, TouchableOpacity, View, StyleSheet} from "react-native"
 
export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.View}>
         <Text style={styles.Text}>Search</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
    View:{flex:1, backgroundColor:"lightblue"},
    Text:{alignSelf:"center", marginTop:20, color:"white", fontSize:25}
})