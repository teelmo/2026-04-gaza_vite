const generateId = (prefix = 'id') => {
  return `${prefix}-${globalThis.crypto.randomUUID()}`;
};

export { generateId };
