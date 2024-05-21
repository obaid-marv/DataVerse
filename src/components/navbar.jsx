import { faSearch, faBell, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="container w-full h-20 bg-themeblack p-4 flex items-center justify-between">
      <p className="text-xl font-abeezee font-medium text-white">DataVerse</p>
      <div className="flex">
        <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-theme transform-all duration-200" onClick={()=>navigate('/dashboard')}>Home</button>
        <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-theme transform-all duration-200" onClick={()=>navigate('/courses')}>Learning</button>
        <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-theme transform-all duration-200">Jobs</button>
        <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-theme transform-all duration-200">Datasets</button>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="search"
          className="p-2 pl-8 w-48 text-sm border-none text-white placeholder-white font-poppins bg-white bg-opacity-20 rounded focus:outline-none"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faBell} className="text-white text-lg hover:text-theme cursor-pointer" />
        <FontAwesomeIcon icon={faUser} className="text-white text-lg hover:text-theme cursor-pointer"  onClick={()=>navigate('/userprofile')}/>
        <FontAwesomeIcon icon={faCog} className="text-white text-lg hover:text-theme cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
