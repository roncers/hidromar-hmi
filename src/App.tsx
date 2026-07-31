import { useRoutes } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { routes } from './routes'

function App() {
  return (
    <div className="app">
      <Header />
      <main>{useRoutes(routes)}</main>
      <Footer />
    </div>
  )
}

export default App
