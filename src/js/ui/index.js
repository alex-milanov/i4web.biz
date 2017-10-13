'use strict';

// dom
const {
	section, button, span, div, a, p,
	h1, h2, ul, li, i, hr, br
} = require('iblokz-snabbdom-helpers');
// components
const nav = require('./nav');
const showcase = require('./showcase');
const leftBar = require('./left-bar');

module.exports = ({state, actions}) => section('#ui', [
	nav({state, actions}),
	leftBar({state, actions}),
	showcase({state, actions})
]);
