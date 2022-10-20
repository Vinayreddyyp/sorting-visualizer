import React from "react";
import { sleep } from "../helpers/index";
export const selectionSort = async (
	setCurrentIdx,
	setArr,
	setAlgoName,
	setNextIdx,
	setLastSortedIdx,
	arr
) => {
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
