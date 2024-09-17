import { faSearch, faBell, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/dataverse-logo.png'; 

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-screen h-[65px] bg-white flex items-center border-b-[1px] border-gray-300 px-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
      
      <div className="flex items-center">
        <img src={Logo} alt="DataVerse Logo" className="h-10 w-10 mr-2" />
        <p className="text-xl font-semibold text-customDarkBlue">DataVerse</p>
      </div>


      <div className="flex ml-12 md:ml-4 items-center mr-10 space-x-4 bg-gray-100 p-2 rounded-full">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
            isActive('/app/dashboard') ? 'bg-customDarkBlue text-white font-semibold' : 'bg-transparent text-customDarkBlue'
          }`}
          onClick={() => navigate('/dashboard')}
        >
          Home
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
            isActive('/courses') ? 'bg-customDarkBlue text-white font-semibold' : 'bg-transparent text-customDarkBlue'
          }`}
          onClick={() => navigate('/courses')}
        >
          Learning
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
            isActive('/jobs') ? 'bg-customDarkBlue text-white font-semibold' : 'bg-transparent text-customDarkBlue'
          }`}
          onClick={() => navigate('/jobs')}
        >
          Jobs
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
            isActive('/datasets') ? 'bg-customDarkBlue text-white font-semibold' : 'bg-transparent text-customDarkBlue'
          }`}
          onClick={() => navigate('/datasets')}
        >
          Datasets
        </button>
      </div>

      {/* Search Bar and Icons */}
      <div className="flex flex-1 justify-between pr-6">
        <div className="relative mr-10">
          <input
            type="text"
            placeholder="Search"
            className="p-2 pl-10 w-56 text-sm border-none rounded-2xl text-black placeholder-gray-400 font-poppins bg-gray-100 focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
        <div className="flex items-center space-x-6">
          <FontAwesomeIcon icon={faBell} className="text-gray-600 text-lg hover:text-customDarkBlue cursor-pointer" />
          <FontAwesomeIcon icon={faUser} className="text-gray-600 text-lg hover:text-customDarkBlue cursor-pointer" onClick={() => navigate('/userprofile')} />
          <FontAwesomeIcon icon={faCog} className="text-gray-600 text-lg hover:text-customDarkBlue cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
