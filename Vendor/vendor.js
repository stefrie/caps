'use strict';

const parcel = require('../Hub/events.js');
const faker = require('faker');
const logDelivery = require('./log-delivery.js');

parcel.on('delivered', logDelivery);

function pickup(storeName) {
	let payload = {
		'store': storeName,
		'orderID': faker.datatype.uuid(),
		'customer': faker.name.findName(),
		'address': faker.address.streetAddress(),
	}
	parcel.emit('pickup', payload);
}

pickup('Frisch\'s Big Boy')
