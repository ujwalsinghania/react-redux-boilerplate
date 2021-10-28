import React from "react";

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<any, ErrorState> {
  state: ErrorState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
