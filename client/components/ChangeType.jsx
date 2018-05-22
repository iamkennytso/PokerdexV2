import React from 'react';

const changeType = (props) => {
	return (
		<div id={props.id}>
			<button id={`${props.id}Button`} onClick={props.func} />
		</div> 
	)
}

export default changeType;