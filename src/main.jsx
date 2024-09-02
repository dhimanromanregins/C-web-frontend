import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/main.css';
import './assets/css/plugins/aos.css';
import './assets/css/plugins/bootstrap.min.css';
import './assets/css/plugins/fontawesome.css';
import './assets/css/plugins/magnific-popup.css';
import './assets/css/plugins/mobile.css';
import './assets/css/plugins/nice-select.css';
import './assets/css/plugins/owlcarousel.min.css';
import './assets/css/plugins/sidebar.css';
import './assets/css/plugins/slick-slider.css';
import './App.css';

createRoot(document.getElementById('proj')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
