import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from '@global/styles/GlobalStyles'; // Импорт глобальных стилей, можно и в App.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles/>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
