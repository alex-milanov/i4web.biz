'use strict';

// dom
const {
	section, button, span, div, a, p,
	h1, h2, ul, li, i, hr, br,
	form, input, label, textarea
} = require('iblokz-snabbdom-helpers');

const API_URL_V2 = 'https://i4web.zendesk.com/api/v2';

const formUtil = require('../util/form');
const request = require('../util/request');

const sendTicket = ({name, email, subject, body}) => request.post(`${API_URL_V2}/requests`)
	.send({
		request: {
			subject,
			tags: [
				'web_widget'
			],
			'via_id': 48,
			comment: {
				body,
				uploads: []
			},
			requester: {
				name,
				email,
				'locale_id': 1
			},
			ticket_form_id: null
		}
	})
  .observe()
	.map(res => res.body);

module.exports = ({state, actions}) => section('.contact', form({
	on: {
		submit: ev => (
			ev.preventDefault(),
			sendTicket(formUtil.toData(ev.target))
				.subscribe(res => console.dir(res, {depth: null, colors: true}))
		)
	}
}, [
	label('Name'),
	input('[name="name"][type="text"]'),
	label('Email'),
	input('[name="email"][type="text"]'),
	label('Subject'),
	input('[name="subject"][type="text"]'),
	label('Message'),
	textarea('[name="body"]'),
	button('Send')
]));
