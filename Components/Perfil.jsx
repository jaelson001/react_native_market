import React ,{useEffect, useState} from 'react';
import {Alert, View, SafeAreaView, Pressable, StyleSheet, TextInput } from 'react-native';
import { Text, Button, Avatar, ListItem, Icon } from 'react-native-elements';
import Card, {Content} from "./Card";
import {GlobalContext} from "./Global";

export default function Perfil(self){
	const {usuario, setUsuario} = React.useContext(GlobalContext);
	const [loaded, setLoaded] = useState(false);
	const [nome, setNome] = useState("");
	const [endereco, setEndereco] = useState("");
	const [referencia, setReferencia] = useState("");

    useEffect(() =>{
    	if(!loaded){
			setNome(usuario.nome || "");
			setEndereco(usuario.endereco || "");
			setReferencia(usuario.referencia || "");
    		setLoaded(true);
    	}
    	return;
	});

	var salvar = () =>{
		//salva em local
		setUsuario({
			nome:nome,
			endereco:endereco,
			referencia:referencia,
		});
		Alert.alert( "", "Salvo",[{ text: "OK", onPress:()=>console.log("Salvo")}]);
	}

	return (
		<View style={css.formCard}>
			<SafeAreaView style={css.formContent}>
				<TextInput style={css.input} placeholder="Nome completo" onChangeText={setNome} value={nome} />
				<TextInput style={css.input} placeholder="Endereço completo com numero" onChangeText={setEndereco} value={endereco} />
				<TextInput style={css.input} placeholder="Referencia pra localizar melhor" onChangeText={setReferencia} value={referencia} />
				<Pressable onPress={() => salvar()} >
					<Text style={css.salvar} >Salvar</Text>
				</Pressable>
			</SafeAreaView>
		</View>
	);
}

const css = StyleSheet.create({
	formCard:{
		borderRadius:5,
		width:"100%"
	},
	formContent:{
		padding:10,
	},
	input: {
	    height: 40,
	    margin: 12,
	    borderWidth: 1,
		textAlign:"center",
	    padding: 10,
		borderRadius:5
	},
	salvar:{
		width:"80%",
		marginLeft:"10%",
		marginTop:20,
		padding:10,
		fontWeight:"bold",
		fontSize:20,
		textAlign:"center",
		borderWidth:1,
		backgroundColor:"#393",
		borderStyle:"solid",
		color:"#fff",
		borderColor:"#333",
		borderRadius:10
	}
});


