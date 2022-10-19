import { Button, Container, SortWrapper } from "./header.style";

import Box from "@mui/material/Box";
import React from "react";
import Slider from "@mui/material/Slider";

const Header = (props) => {
	const { valuetext, value, generateBubbleSort, generateSelectionSort } = props;
	return (
		<Container>
			<Button>Generate New Array</Button>
			<span style={{ color: "white" }}>
				<p>Select Input Range</p>
			</span>
			<Box sx={{ width: 200 }}>
				<Slider
					aria-label="Temperature"
					defaultValue={30}
					getAriaValueText={valuetext}
					step={10}
					marks
					min={10}
					max={50}
				/>
			</Box>
			<span style={{ color: "white" }}>{value}</span>
			<SortWrapper>
				<Button onClick={generateBubbleSort}>Bubble Sort</Button>
				<Button onClick={generateSelectionSort}>Selection Sort</Button>
				<Button onClick={generateSelectionSort}>Insertion Sort</Button>
				<Button>Quick Sort</Button>
				<Button>Merge Sort</Button>
				<Button>Radix Sort</Button>
			</SortWrapper>
		</Container>
	);
};

export default Header;
