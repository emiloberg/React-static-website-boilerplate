/**
 * This seemingly unnecessary component exists to enable hot reload.
 *
 * As the rest of the components are written as
 * "functional stateless components" the hot reload mechanisms can't
 * really pick them up and hot reload them unless they're wrapped in a
 * component created with "class extends React.Component" or
 * "React.createClass"
 */

import React from 'react';
import App from './components/App';

export default class AppRoot extends React.Component {
	render() {
		return (<App />);
	}
}
