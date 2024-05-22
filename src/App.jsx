import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Landing from './pages/landing.jsx'
import Profiling from './pages/profiling.jsx';
import './App.css'
import Dashboard from './pages/dashboard.jsx';
import Catalog from './pages/coursecatalog.jsx';
import Courses from './pages/courses.jsx';
import UserProfile from './pages/userprofile.jsx';
import DatasetsScree from './pages/Datasets/DatasetsScree.jsx';

const App = ()=>  {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/register" element={<Profiling/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/catalog" element={<Catalog/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
        <Route path="/datasets" element={<DatasetsScree/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
