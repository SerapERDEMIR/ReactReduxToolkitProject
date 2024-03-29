import Product from './pages/Product'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Test from './pages/Test'

function App() {

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route index path='/' element={<Product/>}/>
        <Route index path='/test' element={<Test/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App