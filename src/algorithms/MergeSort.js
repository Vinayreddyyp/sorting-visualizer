import React, { useCallback, useEffect, useState } from "react";

import { sleep } from "../helpers/index";

export const MergeSort = (arr) => {
	const [arrayCopy, setArrayCopy] = useState([]);
	const [result, setResult] = useState([]);
	console.log("arrayCopy", arrayCopy);

	useEffect(() => {
		setArrayCopy(arr);
	}, [arr]);

	const merge = (arr1, arr2) => {
		let results = [];
		debugger;
		let i = 0;

		let j = 0;

		while (i < arr1.length && j < arr2.length) {
			if (arr2[j] > arr1[i]) {
				debugger;
				results.push(arr1[i]);
				setResult(arr1[i]);
				i++;
			} else {
				results.push(arr2[j]);
				setResult(arr1[j]);
				j++;
			}
		}
		while (i < arr1.length) {
			results.push(arr1[i]);
			setResult(arr1[i]);
			i++;
		}
		while (j < arr2.length) {
			results.push(arr2[j]);
			setResult(arr1[i]);
			j++;
		}
		return results;
	};

	const sorting = (arrayCopy) => {
		console.log("arr in the sort", arrayCopy);
		if (arrayCopy.length <= 1) return arrayCopy;
		let mid = Math.floor(arrayCopy.length / 2);
		debugger;
		let left = sorting(arrayCopy.slice(0, mid));

		let right = sorting(arrayCopy.slice(mid));
		return merge(left, right);
	};
	return { sorting };
};

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
