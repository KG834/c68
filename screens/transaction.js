import *as React from "react"
import {Button, TouchableOpacity, View, StyleSheet} from "react-native"
 
export default class Transaction extends React.Component {
  render() {
    return (
      <View style={styles.View}>
        <Text style={styles.Text}>Transactions</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
    View:{flex:1, backgroundColor:"pink"},
    Text:{alignSelf:"center", marginTop:20, color:"white", fontSize:25}
})

