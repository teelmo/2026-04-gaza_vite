'use strict';

var React = require('react');

const useInterval = (callback, ms) => {
  const storedCallback = React.useRef(callback);
  React.useEffect(() => {
    storedCallback.current = callback;
  }, [callback]);
  React.useEffect(() => {
    if (ms == null) {
      return;
    }
    const id = setInterval(() => storedCallback.current(), ms);
    return () => clearInterval(id);
  }, [ms]);
};

exports.useInterval = useInterval;
