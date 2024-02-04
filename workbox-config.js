module.exports = {
	globDirectory: 'paginas/',
	globPatterns: [
		'**/*.{html,png,json,js,css}'
	],
	swDest: 'paginas/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};