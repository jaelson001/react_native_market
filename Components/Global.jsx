import React, {useState, createContext} from 'react';

// criação de componente de contexto global
export const GlobalContext = createContext({}); 

//criação de componente que vai exportar contexto global como um novo componente com filhos e variaveis
export const GlobalProvider = (self)=>{
	//variaveis que vão ser enxergadas globalmente
	const [carrinho, setCarrinho] = useState([]);

	//retorna o provedor com os dados pra passar pros componentes filhos
	return(
		<GlobalContext.Provider value={{carrinho, setCarrinho}}>
			{self.children}
		</GlobalContext.Provider>
	);
}