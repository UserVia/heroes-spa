import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { HeroesApp } from './HeroesApp'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  //el modo stricto ayuda a detectar errores tempranos
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>,
)
