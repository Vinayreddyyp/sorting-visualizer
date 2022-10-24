import "./App.css";

import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Main from "./Main";
import MergeSort from "../algorithms/MergeSort";
import { bubbleSort } from "../algorithms/BubbleSort";
import { insertionSort } from "../algorithms/InsertionSort";
import { selectionSort } from "../algorithms/SelectionSort";

const App = () => {
	const [value, setValue] = useState("");
	const [arr, setArr] = useState([]);
	const [currentIdx, setCurrentIdx] = useState();
	const [nextIdx, setNextIdx] = useState();
	const [lastSortedIdx, setLastSortedIdx] = useState();
	const [algoName, setAlgoName] = useState("");
	const [isSort, setIsSort] = useState(false);

	useEffect(() => {
		updateList();
		setCurrentIdx();
	}, [value, isSort]);

	const updateList = () => {
		const randomArr = Array.from({ length: value }, () =>
			getRandomInt(50, 150)
		);
		setArr(randomArr);
	};
	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const valuetext = (value) => {
		setValue(value);
	};

	const switchSorting = (type) => {
		console.log("type in the switchSorting", type);
		switch (type) {
			case "BubbleSort":
				return bubbleSort(
					setCurrentIdx,
					setArr,
					setAlgoName,
					setNextIdx,
					setLastSortedIdx,
					arr
				);
			case "SelectionSort":
				return selectionSort(
					setCurrentIdx,
					setArr,
					setAlgoName,
					setNextIdx,
					setLastSortedIdx,
					arr
				);
			case "InsertionSort":
				return insertionSort(
					setCurrentIdx,
					setArr,
					setAlgoName,
					setNextIdx,
					setLastSortedIdx,
					arr
				);

			default:
				return null;
		}
	};

	const generateBubbleSort = () => {
		switchSorting("BubbleSort");
	};

	const generateSelectionSort = () => {
		switchSorting("SelectionSort");
	};

	const generateInsertionSort = () => {
		switchSorting("InsertionSort");
	};
	const generateMergeSort = () => {
		setAlgoName("mergeSort");
		setIsSort(true);
		switchSorting("mergeSort");
	};

	return (
		<div className="App">
			<Header
				valuetext={valuetext}
				value={value}
				generateBubbleSort={generateBubbleSort}
				generateSelectionSort={generateSelectionSort}
				generateInsertionSort={generateInsertionSort}
				generateMergeSort={generateMergeSort}
			/>

			<Main
				data={arr}
				currentIdx={currentIdx}
				nextIdx={nextIdx}
				value={value}
				lastSortedIdx={lastSortedIdx}
				algoName={algoName}
			/>
			{isSort && (
				<MergeSort
					arr={arr}
					isSort={isSort}
					setArr={setArr}
					setCurrentIdx={setCurrentIdx}
					setNextIdx={setNextIdx}
					setLastSortedIdx={setLastSortedIdx}
				/>
			)}
		</div>
	);
};

export default App;
