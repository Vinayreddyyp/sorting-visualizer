import React, { useEffect, useState } from "react";

import Button from "../components/header.style";
import styled from "styled-components";

const Bar = styled.div`
	display: flex;
	align-content: center;
	width: 1%;
	height: ${(props) => props.height};
	background-color: ${(props) =>
		props.active ? "#B50002" : props.sortedColor};
	${(props) => props.style}
	margin-right: 2px;
`;

const Container = styled.div`
	position: absolute;
	bottom: 17%;
	display: flex;
	flex-direction: row;
	width: 57%;
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
	background-color: chocolate;
	bottom: 0%;
	display: flex;
	height: 50px;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
`;

const Main = (props) => {
	const {
		data,
		currentIdx,
		nextIdx,
		value,
		lastSortedIdx,
		algoName,
		timeAndSpaceComplexity,
	} = props;

	const [sortedColor, setSortedColor] = useState("");

	useEffect(() => {
		if (currentIdx === null) {
			setSortedColor("#006400");
		} else {
			setSortedColor("#ff7f50");
		}
	}, [currentIdx]);

	const width = 70 / data.length;

	const barGenerator = data.map((size, i) => {
		let color = false;
		console.log("lastSortedIdx in  the map", lastSortedIdx);
		if (i === lastSortedIdx && algoName === "selectionSort") {
			color = true;
		}
		if (i >= lastSortedIdx && algoName === "bubbleSort") {
			color = true;
		}
		if (i === lastSortedIdx && algoName === "insertionSort") {
			color = true;
		}

		return (
			<Bar
				id={i}
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
			/>
		);
	});
	return (
		<Div>
			{algoName && (
				<div className="timeandspace">
					<div className="name">Algorithm: {timeAndSpaceComplexity.name}</div>
					<div className="tcomplexity">
						Time Complexity: {timeAndSpaceComplexity.timeComplexity}
					</div>
					<div className="scomplexity">
						Space Complexity: {timeAndSpaceComplexity.spaceComplexity}
					</div>
				</div>
			)}
			<Container>{barGenerator}</Container>
			<Step>
				<p style={{ color: "black" }}>Developed By Vinay Reddy</p>
			</Step>
		</Div>
	);
};

export default Main;
