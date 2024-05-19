import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Landing from './pages/landing.jsx'
import Profiling from './pages/profiling.jsx';
import './App.css'
import Dashboard from './pages/dashboard.jsx';

const App = ()=>  {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/register" element={<Profiling/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
