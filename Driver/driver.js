'use strict';

const parcel = require('../Hub/events.js');
const handlePickup = require('./handle-pickup.js');

parcel.on('pickup', handlePickup);

