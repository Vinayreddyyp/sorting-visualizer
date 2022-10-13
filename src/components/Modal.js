import React, { useState } from "react";

import ReactModal from "react-modal";

const Modal = (props) => {
	const { hideModal, value, onChangeValue } = props;

	return (
		<ReactModal isOpen>
			<span>The count is modal</span>
			<input value={value} onChange={(e) => onChangeValue(e)} />
			<button onClick={hideModal}>Add Range</button>
		</ReactModal>
	);
};
export default Modal;
