import tutot from "../assets/tutoricon.svg"

const Coursetile = ({cover,title , tutor, lessons, quiz})=>{
    return(
        <div className="container w-60 h-64 font-poppins mt-4 shadow-md cursor-pointer">
            <img src={cover} alt="cover here" />
            <div className="flex flex-col justify-around px-1 text-textgrey">
                <p>{title}</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={tutot} alt="icon here" className="w-4 h-4"/>
                        <p className="text-xs font-medium">{tutor}</p>
                    </div>
                    <p className="text-xs font-medium">{lessons} les<span className="text-2xl font-bold">.</span>{quiz} quizes </p>
                </div>
            </div>

        </div>

    )
}

export default Coursetile;