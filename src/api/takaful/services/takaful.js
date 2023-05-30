'use strict';

/**
 * takaful service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::takaful.takaful');
