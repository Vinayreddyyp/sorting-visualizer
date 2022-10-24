import React, { useEffect, useState } from "react";

import Button from "../components/header.style";
import styled from "styled-components";

const Bar = styled.div`
	display: flex;
	align-content: center;
	width: 3%;

	height: ${(props) => props.height};
	background-color: ${(props) =>
		props.active ? "#B50002" : props.sortedColor};
	${(props) => props.style}
	margin-right: 2px;
`;

const Container = styled.div`
	position: absolute;
	bottom: 30%;
	display: flex;
	flex-direction: row;
	width: 80%;
	height: 43%;
	padding-left: 25px;
	padding-right: 25px;
	justify-content: center;
	align-items: flex-end;
	border: 4px solid black;
`;

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Step = styled.div`
	align-items: flex-end;
	background-color: black;
	bottom: 0;
	display: flex;
	height: 50px;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
`;

const Main = (props) => {
	const { data, currentIdx, nextIdx, value, lastSortedIdx, algoName } = props;

	const [sortedColor, setSortedColor] = useState("");
	useEffect(() => {
		if (currentIdx === null) {
			setSortedColor("#006400");
		} else {
			setSortedColor("black");
		}
	}, [currentIdx]);

	const width = 70 / data.length;

	const barGenerator = data.map((size, i) => {
		let color = false;
		console.log("lastSortedIdx in  the map", lastSortedIdx);
		if (i === lastSortedIdx && algoName === "selectionSort") {
			color = true;
			console.log("color in the map", color);
		}
		if (i >= lastSortedIdx && algoName === "bubbleSort") {
			color = true;
		}
		if (i === lastSortedIdx && algoName === "insertionSort") {
			color = true;
		}
		if (i === lastSortedIdx && algoName === "mergeSort") {
			color = true;
		}

		return (
			<Bar
				height={`${size}px`}
				width={`${width}px`}
				key={i}
				active={currentIdx === i}
				sortedColor={sortedColor}
				style={
					color
						? { backgroundColor: "green" }
						: i === nextIdx
						? { backgroundColor: "blue" }
						: null
				}
			>
				<span style={{ color: "white" }}>{size}</span>
			</Bar>
		);
	});
	return (
		<Div>
			<Container>{barGenerator}</Container>
			<Step>
				<p style={{ color: "white" }}>Developed By Vinay Reddy</p>
			</Step>
		</Div>
	);
};

export default Main;
