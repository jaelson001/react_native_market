import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Card from "./Card";
import {GlobalContext} from "./Global";

export default function Carrinho(self){
    //pegando variavel do contexto global e desconstruindo para local
    const {carrinho, setCarrinho, usuario, setUsuario} = React.useContext(GlobalContext);
    const [loaded, setLoaded] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() =>{
        if(carrinho === []){
            setVisible(false);
        }else{
            setVisible(true);
        }
    });
    return(
        <>
            {
                (
                    visible === false 
                    ? <Text h4 style={{textAlign:"center", paddingTop:30, width:"100%"}}>
                        Ainda não há dados suficientes para compra
                    </Text>
                    :
                    <Card >
                        <Text h4>{usuario.nom}</Text>
                        <Button 
                            type="clear" 
                            title="Comprar" 
                            buttonStyle={{width:"50%", padding:15, marginLeft:"25%"}} 
                            titleStyle={{color:'#84472f'}}
                            onPress={() =>finalizarCompra()}
                        ></Button>
                    </Card>     
                )
            }
        </>
    );
}