import React from "react";
import { sleep } from "../helpers/index";

export const insertionSort = async (
	setCurrentIdx,
	setArr,
	setAlgoName,
	setNextIdx,
	setLastSortedIdx,
	arr
) => {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		setCurrentIdx(i);
		let j = i - 1;
		for (j; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
			setNextIdx(j + 1);
			setArr([...arr]);
			await sleep(300);
		}

		setAlgoName("insertionSort");
		arr[j + 1] = currentVal;
		setLastSortedIdx(j + 1);
		await sleep(200);
	}
	setCurrentIdx(null);
	setNextIdx(null);
};
