import './App.css'
import Header from './components/header/Header'
import Body from './components/home/Home'

function App() {
  return (
    <div className="app">
      <Header />
      {/* router in here */}
      <Body />
    </div>
  )
}

export default App
