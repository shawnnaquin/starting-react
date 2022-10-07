import React from 'react';

import PokemonInfo from './Components/PokemonInfo';
import PokemonSearch from './Components/PokemonSearch';
import PokemonTable from './Components/PokemonTable';
import Container from './Components/Container';
import Title from './Components/Title';

import { CssBaseline } from '@mui/material';
import PokemonContext from './Contexts/PokemonContext';

function App() {

  const [filter,filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedSinglePoke, selectedSinglePokeSet] = React.useState(null);

  React.useEffect( () => {
	fetch(
		"./pokemon.json"
	)
		.then( resp => resp.json() )
		.then( d => pokemonSet(d) )
  }, [])

  React.useEffect( () =>{
	selectedSinglePokeSet(pokemon[0]);
  }, [pokemon] );

  return (
	<CssBaseline>

		<PokemonContext.Provider
			value={{
				filter,
				pokemon,
				filterSet,
				pokemonSet,
				selectedSinglePoke,
				selectedSinglePokeSet,
			}}
		>

			<Container>
				<Title title="Pokemon Search" />
				<PokemonSearch />
				<PokemonTable />
				<PokemonInfo />
			</Container>

		</PokemonContext.Provider>

	</CssBaseline>
  );

}

export default App;
