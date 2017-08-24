'use strict';

// dom
const {
	section, button, span, div, a, p,
	h1, h2, ul, li, i, hr, br
} = require('iblokz-snabbdom-helpers');

module.exports = ({state, actions}) => section('.nav', [
	h1('i4web.biz'),
	ul('.menu', [
		li(a([i('.fa.fa-eye'), ' Showcase'])),
		li(a([i('.fa.fa-info'), ' Info'])),
		li(a([i('.fa.fa-at'), ' Contact']))
	])
]);
