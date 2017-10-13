'use strict';

// dom
const {
	section, button, span, div, a, p,
	h1, h2, ul, li, i, hr, br,
	form, input, label, textarea
} = require('iblokz-snabbdom-helpers');

module.exports = ({state, actions}) => section('.left-bar', [
	h2('Tailor-made crafted web and multi-platform experiences')
]);
