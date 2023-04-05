import React from "react";

const Inputxd = ({ type, label }) => {
	return (
		<div>
			<label htmlFor={label}></label>
			<input type={type} />
		</div>
	);
};

export default Inputxd;
