import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import React, {useState} from 'react';

export default function Snackbar(self){
	const [largura, setLargura] = useState(Dimensions.get('screen').width - 20);
	return(
		self.visible ? 
		<View style={{...css.snack, width:largura}}>
			<Text style={{color:"#fff"}}>{self.text}</Text>
			<Pressable onPress={() => {self.toggleState()}}>
				<Text style={{color:"#6f6"}}>OK</Text>
			</Pressable>
		</View>
		 : <View style={css.hide}></View>
	);
}

const css = StyleSheet.create({
	snack:{
		alignSelf:"center",
		color:"#fff",
		position:"absolute",
		bottom:0,
		zIndex:999,
		margin:10,
		borderRadius:5,
		flex:1,
		flexDirection:"row",
		padding:20,
		backgroundColor:"#333e",
		justifyContent:"space-between"
	},
	hide:{
		display:"none"
	}
});