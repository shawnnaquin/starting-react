import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
	text-align: center;
`;

const Title = ({title}) =>
	<Header className="title">{title}</Header>;

export default Title;
