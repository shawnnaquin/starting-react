import React, { useContext } from 'react';
import styled from 'styled-components';
import PokemonContext from '../Contexts/PokemonContext';

const Input = styled.input`
	width: 100%;
	font-size: x-large;
	padding: 0.2rem;
`;

const PokemonSearch = () => {

	const {filter, filterSet} = useContext(PokemonContext);

	return <Input
		type="text"
		value={filter}
		onChange={ (e) => filterSet(e.target.value) }
	/>;

}

export default PokemonSearch;
