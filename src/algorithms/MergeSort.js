import React, { useCallback, useEffect, useState } from "react";

import { sleep } from "../helpers/index";

const MergeSort = (props) => {
	const { arr, isSort, setArr, setCurrentIdx, setNextIdx, setLastSortedIdx } =
		props;

	const sorting = (sortArr) => {
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

	/* const setAnimationIdx = (i, j) => {
		console.log("i,j", i, j);
	};

	const setIdx = (i, j) => {
		console.log("i,j", i, j);
		debugger;
		setI(i);
		setJ(j);
	}; */

	const animations = async (ra) => {
		const resultArr = ra;

		for (let i = 0; i <= resultArr.length; i++) {
			console.log("arr[i]====resultArr[i]", arr[i], resultArr[i]);
			if (arr[i] === resultArr[i]) {
				debugger;
				const sortedIdx = arr.indexOf(resultArr[i]);
				setLastSortedIdx(sortedIdx);
			}
			await sleep(200);
		}
		setCurrentIdx(null);
		setNextIdx(null);
	};

	const merge = (leftArr, rightArr, originalArray) => {
		console.log("arr in the merge", arr);
		let resultArray = [],
			leftIndex = 0,
			rightIndex = 0;

		while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
			if (leftArr[leftIndex] < rightArr[rightIndex]) {
				let arrIdxL = arr.indexOf(leftArr[leftIndex]);
				let arrIdxR = arr.indexOf(rightArr[rightIndex]);
				console.log("arrIDx in the merge", arrIdxL, arrIdxR);
				/* setCurrentIdx(arrIdxL);
				setNextIdx(arrIdxR); */
				setTimeout(() => {
					setCurrentIdx(arrIdxL);
					setNextIdx(arrIdxR);
				}, 300);

				resultArray.push(leftArr[leftIndex]);
				leftIndex++;

				//setAnimationIdx(newLeftIndex, newRightIndex);
			} else {
				let arrIdxL = arr.indexOf(leftArr[leftIndex]);
				let arrIdxR = arr.indexOf(rightArr[rightIndex]);
				console.log("arrIDx in the merge", arrIdxL, arrIdxR);

				setTimeout(() => {
					setCurrentIdx(arrIdxL);
					setNextIdx(arrIdxR);
				}, 300);

				resultArray.push(rightArr[rightIndex]);
				rightIndex++;
			}
		}

		resultArray = resultArray
			.concat(leftArr.slice(leftIndex))
			.concat(rightArr.slice(rightIndex));
		animations(resultArray);

		setArr([...resultArray]);

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
