import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { FaRegSun } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import axios from "axios"; // Import axios for making API requests

const CodeExerciseScreen = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [dark, setDark] = useState(true);

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
        { token: "comment", foreground: "ffa500", fontStyle: "italic" },
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

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left side: Exercise Instructions */}
      <div className="w-1/3 bg-gray-100 p-4 shadow-sm rounded-sm overflow-auto">
        <h2 className="text-xl font-bold mb-4">Exercise Instructions</h2>
        <p>
          In this exercise, write a Python function that calculates the sum of
          two numbers and returns the result. The code should handle both
          positive and negative numbers.
        </p>
        <ol className="list-decimal ml-5 mt-4">
          <li>Create a function named <code>sum</code>.</li>
          <li>
            The function should take two parameters: <code>a</code> and <code>b</code>, which are
            numbers.
          </li>
          <li>Return the sum of <code>a</code> and <code>b</code>.</li>
          <li>Handle edge cases like negative numbers or zero.</li>
        </ol>
      </div>

      {/* Right side: Code Editor and Output */}
      <div className="w-2/3 flex flex-col pl-4 relative">
        {/* Code Editor */}
        <div className="flex-1 bg-customDarkBlue shadow-sm rounded flex flex-col relative">
          {/* File name section fixed at the top */}
          <div className="h-6 w-full z-10 rounded-md">
            <div className="bg-[#062e3d] w-full h-full flex items-center justify-between rounded-md overflow-hidden">
              <div className="flex px-4 items-center bg-customDarkBlue h-full justify-center">
                <p className="font-semibold text-white text-sm">script.py</p>
              </div>
              <div className="flex h-full items-center">
                <button
                onClick={()=>{
                  setDark(!dark)
                  handleEditorMount()
                }}
                className="border-l-[1px] h-full hover:b border-black flex items-center px-4 text-white text-sm font-semibold space-x-4">
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
              theme={dark?"vs-dark":"vs"}
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

          {/* Buttons Section */}
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
        <div className="flex-1 bg-[#001C27] shadow-md rounded-sm overflow-auto mt-2">
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
