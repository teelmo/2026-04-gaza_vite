import { ErrorBoundary } from "solid-js";
import App from "./App";
import Fallback from "~/Fallback/Fallback";
import "../styles.css";
import type { Component } from "solid-js";

const Root: Component = (parameters) => {
  return (
    <ErrorBoundary fallback={(error) => <Fallback error={error} />}>
      <App parameters={parameters} />
    </ErrorBoundary>
  );
};

export default Root;
