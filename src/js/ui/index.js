'use strict';

// dom
const {
	section, button, span, div, a, p,
	h1, h2, ul, li, i
} = require('iblokz-snabbdom-helpers');
// components
const counter = require('./counter');

module.exports = ({state, actions}) => section('#ui', div('.hero', [
	h1('Tailor-made crafted web and multi-platform experiences'),
	h2([
		'...:: i4web.biz .:::...:.. ::...::.. ',
		span('.small', [
			i('.small.fa.fa-envelope-o'),
			' alex',
			i('.small.fa.fa-at'),
			'i4web.biz '
		]),
		' ....::...::: ...:: '
	])
]));
