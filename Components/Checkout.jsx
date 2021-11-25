import React, {useState, useEffect} from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, Alert, Pressable } from 'react-native';
import { Text, Button, ListItem, Icon } from 'react-native-elements';
import Card, {Content} from "./Card";
import {GlobalContext} from "./Global";

export default function Checkout(self){
    //pegando variavel do contexto global e desconstruindo para local
    const {carrinho, setCarrinho, usuario, setUsuario} = React.useContext(GlobalContext);
    const [visible, setVisible] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [total, setTotal] = useState(0);
    const [message, setMessage] = useState('');
    //cartão
    const [nomeCartao, setNomeCartao] = useState("");
    const [numero, setNumero] = useState("");
    const [dia, setDia] = useState("");
    const [ano, setAno] = useState("");
    const [cvv, setCvv] = useState("");

    useEffect(() =>{
        if(usuario.hasOwnProperty("nome") === false){
            setMessage("Cadastre o usuario para efetuar compras")
            setVisible(false);
        }else if(carrinho[0] == undefined){
            setMessage("Escolha um produto para comprar")
            setVisible(false);
        }else{
            var acc=0;
            for(var i=0; i < carrinho.length; i++){
                acc += parseFloat(carrinho[i].cout);
            }
            setTotal(acc);
            setVisible(true);
        }
    });

    var finalizarCompra = () =>{
        Alert.alert(
      "Checkout",
      "Compra efetuada",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    }
    return(
        <>{(
            visible === false 
            ? <Text h4 style={{textAlign:"center", paddingTop:30, width:"100%"}}>
                Ainda não há dados suficientes para compra
            </Text>
            :
            <Card >
                <Content>
                    <ListItem bottomDivider>
                        <Icon type='ionicon' name='person-outline'  color='blue' />
                        <ListItem.Content>
                            <ListItem.Title><Text style={css.nome}>{usuario.nome}</Text></ListItem.Title>
                            <ListItem.Subtitle><Text style={css.resumo}>{usuario.endereco}</Text></ListItem.Subtitle>
                            <ListItem.Subtitle><Text style={css.resumo}>{usuario.referencia}</Text></ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    
                    <ListItem bottomDivider>
                        <SafeAreaView style={css.formContent}>
                            <TextInput 
                                style={css.input}  placeholder="NOME COMO NO CARTAO" autoCapitalize="characters" 
                                onChangeText={setNomeCartao}  value={nomeCartao} placeholderTextColor="#fff"
                            />
                            <TextInput 
                                style={css.input} keyboardType="numeric" 
                                placeholder="NUMERO DO CARTÃO" onChangeText={setNumero} 
                                value={numero} placeholderTextColor="#fff"
                            />
                            <View style={css.line}>
                                <TextInput 
                                    style={css.numeric} placeholder="" keyboardType="numeric"
                                    onChangeText={setDia} value={dia} placeholder="DD"
                                    maxLength={2} placeholderTextColor="#fff"
                                />
                                <TextInput 
                                    style={css.numeric} placeholder="" keyboardType="numeric"
                                    onChangeText={setAno} value={ano} placeholder="AAAA"
                                    maxLength={4} placeholderTextColor="#fff"
                                />
                                <TextInput 
                                    style={css.numeric} placeholder="" keyboardType="numeric"
                                    onChangeText={setCvv} value={cvv} placeholder="CVV"
                                    maxLength={3} placeholderTextColor="#fff"
                                />
                            </View>
                        </SafeAreaView>
                    </ListItem>
                    <ListItem bottomDivider>
                        <Icon type='ionicon' name='card-outline'  color='#ff6000' />
                        <Text style={css.total}>Total: R$ {total}</Text>
                    </ListItem>
                    <ListItem >
                        <Button 
                            type="outline" 
                            icon={<Icon type='ionicon' name='checkmark-circle'  color='green' />}
                            title="Fechar pedido" 
                            buttonStyle={{ padding:15, marginLeft:"25%"}} 
                            titleStyle={{color:'green'}}
                            onPress={() =>finalizarCompra()}
                        ></Button>
                    </ListItem>
                </Content>
            </Card>      
        )}</>
    );
}

const css = StyleSheet.create({
    nome:{
        padding:5,
        fontWeight:"bold",
        fontSize:18
    },
    resumo:{
        padding:5,
    },
    formContent:{
        width:"100%",
        borderRadius:10,
        backgroundColor:"#84472f",
        marginTop:20,
        marginBottom:20,
        elevation:5,
        shadowColor:"#333",
        shadowOffset:{width:3,height:3},
        shadowRadius:5,
    },
    input: {
        color:"#fff",
        height: 40,
        margin: 12,
        padding: 10,
    },
    line:{
        flex:1,
        flexDirection:"row"
    },
    numeric: {
        color:"#fff",
        height: 40,
        margin: 12,
        padding: 10,
        flex:0.4,
        textAlign:"center",
    },
    total:{
        padding:5,
        fontWeight:"bold",
        fontSize:18,
        width:"90%",
        textAlign:"right"
    }
});