import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductCard from './cards/ProductCard.jsx'
import ShowCards from './cards/ShowCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ProductCard></ProductCard> */}
    <ShowCards></ShowCards>
  </StrictMode>,
)
