'use strict';

var React = require('react');

const SectionTabContext = React.createContext(undefined);
const useSectionTabContext = () => {
  const context = React.useContext(SectionTabContext);
  if (!context) {
    return undefined;
  }
  return context;
};

exports.SectionTabContext = SectionTabContext;
exports.useSectionTabContext = useSectionTabContext;
