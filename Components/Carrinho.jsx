import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, Pressable, Alert } from 'react-native';
import { Text, Button, Avatar, ListItem, Icon } from 'react-native-elements';
import Card, {Content} from "./Card";
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

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Carrinho",
      "Item Removido",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    var removeFromCart = (indice) =>{
        var novo = carrinho.filter((item, index) =>{
            return index != indice;
        });
        setCarrinho(novo);
        createTwoButtonAlert();
    };

	return(
		<>
			{carrinho === []  ? <Text h4 style={{textAlign:"center", paddingTop:30, width:"100%"}}>Carrinho Vazio!</Text>
                : <Card >
                    <Content>
                        {carrinho.map(
                            (lista, i) => {
                                var item = JSON.parse(JSON.stringify(lista));
                                return (
                                    <ListItem key={i} bottomDivider>
                                        <Avatar size="large" rounded source={{uri:'https://campovivo.com.br/wp-content/uploads/2017/12/cafe-xicara.jpg'}} />
                                        <ListItem.Content>
                                            <ListItem.Title><Text style={{fontWeight:"bold"}}>{item.nom}</Text></ListItem.Title>
                                            <ListItem.Subtitle > R$ {item.cout} </ListItem.Subtitle>
                                        </ListItem.Content>
                                        <Pressable onPress={() =>removeFromCart(i)}>
                                            <Text style={{width:"100%",textAlign:"right"}}>
                                                <Icon type='ionicon' name='trash'  color='#b02020' />
                                            </Text>
                                        </Pressable >
                                    </ListItem>
                                );
                            }
                        )}
                    </Content>
                </Card>
            }
		</>
	);
}