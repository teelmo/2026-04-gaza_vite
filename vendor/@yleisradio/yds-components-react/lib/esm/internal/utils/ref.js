const mergeRefs = (...refs) => {
  return node => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref !== null) {
        ref.current = node;
      }
    }
  };
};

export { mergeRefs };
