import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './AppRoot';

ReactDOM.render(
	<AppRoot />,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./AppRoot', NextApp =>
		ReactDOM.render(<NextApp />, document.getElementById('root'))
	)
}
