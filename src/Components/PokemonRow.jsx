import React from 'react';
import PokemonType from '../Types/PokemonType';
import {Button} from '@mui/material';

const SinglePokeRow = ({singlePoke, onClick}) =>
	<tr>
		<td>{singlePoke.name.english}</td>
		<td>{singlePoke.type.join(", ")}</td>
		<td>
			<Button variant="contained" onClick={ () => onClick(singlePoke) } >More Information</Button>
		</td>
	</tr>;

SinglePokeRow.propTypes = {
	singlePoke: PokemonType,
};

export default SinglePokeRow;
