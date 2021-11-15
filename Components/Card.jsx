import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, Picker } from 'react-native';

export default function Card(props){
  var styles = StyleSheet.create({
    card:{
      borderRadius:10,
      margin:10,
      padding:10,
      backgroundColor:"#fff",
      elevation:5,
      shadowColor:"#333",
      shadowOffset:{width:3,height:3},
      shadowRadius:5
    }
  });
    return(
      <View style={{...styles.card, width:props.width || "92%"}}>
        {props.children}
      </View>
    );

};