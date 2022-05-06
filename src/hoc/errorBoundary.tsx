import { Component, ReactNode } from "react";

interface Props {
  children: JSX.Element;
}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, ErrorState> {
  state: ErrorState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) : ErrorState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops.... Something went wrong!</h1>;
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
