import { h, render } from 'preact';

let root;
function init() {
	let App = require('./App').default;

	render(<App />, document.body, document.getElementById('app'));
}
init()