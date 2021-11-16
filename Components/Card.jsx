import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, Picker } from 'react-native';

export default function Card(props){
  var css = StyleSheet.create({
    card:{
      borderRadius:10,
      margin:10,
      padding:0,
      backgroundColor:"#fff",
      elevation:5,
      shadowColor:"#333",
      shadowOffset:{width:3,height:3},
      shadowRadius:5,
      overflow:"hidden",
      flexDirection:"column",
      justifyContent:"flex-start"
    }
  });
    return(
      <View style={{...css.card, width:props.width || "92%"}}>
        {props.children}
      </View>
    );
};

export function Content(self){
  return(
    <View style={{padding:10}}>
      {self.children}
    </View>
  );
}