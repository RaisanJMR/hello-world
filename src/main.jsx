import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DummyProvider } from './DummyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DummyProvider>
      <App />
    </DummyProvider>
  </StrictMode>,
)
