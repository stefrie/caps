'use strict';

const parcel = require('./apps/events.js');

const driver = require('./apps/driver.js');
const vendor = require('./apps/vendor.js');

const faker = require('faker');

// event emitter
let store = faker.fake('{{company.companyName}}');
let orderID = faker.fake('{{datatype.uuid}}');
let orderTime = faker.fake('{{time.recent}}')
let customer = faker.name.findName();
let address = faker.fake('{{address.streetAddress}}, {{address.cityName}}, {{address.state}}, {{address.zipCodeByState}}');

parcel.emit('message', {
	'event': 'pickup',

	'payload': {
		'store': console.log(`${store}`),
		'orderID': console.log(`${orderID}`),
		'time': console.log(`${orderTime}`),
		'customer': console.log(`${customer}`),
		'address': console.log(`${address}`)
	}
});


// messenger.on('received', (payload) => {
// 	console.log('Confirmed receipt by:', payload);
// });

// messenger.emit('message', {
// 	id: messageId,
// 	text: input,
// });
