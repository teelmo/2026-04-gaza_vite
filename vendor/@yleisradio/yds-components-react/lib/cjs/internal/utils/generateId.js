'use strict';

const generateId = (prefix = 'id') => {
  return `${prefix}-${globalThis.crypto.randomUUID()}`;
};

exports.generateId = generateId;
