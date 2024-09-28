import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { FaRegSun } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { GoNote } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axiosInstance from "../config/api";
import { toast, ToastContainer } from "react-toastify";

const CodeExerciseScreen = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [quiz, setQuiz] = useState();
  const [dark, setDark] = useState(true);
  const [hints, setHints] = useState([]);
  const [hintCount, setHintCount] = useState(0);
  const { courseId, index } = useParams();
  const course = useSelector((state) => state.course.course);

  const fetchQuiz = async () =>{
    const lecture = course?.lectures[index-1];
    try{
      const response = await axiosInstance.get(`/learning/quiz/${lecture.quiz}`)
      console.log(response.data.quiz)
      setQuiz(response.data.quiz);
      setCode(response.data.quiz.codeTemplate);
    }
    catch(err){
      toast.error(err);
    }
  }

  useEffect(()=>{
    if(!quiz)
      fetchQuiz();

  },[course])

  const instructions = [
    "Follow the coding standards.",
    "Write clean and readable code.",
    "Submit the code for review.",
    "Test your code with different inputs."
  ];

  const handleRunCode = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/execute", {
        code: code,
      });
      setOutput(response.data.output);
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  const handleEditorMount = (editor, monaco) => {
    monaco.editor.defineTheme("myCustomTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "ffa500" },
        { token: "keyword", foreground: "ff0000" },
        { token: "identifier", foreground: "00ff00" },
      ],
      colors: {
        "editor.background": "#001C27",
        "editor.foreground": "#ffffff",
        "editor.lineHighlightBackground": "#001C27",
      },
    });
    monaco.editor.setTheme("myCustomTheme");
  };

  const addHint = () => {
    const newHint = `This is hint #${hintCount + 1}. Add your hint content here.`;
    setHints([...hints, newHint]);
    setHintCount(hintCount + 1);
  };

  return (
    <div className="flex h-screen overflow-hidden mt-2 font-poppins px-4">
  {/* Sidebar */}
  <div className="w-1/3 bg-white shadow-sm rounded-md overflow-auto">
    
    {/* Exercise Section */}
    <div className="w-full h-64 flex flex-col">
      {/* Exercise Heading */}
      <div className="sticky top-0 z-10 w-full h-7 py-1 px-4 bg-slate-200 flex-none">
        <p className="text-customDarkBlue font-semibold text-sm flex items-center">
          <span className="mr-2"><GoNote size={15} /></span>Exercise
        </p>
      </div>
      {/* Exercise Instructions */}
      <div className="flex-1 p-2 overflow-y-auto">
        <p className="text-sm">
          Add detailed instructions here...
          Add detailed instructions here...
          {/* Add more instructions as needed */}
        </p>
      </div>
    </div>

    {/* Instructions Section */}
    <div className="w-full mt-1 flex flex-col flex-1 overflow-y-auto">
      {/* Instructions Heading */}
      <div className="sticky top-0 z-10 w-full h-7 py-1 px-4 bg-slate-200 flex-none">
        <p className="text-customDarkBlue font-semibold text-sm flex items-center">
          <span className="mr-2"><FaRegCheckCircle size={12} /></span>Instructions
        </p>
      </div>
      {/* Instruction Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <ul className="list-disc pl-6 text-sm">
          {instructions.map((point, index) => (
            <li key={index} className="mb-1">
              {point}
            </li>
          ))}
        </ul>

        {/* Hint Button */}
        <button
          onClick={addHint}
          className="w-36 hover:scale-110 transform-all duration-200 h-10 p-2 flex items-center text-sm font-semibold justify-center rounded-md border-2 border-customDarkBlue"
        >
          <span className="mr-2"><HiOutlineLightBulb size={20} /></span>Take Hint!
        </button>

        {/* Hint Section */}
        <div className="mt-4">
          {hints.map((hint, index) => (
            <div key={index} className="p-2 mt-2 bg-gray-100 rounded-md">
              <p className="text-sm">{hint}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Main Section */}
  <div className="w-2/3 flex flex-col pl-4 relative">
    {/* Code Editor Section */}
    <div className="flex-1 bg-customDarkBlue shadow-sm rounded flex flex-col relative">
      {/* File name section fixed at the top */}
      <div className="h-6 w-full z-10 rounded-md">
        <div className="bg-[#062e3d] w-full h-full flex items-center justify-between rounded-md overflow-hidden">
          <div className="flex px-4 items-center bg-customDarkBlue h-full justify-center">
            <p className="font-semibold text-white text-sm">script.py</p>
          </div>
          <div className="flex h-full items-center">
            <button
              onClick={() => {
                setDark(!dark);
                handleEditorMount();
              }}
              className="border-l-[1px] h-full hover:b border-black flex items-center px-4 text-white text-sm font-semibold space-x-4"
            >
              <span className="mr-1"><FaRegSun size={12} /></span>Light
            </button>
          </div>
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="h-80 overflow-y-auto relative rounded-md">
      <MonacoEditor
        height="100%"
        language="python"
        theme={dark ? "vs-dark" : "vs-light"} 
        value={code} 
        options={{
          automaticLayout: true,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
        }}
        onChange={(value) => setCode(value)}
        onMount={handleEditorMount}
      />

      </div>

      {/* Buttons at bottom */}
      <div className="absolute bottom-0 h-12 w-full px-4 py-2 flex items-center justify-end space-x-2 z-20">
        <button
          onClick={handleRunCode}
          className="px-2 py-1 h-full rounded-sm border-2 text-gray-300 border-gray-300"
        >
          <TbReload />
        </button>
        <button
          onClick={handleRunCode}
          className="px-2 py-1 h-full text-sm font-medium rounded-sm border-2 flex items-center text-gray-300 border-gray-300"
        >
          <p>Run Code</p>
        </button>
        <button
          onClick={handleRunCode}
          className="px-4 h-full py-1 bg-theme text-sm text-white rounded-sm"
        >
          Submit Answer!
        </button>
      </div>
    </div>

    {/* Output Display */}
    <div className="flex-1 bg-[#001C27] shadow-md rounded-sm overflow-auto mt-1">
      <div className="bg-[#062e3d] w-full h-6 flex items-center justify-between rounded-md overflow-hidden">
        <div className="flex px-4 items-center bg-customDarkBlue h-full justify-center">
          <p className="font-semibold text-white text-sm">Console</p>
        </div>
      </div>
      <div className="p-4 text-white">
        <pre>{output}</pre>
      </div>
    </div>
  </div>
</div>

  );
};

export default CodeExerciseScreen;
