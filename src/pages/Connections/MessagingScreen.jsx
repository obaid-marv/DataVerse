import React, { useEffect, useState } from "react";
import { IMAGES } from "../../assets";
import ChatCard from "../../components/Profile/ChatCard";
import { chatsCardDetails } from "../../constants/chatsCardDetails";
import { IoIosCheckmark, IoMdMore } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { SlOptionsVertical } from "react-icons/sl";
import { BiSolidMicrophone } from "react-icons/bi";
import { HiPaperClip } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
// import { useSocket } from "../../contexts/SocketContext";

export default function StudentChatsPage() {
  const [message, setMessage] = useState("");
  const [sentMsg, setSentMsg] = useState("");
  const [receiveMsg, setReceiveMsg] = useState("");
  // const { socket, setIsSocketEnabled } = useSocket();

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setSentMsg(message);
    setMessage("");
  };

  // useEffect(() => {
  //   setIsSocketEnabled(true);
  // }, []);

  // useEffect(() => {
  //   if (socket) {
  //     console.log("Socket initialized, setting up event listeners...");

  //     socket.on("connect", () => {
  //       console.log("connected", socket.id);
  //     });

  //     socket.on("receive-message", (data) => {
  //       console.log(data);
  //       setReceiveMsg(data);
  //     });

  //     socket.on("welcome", (s) => {
  //       console.log(s);
  //     });
  //     return () => {
  //       socket.disconnect();
  //     };
  //   } else {
  //     console.log("Socket is not initialized yet.");
  //   }
  // }, [socket]);

  return (
    <>
      <div
        className={`flex flex-col pt-2 rounded-tl-3xl bg-white rounded-bl-3xl h-full w-full font-sans`}
      >

        {/* Main Content Div  */}
        <div className="flex flex-row max-h-screen">
          {/* Left Div  */}
          <div className="flex-1 bg-blue-50 pl-2 pr-4 py-5 mb-4 rounded-tr-3xl rounded-bl-3xl">
            {/* Heading */}
            <div className="text-customDarkBlue flex justify-center font-medium text-base mb-6">
              Conversations
            </div>

            {/* Chat Card  */}
            <div className="overflow-y-auto h-[73vh] register-scrollbar2 ">
              {chatsCardDetails.map((item, index) => (
                <ChatCard
                  key={index}
                  img={item.avatar}
                  name={item.name}
                  lastSeen={item.lastSeen}
                  msgShown={item.msgShown}
                  status={item.status}
                />
              ))}
            </div>
          </div>

          {/* Right Div  */}
          <div className="flex-[3] flex flex-col pr-4 py-5 ">
            {/* Top Div  */}
            <div className="flex-1 flex flex-row space-x-3 items-center pl-3 pr-6 py-2 border-y border-y-gray-200">
              <div className="flex-shrink-0">
                <img
                  src={IMAGES.avatar11}
                  alt="Teacher Avatar"
                  className="h-[45px] w-[45px]"
                />
              </div>
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <p className="text-sm text-customBlackGreyish font-semibold">
                    Ms. Aliay Lane
                  </p>
                  <div className="flex flex-row items-center -ml-1">
                    <GoDotFill className="text-customOnlineColor" />
                    <p className="text-customLightGrayShade text-xxs font-normal text-start">
                      Online
                    </p>
                  </div>
                </div>
                <div className="flex flex-row space-x-3 items-center">
                  <FiPhone size={18} />
                  <SlOptionsVertical size={16} />
                </div>
              </div>
            </div>

            {/* Bottom Div  */}
            <div className="flex-[10] flex flex-col-reverse pl-4">
              {/* Footer Div  */}
              <div className="flex flex-row items-center mt-4">
                <div className="flex flex-row w-full items-center space-x-2 px-1 pr-4 border-gray-300 rounded-lg shadow-lg focus-within:outline-none focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-500">
                  <textarea
                    rows="1"
                    placeholder="Type your message..."
                    className="w-full px-3 py-2 text-sm outline-none resize-none overflow-hidden rounded-l-lg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onInput={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = e.target.scrollHeight + "px";
                    }}
                  ></textarea>
                  <BiSolidMicrophone className="text-customMsgIconsColor w-5 h-5" />
                  <HiPaperClip className="text-customMsgIconsColor w-5 h-5" />
                </div>
                {/* send button  */}
                <div
                  onClick={handleSubmit}
                  className="rounded-full p-2 ml-2 bg-customBlue items-center justify-center cursor-pointer"
                >
                  <RiSendPlaneFill className="text-white" />
                </div>
              </div>
              {/* Chat Area Div  */}
              <div className="flex flex-col-reverse gap-y-3">
                {/* Msg Received */}
                <div className="flex flex-row space-x-2">
                  <div className="flex-shrink-0">
                    <img src={IMAGES.avatar11} className="w-[25px] h-[25px]" />
                  </div>
                  <div className="flex p-3 max-w-[90vh] rounded-r-xl rounded-bl-xl sm:rounded-r-3xl sm:rounded-bl-3xl md:rounded-r-full md:rounded-bl-full bg-customLightBlueShade ">
                    <p className="text-black text-sm font-normal">
                      {" "}
                      {receiveMsg !== ""
                        ? receiveMsg
                        : "Yes, I am available RN."}
                    </p>
                    <div className="flex flex-row ml-7 mt-[2px] text-customGray text-xxs font-medium">
                      <p className="mt-[2px]">18:19</p>
                      <IoIosCheckmark size={18} />
                    </div>
                  </div>
                </div>
                {/* Msg Sent  */}
                <div className="flex px-4 p-3 rounded-l-3xl rounded-tr-3xl md:rounded-l-full md:rounded-tr-full ml-auto max-w-[90vh]  bg-customLightBlueShade">
                  <p className="text-customDarkBlue text-sm font-normal">
                    {sentMsg !== ""
                      ? sentMsg
                      : "Hi Miss, are you available for a quick online class?"}
                  </p>
                  <div className="flex flex-row ml-7 mt-[2px] text-customLightGray text-xxs font-medium">
                    <p className="mt-[2px]">18:16</p>
                    <IoIosCheckmark size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
