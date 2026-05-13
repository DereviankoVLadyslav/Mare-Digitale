import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '80px 24px', textAlign: 'center', fontFamily: 'var(--font-body)' }}>
          <p style={{ color: 'var(--md-ink-soft)', fontSize: '1rem' }}>
            Something went wrong. Please refresh the page.
          </p>
          <button
            className="btn btn-ghost"
            style={{ marginTop: 16 }}
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
