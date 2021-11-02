'use strict';

const eventPool = require('./events.js');

parcelEvents.on('delivered', (payload) => {
	console.log('The package has been delivered!', payload.delivered);
});

