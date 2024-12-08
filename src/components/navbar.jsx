import { faSearch, faBell, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/dataverse-logo.png'; 
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const user = useSelector((state) => state.auth.user);

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="w-screen h-[65px] bg-white flex font-poppins items-center border-b-[1px] border-gray-300 px-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
      
      <div className="flex items-center cursor-pointer" onClick={() => navigate('/app/dashboard')}>
        <img src={Logo} alt="DataVerse Logo" className="h-10 w-10 mr-2" />
        <p className="text-xl font-semibold text-customDarkBlue">DataVerse</p>
      </div>


      <div className="flex ml-12 md:ml-4 items-center mr-10 space-x-4 bg-gray-100 p-2 rounded-full">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
            isActive('/app/dashboard') ? 'bg-customDarkBlue text-white font-semibold' : 'bg-transparent text-customDarkBlue'
          }`}
          onClick={() => navigate('/app/dashboard')}
        >
          Home
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
            isActive('/app/courses') ? 'bg-customDarkBlue text-white font-semibold' : 'bg-transparent text-customDarkBlue'
          }`}
          onClick={() => navigate('/app/courses/catalog')}
        >
          Courses
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
            isActive('/app/jobs') ? 'bg-customDarkBlue text-white font-semibold' : 'bg-transparent text-customDarkBlue'
          }`}
          onClick={() => navigate('/app/jobs')}
        >
          Jobs
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
            isActive('/app/rankings') ? 'bg-customDarkBlue text-white font-semibold' : 'bg-transparent text-customDarkBlue'
          }`}
          onClick={() => navigate('/app/rankings')}
        >
          Leaderboard
        </button>
      </div>

      {/* Search Bar and Icons */}
      <div className="flex flex-1 justify-end pr-6">
        {/* <div className="relative mr-10">
          <input
            type="text"
            placeholder="Search"
            className="p-2 pl-10 w-56 text-sm border-none rounded-2xl text-black placeholder-gray-400 font-poppins bg-gray-100 focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div> */}
        <div className="flex items-center space-x-6">
          {/* <FontAwesomeIcon icon={faBell} className="text-gray-600 text-lg hover:text-customDarkBlue cursor-pointer" /> */}
          {user?.imgUrl?
              <img
                src= {user.imgUrl}
                alt="Avatar"
                className={`w-10 h-10 rounded-full cursor-pointer block`}
              />
            :
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-customBlue font-bold text-xl">
                  {user?.username?.at(0).toUpperCase()}
                </span>
              </div>
            }
          <p>{user?.username}</p>
          <FontAwesomeIcon icon={faCog} className="text-gray-600 text-lg hover:text-customDarkBlue cursor-pointer" onClick={() => navigate('/app/settings')} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
