import { useNavigate } from 'react-router-dom';

const Landingnav = () =>{

    const navigate = useNavigate();

    const handleSignin = ()=>{
        navigate("/register")
    }
    return(
        <div className="container mx-auto flex justify-between items-center max-w-screen-lg mt-6">
            <div className="flex flex-1">
                <p className="text-2xl text-white font-abeezee">DataVerse</p>
            </div>
            <div className="flex flex-1">
                <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-theme transform-all duration-200">Home</button>
                <button className="text-md font-meidum font-abeezee text-white mr-4 h-full px-4 hover:text-theme transform-all duration-200">Paths</button>
                <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-theme transform-all duration-200">Features</button>
                <button className="text-md font-medium font-abeezee text-white mr-4 h-full px-4 hover:text-theme transform-all duration-200">About</button>
                
            </div>
            <div className="flex flex-1 items-center justify-end">
                <button className="text-md font-medium text-white font-abeezee hover:text-theme mr-10 transform-all duration-200" onClick={handleSignin}>Log in</button>
                <button className="text-md font-medium text-white font-abeezee bg-theme bg-opacity-30 hover:bg-opacity-100 py-3 px-8 rounded-lg transform-all duration-200" onClick={handleSignin}s>Sign Up</button>
            </div>
        </div>
    )
}

export default Landingnav;