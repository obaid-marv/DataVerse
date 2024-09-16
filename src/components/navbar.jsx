import { faSearch, faBell, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-screen h-[65px] bg-theme flex items-center  ">
      {/* <p className="text-xl font-abeezee font-medium text-white">DataVerse</p> */}
      <div className="flex flex-1 ml-12 md:ml-4 items-center mr-10">
        <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-customDarkBlue transform-all duration-200" onClick={()=>navigate('/dashboard')}>Home</button>
        <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-customDarkBlue transform-all duration-200" onClick={()=>navigate('/courses')}>Learning</button>
        <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-customDarkBlue transform-all duration-200" onClick={()=>navigate('/jobs')}>Jobs</button>
        <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-customDarkBlue transform-all duration-200" onClick={()=>navigate('/datasets')}>Datasets</button>
      </div>
      <div className='flex flex-1 justify-between pr-6'>
      <div className="relative mr-10">
        <input
          type="text"
          placeholder="Search"
          className="p-2 pl-10 w-56 text-sm border-none rounded-2xl text-white placeholder-white font-poppins bg-white bg-opacity-20 focus:outline-none"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
        />
      </div>
      <div className="flex items-center space-x-6">
        <FontAwesomeIcon icon={faBell} className="text-white text-lg hover:text-customDarkBlue cursor-pointer" />
        <FontAwesomeIcon icon={faUser} className="text-white text-lg hover:text-customDarkBlue cursor-pointer"  onClick={()=>navigate('/userprofile')}/>
        <FontAwesomeIcon icon={faCog} className="text-white text-lg hover:text-customDarkBlue cursor-pointer" />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
