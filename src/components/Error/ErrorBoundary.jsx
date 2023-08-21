import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        // Handle the error here, e.g. log the error or display an error message
        console.error(error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            // You can render a fallback UI here
            return <div>Something went wrong.</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
