'use strict';

/**
 * how-i-do service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::how-i-do.how-i-do');
