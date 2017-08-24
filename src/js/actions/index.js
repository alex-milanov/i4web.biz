'use strict';

const {obj} = require('iblokz-data');

const showcase = require('./showcase');

// initial
const initial = {
};

// actions
const set = (path, value) => state => obj.patch(path, value);

module.exports = {
	initial,
	showcase,
	set
};
