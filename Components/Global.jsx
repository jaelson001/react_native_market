import React, {useState, createContext, useEffect} from 'react';
import LocalStorage from '@react-native-async-storage/async-storage';

// criação de componente de contexto global
export const GlobalContext = createContext({}); 

//criação de componente que vai exportar contexto global como um novo componente com filhos e variaveis
export const GlobalProvider = (self)=>{
	//variaveis que vão ser enxergadas globalmente
	const [carrinho, setCart] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(async () =>{
		if(!loaded){
			const jsonValue = await LocalStorage.getItem('carrinho');
			setCart(typeof(jsonValue) === "string" ? JSON.parse(jsonValue) : [])
			setLoaded(true);
		}
		return;
	});

	var setCarrinho = async (data) => {
		setCart(data);
		console.log("dados: "+JSON.stringify(data))
		await LocalStorage.setItem('carrinho', JSON.stringify(data));
	}
	//retorna o provedor com os dados pra passar pros componentes filhos
	return(
		<GlobalContext.Provider value={{carrinho, setCarrinho}}>
			{self.children}
		</GlobalContext.Provider>
	);
}