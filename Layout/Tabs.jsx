import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ActivityIndicator,SafeAreaView, ScrollView, Dimensions, Pressable } from 'react-native';


/**
* @access public
* @return React.FC Tabs 
* componente que gera tabs e wrapper de conteúdo
*/

export default function Tabs(props){
	const [loaded, setLoaded] = useState(false);
	const [atual, setAtual] = useState(0);
	const [qtde, setQtde] = useState(0);

	useEffect(() =>{
		if(!loaded){
			setQtde(Array.isArray(props.children) ? props.children.length : 1);
			setLoaded(true);
		}
		return;
	});

	var estiloAbas = me.Tabs;
	return(
		<View style={{flex:1}}>
			<View style={{...me.Tabs, backgroundColor:props.backgroundColor || '#0d6efd', color:props.color || "#eee"}}>
				{ props.titles.map((item, index) =>{
					return (
						<Pressable style={{...me.Tab}} key={index} onPress={() => {setAtual(index)}} >
							<Text style={{color:"#fff", fontWeight:"bold", width:"100%", textAlign:"center"}}>{item.toString()}</Text>
						</Pressable>
					);
				}) }
				<View style={{position:"absolute", bottom:0,width:(100/qtde)+"%", height:4, backgroundColor:"#fff", flex:1, flexDirection:"row", left:((100/qtde)*atual)+"%"}} ></View>
			</View>
			<View style={{flex:1,flexDirection:"row", alignContent:"stretch",
				width: (100*qtde)+"%", marginLeft: (100 * atual * -1)+"%", overflow:"hidden"}}>
	      			{props.children}	
			</View>
		</View>
	);	
}

	const me = StyleSheet.create({
		container: {
			flex: 1,
			marginTop: 50,
			width: "100%"
		},
		scrollView: {
			backgroundColor: '#eee',
			marginHorizontal: 0,
		},
		Tabs: {
			flexDirection:"row",
			flexWrap:"nowrap",
			height:60,
			width:"100%",
			top:0,
			left:0,
			alignItems: 'center',
			alignItems: 'center',
			justifyContent: 'space-around',
		},
		Tab:{
			justifyContent: 'center',
			padding:15,
			fontSize:20,
			height:60,
			color:"#fff",
			textAlign:"center"
		}
	});