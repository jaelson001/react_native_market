import React, {useState} from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Text, Button } from 'react-native-elements';
import {GlobalContext} from "./Global";
import Card, {Content} from "./Card";

export default function Produtos(props){
    //pegando variavel do contexto global e desconstruindo para local
    const {carrinho, setCarrinho} = React.useContext(GlobalContext);
	var cafes = [
        {
            'id':1,
            'nom':'Capuccino Traditionnel',
            'image': 'http://127.0.0.1:8000/assets/images/capuccino1.jpg',
            'description': 'Capuccino traditionnel avec poddre de cannelle et chocolat 80%',
            'ingredients': 'Café, Lait, Chocolat, cannelle',
            'cout':'8.49'
        },
        {
            'id':2,
            'nom':'Capuccino Chocolat',
            'image': 'http://127.0.0.1:8000/assets/images/capuccino2.jpg',
            'description': 'Capuccino avec chocolat au lait',
            'ingredients': 'Café, Lait, Chocolat au lait, cannelle',
            'cout':'7.99'
        },
        {
            'id':3,
            'nom':'Chaud chocolat',
            'image': 'http://127.0.0.1:8000/assets/images/chaud.jpg',
            'description': 'Chocolat mi-sucré chaud',
            'ingredients': 'Chocolat, poudre de cannelle',
            'cout':'8.29'
        }
    ];

    var addToCart = (indice) =>{
        var novo = [cafes[indice]];
        if(carrinho.length == 0){
            setCarrinho(novo);
        }else{
            setCarrinho(novo.concat(carrinho));
        }
        createTwoButtonAlert();
    };

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Carrinho",
      "Item Adicionado",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

	return(
		<>
			{cafes.map((cafe, i) => {
                var item = JSON.parse(JSON.stringify(cafe));
                //var imagem = {uri:item.image};
            return (
                <Card key={i}>
                    <Image style={me.cardImage} source={{uri:'https://campovivo.com.br/wp-content/uploads/2017/12/cafe-xicara.jpg'}} />   
                    <Content>         
                        <Text h4>{item.nom}</Text>
                        <Text style={{padding:10}}>{item.ingredients}</Text>
                        <Text style={{padding:10}}>{item.description}</Text>
                        <Text style={{padding:10, width:"100%", textAlign:"center"}} h1>R$ {item.cout}</Text>
                        <Button 
                            type="clear" 
                            title="PEDIR" 
                            buttonStyle={{width:"50%", padding:15, marginLeft:"25%"}} 
                            titleStyle={{color:'#84472f'}}
                            onPress={() =>addToCart(i)}
                        ></Button>
                    </Content>         
                </Card>
            );
        })}
		</>
	);
}

const me = StyleSheet.create({
    cardImage:{
        resizeMode: 'cover',
        width:350,
        height:250,
        flex:1,
        marginTop:0
    }
});