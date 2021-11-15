import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Card from "./Card";
import {GlobalContext} from "./Global";

export default function Carrinho(self){
    //pegando variavel do contexto global e desconstruindo para local
	const {carrinho, setCarrinho} = React.useContext(GlobalContext);
	const [loaded, setLoaded] = useState(false);

	useEffect(() =>{
		if(!loaded){
			setLoaded(true);
		}
		return;
	});
    var removeFromCart = (indice) =>{
        var novo = carrinho.filter((item, index) =>{
            return index != indice;
        });
        setCarrinho(novo);
    };

	return(
		<>
			{carrinho === []  ? <Text h4 style={{textAlign:"center", paddingTop:30, width:"100%"}}>Carrinho Vazio!</Text>
                : carrinho.map((lista, i) => {
                    var item = JSON.parse(JSON.stringify(lista));
                    return (
                        <Card key={i}>
                            <Text h4>{item.nom}</Text>
                            <Text style={{padding:10}}>{item.ingredients}</Text>
                            <Text style={{padding:10}}>{item.description}</Text>
                            <Text style={{padding:10, width:"100%", textAlign:"center"}} h1>R$ {item.cout}</Text>
                            <Button 
                                type="clear" 
                                title="Remover" 
                                buttonStyle={{width:"50%", padding:15, marginLeft:"25%"}} 
                                titleStyle={{color:'#84472f'}}
                                onPress={() =>removeFromCart(i)}
                            ></Button>
                        </Card>
                    );
                }
            )}
		</>
	);
}