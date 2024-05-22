import book from '../assets/book.svg'
import ProgressBar from './progressbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons';

const CourseProgress = ({progress, title}) =>{
    return(
        <div className="flex items-center w-full px-4 py-2 border-b border-grey-300 text-textgrey">
            <div className="w-20 h-20 bg-themeblack flex items-center justify-center rounded">
                <img src={book} alt="" className=''/>
            </div>
            <div className='flex flex-col w-96 p-2 ml-4'>
                <p className='text-md font-semibold'>{title}</p>
                {progress!==100?<>
                <div className='flex items-center space-x-4'>
                    <p className='text-sm font-medium text-grey-500'>progress</p>
                    <ProgressBar progress={progress} label={false} width="50%"  containerHeight='10px' containerWidth="40%"/>
                </div>
                </>:
                <>
                <div className='flex items-center justify-center w-24 rounded-full bg-theme text-white p-1'>
                    <p className='text-xs'>Completed</p>
                </div>
                </>
                }
            </div>
            <div className='flex items-center0 pl-48'>
                <FontAwesomeIcon icon={faEllipsisH} className='w-6 h-6 hover:scale-125 transform-all duration-200 cursor-pointer'/>
            </div>
        </div>
    )
}

export default CourseProgress