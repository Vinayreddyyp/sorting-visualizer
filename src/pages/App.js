import "./App.css";

import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Main from "./Main";
import QuickSort from "../algorithms/QuickSort";
import { bubbleSort } from "../algorithms/BubbleSort";
import { insertionSort } from "../algorithms/InsertionSort";
//import { mergeSorts } from "../algorithms/MergeSorts";
import { selectionSort } from "../algorithms/SelectionSort";
import { sleep } from "../helpers/index";

const App = () => {
	const [value, setValue] = useState("");
	const [arr, setArr] = useState([]);
	const [currentIdx, setCurrentIdx] = useState();
	const [nextIdx, setNextIdx] = useState();
	const [lastSortedIdx, setLastSortedIdx] = useState();
	const [algoName, setAlgoName] = useState("");
	const [isSort, setIsSort] = useState(false);
	const [animations, setAnimations] = useState([]);
	const [mergeSorting, setMergeSorting] = useState([]);

	useEffect(() => {
		updateList();
		console.log("updateList", arr);
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

			case "MergeSort":
				return mergeSorts();

			default:
				return null;
		}
	};

	const mergeSorts = async () => {
		let currentArr = arr;

		await sort(currentArr, 0, currentArr.length - 1);
	};

	const sort = async (currentArr, low, high) => {
		console.log("low and high", low, high);

		if (low < high) {
			let mid = Math.floor((low + high) / 2);
			await sort(currentArr, low, mid);
			await sort(currentArr, mid + 1, high);
			await merge(currentArr, low, mid, high);
		}
	};

	const merge = async (currentArr, low, mid, high) => {
		debugger;
		let i = low;
		let j = mid + 1;
		let k = 0;
		let tempArr = [];

		while (i <= mid && j <= high) {
			debugger;
			if (arr[i] < arr[j]) {
				tempArr[k] = currentArr[i];
				i++;
				k++;
			} else {
				tempArr[k] = currentArr[j];
				j++;
				k++;
			}
			setArr([...arr, tempArr]);
			let bar1 = document.getElementById(i).style;
			let bar2 = document.getElementById(j).style;

			bar1.backgroundColor = "#DC143C";
			bar2.backgroundColor = "#6A5ACD";

			await sleep(200);

			bar1.backgroundColor = "#FF7F50";
			bar2.backgroundColor = "#FF7F50";
		}

		while (i <= mid) {
			tempArr[k] = currentArr[i];

			setArr([...arr, tempArr]);

			let bar1 = document.getElementById(i).style;
			let bar2 = document.getElementById(j).style;
			bar1.backgroundColor = "#DC143C";
			bar2.backgroundColor = "#6A5ACD";

			await sleep(200);

			bar1.backgroundColor = "#FF7F50";
			bar2.backgroundColor = "#FF7F50";

			i++;
			k++;
		}

		while (j <= high) {
			tempArr[k] = currentArr[j];

			setArr([...arr, tempArr]);

			let bar1 = document.getElementById(i).style;
			let bar2 = document.getElementById(j).style;
			bar1.backgroundColor = "#DC143C";
			bar2.backgroundColor = "#6A5ACD";

			await sleep(200);

			bar1.backgroundColor = "#FF7F50";
			bar2.backgroundColor = "#FF7F50";

			j++;
			k++;
		}

		for (let i = low; i <= high; i++) {
			currentArr[i] = tempArr[i - low];
			setArr([...arr, currentArr]);
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
		switchSorting("MergeSort");
	};
	const generateQuickSort = () => {
		setAlgoName("quickSort");
		setIsSort(true);
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
				generateQuickSort={generateQuickSort}
			/>

			<Main
				data={arr}
				currentIdx={currentIdx}
				nextIdx={nextIdx}
				value={value}
				lastSortedIdx={lastSortedIdx}
				algoName={algoName}
				animations={animations}
				setCurrentIdx={setCurrentIdx}
				setNextIdx={setNextIdx}
			/>

			{isSort && algoName === "quickSort" && (
				<QuickSort
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
