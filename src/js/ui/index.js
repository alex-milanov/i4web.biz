'use strict';

// dom
const {
	section, button, span, div, a, p,
	h1, h2, ul, li, i, hr, br
} = require('iblokz-snabbdom-helpers');
// components
const nav = require('./nav');
const showcase = require('./showcase');
const contact = require('./contact');

module.exports = ({state, actions}) => section('#ui', [
	nav({state, actions}),
	contact({state, actions}),
	showcase({state, actions})
]);
