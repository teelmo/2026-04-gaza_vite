import React from 'react';
import ReactDOM from 'react-dom/client';

/* Components */
import Root from '~/Root';

/* Styles */
import '~/index.css';

// Suppress unhandled AbortError from media play/pause races (browser autoplay policy).
// The scrolly video component calls play() then pause() during scroll transitions;
// the browser rejects the in-flight play() promise with AbortError. This is harmless
// and does not indicate a real error.
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason?.name === 'AbortError') {
    event.preventDefault();
  }
});

// Yddrasil bootstrap to handle multiple Dataviz components
const projectName = '2026-04-gaza-vite';
const selector = `.plus-app.plus-app-${projectName}`;

const eventHandlers = {
  onMount: (name: string, element: Element, services: any) => {
    if (name !== projectName) {
      return;
    }
    const container = element.querySelector(selector) as Element;
    if (!container) {
      return;
    }
    // Parameters passed from Yddrasil.
    const parameters = services.getParameters() || {};

    const root = ReactDOM.createRoot(container);

    root.render(<Root parameters={parameters} />);
  },
};

const isLocalhostOrStandalone = Boolean(
  window.location.hostname === 'plus.yle.fi' ||
    window.location.hostname === 'deski.yle.fi' ||
    window.location.hostname === 'svenska-dataviz.ylestatic.fi' ||
    window.location.hostname === 'svenska-dataviz.test.ylestatic.fi' ||
    window.location.hostname === 'lusi-dataviz.ylestatic.fi' ||
    window.location.hostname === 'lusi-dataviz.test.ylestatic.fi' ||
    window.location.hostname === 'dev.yle.fi' ||
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

if (!isLocalhostOrStandalone && window.yleVisualisation) {
  // Svenska/Aihe
  window.yleVisualisationEmbeds = window.yleVisualisationEmbeds || {};
  window.yleVisualisationEmbeds[projectName] = eventHandlers;
} else if (!isLocalhostOrStandalone && !window.yleVisualisation) {
  // Article renderer, main yle.fi site through Yddrasil
  window.plusApp = window.plusApp || {};
  // Go through all Dataviz blocks using this React app
  document.querySelectorAll(`${selector}:not([data-yle-vis-processed])`).forEach((element) => {
    element.setAttribute('data-yle-vis-processed', projectName);
    // Distribute each Yddrasil parameter set to the closest React component
    const parent =
      element.closest('[data-yle-external-content-parameters]') ||
      element.parentElement ||
      document.body;

    const services = {
      getParameters: function () {
        return {};
      },
    };
    let parameters: Parameter = {};
    if (parent.hasAttribute('data-yle-external-content-parameters')) {
      try {
        parameters = JSON.parse(parent.getAttribute('data-yle-external-content-parameters') || '');
      } catch (e) {
        console.log(e);
      }
      if (typeof parameters === 'object' && parameters !== null && !Array.isArray(parameters)) {
        services.getParameters = function () {
          return parameters;
        };
      }
    }
    eventHandlers.onMount(projectName, parent, services);
  });
} else if (isLocalhostOrStandalone) {
  // Don't look for Yddrasil parameters, use URL query string instead
  const container = document.querySelector(selector) as HTMLElement;
  const parameters: Parameter = {};
  const searchParameters = new URLSearchParams(window.location.search);
  for (const [key, value] of searchParameters) {
    parameters[key] = value;
  }
  // Set up axe accessibility tools in dev environment
  if (import.meta.env.DEV) {
    // React 18 + axe requires some timing tricks to work properly
    setTimeout(async () => {
      const axe = await import('@axe-core/react');
      await axe.default(React, ReactDOM, 1000);
    }, 0);
  }
  const root = ReactDOM.createRoot(container);
  root.render(<Root parameters={parameters as Parameter} />);
} else {
  console.log('no env');
}
