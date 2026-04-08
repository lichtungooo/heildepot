import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2 style={{ color: '#c00' }}>Etwas ist schiefgelaufen</h2>
          <p style={{ color: '#666' }}>{this.state.error?.message}</p>
          <button onClick={() => { this.setState({ error: null }); window.location.reload() }}
            style={{ marginTop: 16, padding: '10px 24px', background: '#7dab5a', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
            Seite neu laden
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
