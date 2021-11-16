import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text, TabView, Tab } from 'react-native-elements';
import Tabs from "./Layout/Tabs";
import TabContent from "./Layout/TabContent";
import Produtos from "./Components/Produtos.jsx";
import Carrinho from "./Components/Carrinho.jsx";
import Checkout from "./Components/Checkout.jsx";
import {GlobalProvider} from "./Components/Global";
export default function App() {
   const [index, setIndex] = useState(0);
   const [carrinho, setCarrinho] = useState([]);

   var mudarCarrinho = (e) => {
      setCarrinho(e);
   }
   return (
      <View style={styles.container}>
      <GlobalProvider>
         <StatusBar style="auto" />
         <Text h2 style={styles.appTitle}>Café mimo doce</Text>
         <Tabs titles={["Produtos","Carrinho", "Perfil"]} backgroundColor="#84472f">
            <TabContent>
               <Text h3 style={styles.sectionTitle} >Produtos</Text>
               <Produtos carrinho={carrinho, mudarCarrinho} />
            </TabContent>
            <TabContent>
               <Text h3 style={styles.sectionTitle} >Carrinho</Text>
               <Carrinho carrinho={carrinho, mudarCarrinho} />
               <Text h3 style={styles.sectionTitle} >Pagamento</Text>
               <Checkout />
            </TabContent>
            <TabContent backgroundColor="#afafaf">
               <Text h3 style={styles.sectionTitle} >Perfil</Text>
            </TabContent>
         </Tabs>
      </GlobalProvider>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fff',
      flex:1
   },
   appTitle:{backgroundColor:"#84472f", 
      color:"#fff", 
      paddingTop:25, 
      textAlign:"center"
   },
   sectionTitle:{
      width:"100%", 
      textAlign:"center",
      padding:10
   },
});
