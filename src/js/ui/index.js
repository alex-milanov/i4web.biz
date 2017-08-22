'use strict';

// dom
const {
	section, button, span, div, a, p,
	h1, h2, ul, li, i, hr, br
} = require('iblokz-snabbdom-helpers');
// components
const counter = require('./counter');

const demos = [
	{
		title: 'AlphaPM',
		description: 'Yet another project management system',
		url: 'https://alex-milanov.github.io/alphapm',
		repo: 'https://github.com/alex-milanov/alphapm',
		img: '../assets/img/demos/alphapm.png'
	},
	{
		title: 'Jam Station',
		description: 'Web based DAW with Web Audio API & Web MIDI API',
		url: 'https://alex-milanov.github.io/jam-station',
		repo: 'https://github.com/alex-milanov/jam-station',
		img: '../assets/img/demos/jam-station.png'
	},
	{
		title: 'MongoAdmin',
		description: 'MongoDB Web & Electron Client',
		url: 'https://github.com/alex-milanov/mongo-admin',
		repo: 'https://github.com/alex-milanov/mongo-admin',
		img: '../assets/img/demos/mongo-admin.png'
	},
	{
		title: 'AlphaPM',
		description: 'Yet another project management system',
		url: 'https://alex-milanov.github.io/alphapm',
		repo: 'https://github.com/alex-milanov/alphapm',
		img: '../assets/img/demos/alphapm.png'
	},
	{
		title: 'Jam Station',
		description: 'Web based DAW with Web Audio API & Web MIDI API',
		url: 'https://alex-milanov.github.io/jam-station',
		repo: 'https://github.com/alex-milanov/jam-station',
		img: '../assets/img/demos/jam-station.png'
	},
	{
		title: 'MongoAdmin',
		description: 'MongoDB Web & Electron Client',
		url: 'https://github.com/alex-milanov/mongo-admin',
		repo: 'https://github.com/alex-milanov/mongo-admin',
		img: '../assets/img/demos/mongo-admin.png'
	},
	{
		title: 'AlphaPM',
		description: 'Yet another project management system',
		url: 'https://alex-milanov.github.io/alphapm',
		repo: 'https://github.com/alex-milanov/alphapm',
		img: '../assets/img/demos/alphapm.png'
	},
	{
		title: 'Jam Station',
		description: 'Web based DAW with Web Audio API & Web MIDI API',
		url: 'https://alex-milanov.github.io/jam-station',
		repo: 'https://github.com/alex-milanov/jam-station',
		img: '../assets/img/demos/jam-station.png'
	},
	{
		title: 'MongoAdmin',
		description: 'MongoDB Web & Electron Client',
		url: 'https://github.com/alex-milanov/mongo-admin',
		repo: 'https://github.com/alex-milanov/mongo-admin',
		img: '../assets/img/demos/mongo-admin.png'
	}
];

module.exports = ({state, actions}) => section('#ui', div('.hero', [
	h1('i4web.biz'),
	ul('.demos', demos.map(demo =>
		li({
			style: {
				backgroundImage: `url(${demo.img})`
			}
		}, [
			span(demo.title),
			hr(),
			span(demo.description)
		])
	))
]));
