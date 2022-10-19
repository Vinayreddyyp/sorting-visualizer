import "./App.css";

import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Main from "./Main";
import { bubbleSort } from "../algorithms/BubbleSort";
import { sleep } from "../helpers";

const App = () => {
	const [value, setValue] = useState("");
	const [arr, setArr] = useState([]);
	const [currentIdx, setCurrentIdx] = useState();
	const [nextIdx, setNextIdx] = useState();
	const [lastSortedIdx, setLastSortedIdx] = useState();
	const [algoName, setAlgoName] = useState("");

	useEffect(() => {
		updateList();
		setCurrentIdx();
	}, [value]);

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
			default:
				return null;
		}
	};

	const generateBubbleSort = () => {
		console.log("bubbleSort is geenrating the sort");
		switchSorting("BubbleSort");
		/* for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length; j++) {
				setCurrentIdx(j);

				setNextIdx(j + 1);
				if (arr[j] > arr[j + 1]) {
					//console.log("j in bubblesort", j, j + 1);

					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;

					setArr([...arr]);
				}
				setAlgoName("bubbleSort");
				await sleep(100);
			}
			setLastSortedIdx(arr.length - 1 - i);
			await sleep(200);
		}
		setCurrentIdx(null);
		setNextIdx(null); */
	};

	const generateSelectionSort = async () => {
		for (let i = 0; i < arr.length; i++) {
			let lowest = i;
			for (let j = i + 1; j < arr.length; j++) {
				setCurrentIdx(lowest);
				setNextIdx(j);
				if (arr[j] < arr[lowest]) {
					lowest = j;
				}
				await sleep(300);
			}
			console.log("indexed in the selection sort", i);
			setLastSortedIdx(i);
			setAlgoName("selectionSort");
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;

			//console.log("indexed in the selection sort", lowest);

			setArr([...arr]);
			await sleep(200);
		}
		setCurrentIdx(null);
		setNextIdx(null);
	};

	return (
		<div className="App">
			<Header
				valuetext={valuetext}
				value={value}
				generateBubbleSort={generateBubbleSort}
				generateSelectionSort={generateSelectionSort}
			/>

			<Main
				data={arr}
				currentIdx={currentIdx}
				nextIdx={nextIdx}
				value={value}
				lastSortedIdx={lastSortedIdx}
				algoName={algoName}
			/>
		</div>
	);
};

export default App;
