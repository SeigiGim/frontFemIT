import React from "react";
import "./button.css";

const Button = ({ accion, color }) => {
	return (
		<button type="button" class={color}>
			{accion}
		</button>
	);
};

export default Button;
