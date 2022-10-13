import Button from "../components/header.style";
import React from "react";
import styled from "styled-components";

const Bar = styled.div`
	display: flex;
	align-content: center;
	width: 3%;
	height: ${(props) => props.height};
	background-color: ${(props) => (props.active ? "#B50002" : "black")};
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
	const { data, currentIdx, nextIdx } = props;

	const width = 70 / data.length;
	return (
		<Div>
			<Container>
				{data.map((size, i) => (
					<>
						<Bar
							height={`${size}px`}
							width={`${width}px`}
							key={i}
							active={currentIdx === i}
							style={nextIdx === i ? { backgroundColor: "green" } : null}
						>
							<span style={{ color: "white" }}>{size}</span>
						</Bar>
					</>
				))}
			</Container>
			<Step>
				<p style={{ color: "white" }}>Developed By Vinay Reddy</p>
			</Step>
		</Div>
	);
};

export default Main;
