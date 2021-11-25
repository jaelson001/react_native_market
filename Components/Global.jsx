/**
* @see npm install @react-native-async-storage/async-storage
* local async storage for react native
*/
import LocalStorage from '@react-native-async-storage/async-storage';
import React, {useState, createContext, useEffect} from 'react';
// criação de componente de contexto global
export const GlobalContext = createContext({}); 

//criação de componente que vai exportar contexto global como um novo componente com filhos e variaveis
export const GlobalProvider = (self)=>{
	//variaveis que vão ser enxergadas globalmente
	const [carrinho, setCart] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [usuario, setUser] = useState({
		nome:"",
		endereco:"",
		referencia:"",
	});

	//use effect é executado só na inicialização pra buscar as variaveis globais do LocalStorage
	useEffect(async () =>{
		if(!loaded){
			const LocalCarrinho = await LocalStorage.getItem('carrinho');
			const LocalUsuario = await LocalStorage.getItem('usuario');

			setCart(typeof(LocalCarrinho) === "string" ? JSON.parse(LocalCarrinho) : [])
			setUser(typeof(LocalUsuario) === "string" ? JSON.parse(LocalUsuario) : [])
			setLoaded(true);
		}
		return;
	});

	//setCarrinho substitui setCart salvando nela e também localmente o carrinho
	var setCarrinho = async (data) => {
		setCart(data);
		await LocalStorage.setItem('carrinho', JSON.stringify(data));
	}
	
	//setUsuario substitui setUser salvando nela e também localmente o usuario
	var setUsuario = async (data) => {
		setUser(data);
		await LocalStorage.setItem('usuario', JSON.stringify(data));
	}

	//retorna o provedor com os dados pra passar pros componentes filhos
	return(
		<GlobalContext.Provider value={{carrinho, setCarrinho, usuario, setUsuario}}>
			{self.children}
		</GlobalContext.Provider>
	);
}