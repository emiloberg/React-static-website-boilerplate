import ReactDOMServer from 'react-dom/server';
import React from 'react';
import AppRoot from './AppRoot';

module.exports = function render(locals, callback) {
	var renderedApp = ReactDOMServer.renderToStaticMarkup(React.createElement(AppRoot, locals));
	var html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>React Static Website</title>
</head>
<body>
  ${renderedApp}
</body>
</html>`;
	callback(null, html)
};