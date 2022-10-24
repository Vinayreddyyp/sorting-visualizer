import React, { useCallback, useEffect, useState } from "react";

import { sleep } from "../helpers/index";

const MergeSort = (props) => {
	const { arr, isSort, setArr, setCurrentIdx, setNextIdx, setLastSortedIdx } =
		props;

	const [arrayCopy, setArrayCopy] = useState([]);
	const [result, setResult] = useState([]);

	const sorting = async (sortArr) => {
		console.log("arr in the sort", sortArr);
		const originalArray = [...sortArr];
		if (sortArr.length <= 1) return sortArr;
		let mid = Math.floor(sortArr.length / 2);

		let left = sorting(sortArr.slice(0, mid));

		let right = sorting(sortArr.slice(mid));
		return merge(left, right, originalArray);
	};

	useEffect(() => {
		sorting(arr);
	}, []);

	/* const merge = async (arr1, arr2, originalArray) => {
		let results = [];

		let i = 0;

		let j = 0;
		console.log("j in the merge", i, j);

		while (i < arr1.length && j < arr2.length) {
			if (arr2[j] > arr1[i]) {
				debugger;
				results.push(arr1[i]);
				let newLeftIndex = arr.indexOf(arr1[i]);
				console.log("newLeftIdex", newLeftIndex, arr[newLeftIndex]);
				let newRightIndex = arr.indexOf(arr[j]);
				console.log("newRightIndex", newRightIndex, arr[newRightIndex]);
				[originalArray[newRightIndex], originalArray[newLeftIndex]] = [
					originalArray[newLeftIndex],
					originalArray[newRightIndex],
				];
				setArr([...arr]);
				setCurrentIdx(newLeftIndex);
				setNextIdx(newRightIndex);
				console.log("arr in the sorting", arr);
				i++;
			} else {
				results.push(arr2[j]);

				j++;
				let newLeftIndex = arr.indexOf(arr1[i]);
				console.log("newLeftIdex", newLeftIndex, arr[newLeftIndex]);
				let newRightIndex = arr.indexOf(arr[j]);
				console.log("newLeftIdex", newRightIndex, arr[newRightIndex]);

				setArr([...arr, arr[newLeftIndex], arr[newRightIndex]]);
				console.log("arr in the sorting", arr);
			}
		}
		while (i < arr1.length) {
			results.push(arr1[i]);

			i++;
		}
		while (j < arr2.length) {
			results.push(arr2[j]);

			j++;
		}
		console.log("results", results);
		setArr(originalArray);
		results = results.concat(arr1.slice(i)).concat(arr2.slice(j));
		console.log("results", results);
		return results;
	}; */

	const animations = async (arr) => {
		const resultArr = arr;
		for (let i = 0; i <= resultArr.length; i++) {}

		setArr([...resultArr]);
	};

	const merge = (leftArr, rightArr, originalArray) => {
		let resultArray = [],
			leftIndex = 0,
			rightIndex = 0;

		while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
			if (leftArr[leftIndex] < rightArr[rightIndex]) {
				debugger;
				let newLeftIndex = originalArray.indexOf(leftArr[leftIndex]);
				let newRightIndex = originalArray.indexOf(rightArr[rightIndex]);
				[originalArray[newLeftIndex], originalArray[newRightIndex]] = [
					originalArray[newRightIndex],
					originalArray[newLeftIndex],
				];
				console.log(
					"[originalArray[newLeftIndex], originalArray[newRightIndex]]",
					[originalArray[newLeftIndex], originalArray[newRightIndex]]
				);
				resultArray.push(leftArr[leftIndex]);
				leftIndex++;
			} else {
				let newLeftIndex = originalArray.indexOf(leftArr[leftIndex]);
				let newRightIndex = originalArray.indexOf(rightArr[rightIndex]);
				[originalArray[newRightIndex], originalArray[newLeftIndex]] = [
					originalArray[newLeftIndex],
					originalArray[newRightIndex],
				];
				resultArray.push(rightArr[rightIndex]);
				rightIndex++;
			}
		}

		resultArray = resultArray
			.concat(leftArr.slice(leftIndex))
			.concat(rightArr.slice(rightIndex));
		console.log("resultArray", resultArray);

		animations(resultArray);
		return resultArray;
	};
};

export default MergeSort;
/* 

// Recrusive Merge Sort
export const mergeSort = (setArr, arr) => {
	const arrayCopy = [...arr];
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(setArr, arr.slice(0, mid));
	let right = mergeSort(setArr, arr.slice(mid));
	return merge(left, right, setArr, arr, arrayCopy);
};
 */
