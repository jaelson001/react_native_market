import { StyleSheet, ScrollView, Dimensions, RefreshControl} from 'react-native';
import React, {useState, useCallback} from 'react';
/**
* @access public
* @return React.FC Tabs 
* componente que gera Conteúdo de tabs com rolagem vertical mas posicionamento horizontal
*/
export default function TabContent(self){
	const [largura, setLargura] = useState(Dimensions.get('screen').width);
	  const [refreshing, setRefreshing] = React.useState(false);
	  const wait = (timeout) => {
		  return new Promise(resolve => setTimeout(resolve, timeout));
		}
	  const onRefresh = React.useCallback(() => {
	    setRefreshing(true);
	    setLargura(largura);
	    setRefreshing(false);
	  }, []);


	return(
		<ScrollView 
			contentContainerStyle={{
				width:largura, 
				flexDirection:"column", 
				alignItems:"flex-start",
				backgroundColor:self.backgroundColor || "#fff"
			}}
			refreshControl={
	          <RefreshControl
	            refreshing={refreshing}
	            onRefresh={onRefresh}
	          />
	        }
			>
			{self.children}
		</ScrollView>
	);
}