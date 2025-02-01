
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Nav from './comp/Nav'
import Home from './comp/Home'
import Add from './comp/Add'
import Search from './comp/Search'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/add" element={<Add/>}/>
<Route path="/search" element={<Search/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App