import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	fex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	height: 50px;
	width: 100%;
	background-color: black;
	padding-left: 25px;
	padding-right: 25px;
`;

export const Button = styled.p`
	color: #fff;
	cursor: pointer;
	text-align: center;
`;

export const SortWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: space-evenly;
	width: 25%;
`;
