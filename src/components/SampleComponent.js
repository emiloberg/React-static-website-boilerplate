import React from 'react';

const SampleProps = ({ text = "property 'text' not set", children }) => {
	return (
		<div>
			{ text }
			{ children }
		</div>
	);
};

export default SampleProps;
