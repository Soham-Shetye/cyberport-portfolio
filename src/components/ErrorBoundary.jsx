import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <div className="max-w-md w-full border-2 border-red-600 p-8 text-center bg-red-600/5">
            <h1 className="text-red-600 font-mono text-2xl mb-4 font-bold tracking-tighter">CRITICAL_SYSTEM_FAILURE</h1>
            <p className="text-red-500/60 font-mono text-xs mb-8">NULL_POINTER_EXCEPTION: ATTEMPT_TO_READ_UNDEFINED_PROPERTIES</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 bg-red-600 text-white font-mono text-sm hover:bg-red-700 transition-colors"
            >
              [ REBOOT_SYSTEM ]
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;