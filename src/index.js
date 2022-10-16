import App from "./pages/App";
import { ModalProvider } from "react-modal-hook";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ModalProvider>
			<App />
		</ModalProvider>
	</React.StrictMode>
);
