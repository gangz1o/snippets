import ReactDOM from 'react-dom/client'
import App from './App'
import '@renderer/assets/tailwind.css'
import '@renderer/assets/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)
