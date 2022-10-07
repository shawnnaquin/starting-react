import React, { useContext } from 'react';
import PokemonType from '../Types/PokemonType';
import PokemonContext from '../Contexts/PokemonContext';

const SinglePokeInfo = () => {

	const {selectedSinglePoke} = useContext(PokemonContext);

	return selectedSinglePoke ? (
		<div>
			<h2>{selectedSinglePoke.name.english}</h2>
			<table>
				<tbody>
				{Object.keys(selectedSinglePoke.base).map((key) => (
					<tr key={key}>
					<td>{key}</td>
					<td>{selectedSinglePoke.base[key]}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	) : null;
}

SinglePokeInfo.propTypes = PokemonType;

export default SinglePokeInfo;
