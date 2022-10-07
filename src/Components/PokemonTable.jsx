import React, { useContext } from 'react';
import PokemonRow from './PokemonRow';
import {Table} from '@mui/material';
import PokemonContext from '../Contexts/PokemonContext';
const PokemonTable = () => {

	const {
		pokemon,
		filter,
		selectedSinglePokeSet
	} = useContext(PokemonContext);

	return (
		<Table>
			<tbody>{
				pokemon.length
				? pokemon
					.filter(({ name: { english } }) =>
						english
							.toLocaleLowerCase()
							.includes(filter.toLocaleLowerCase()
					))
					.slice(0, 20)
					.map(
						singlePoke =>
							<PokemonRow
								key={singlePoke.id}
								singlePoke={singlePoke}
								onClick={ (s) => selectedSinglePokeSet(s) }
							/>
					)
				: <tr></tr>

			}</tbody>
		</Table>
	);
}

export default PokemonTable;
