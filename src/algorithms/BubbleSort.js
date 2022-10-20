import React from "react";
import { sleep } from "../helpers/index";

export const bubbleSort = async (
	setCurrentIdx,
	setArr,
	setAlgoName,
	setNextIdx,
	setLastSortedIdx,
	arr
) => {
	console.log("props in the BubbleSort", arr);
	for (let i = 0; i < arr.length; i++) {
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
	setNextIdx(null);
};
