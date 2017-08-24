'use strict';

const {
	section, button, span, div, a, p,
	h1, h2, ul, li, i, hr, br
} = require('iblokz-snabbdom-helpers');

module.exports = ({state, actions}) => ul('.showcase', state.showcase.list.map(demo =>
	li({
		style: {
			backgroundImage: `url(${demo.img})`
		}
	}, [
		span(demo.title),
		hr(),
		span(demo.description)
	])
));
