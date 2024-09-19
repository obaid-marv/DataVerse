import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript"; // Enable JavaScript syntax highlighting

const CodeExerciseScreen = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRunCode = () => {
    try {
      // Safely evaluate the code and display output
      // You can replace this with any custom logic for running the code securely
      // Note: Using eval has security risks. Use this only for demo purposes.
      const result = eval(code);
      setOutput(result?.toString() || "No output");
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  return (
    <div className="flex h-screen p-4">
      {/* Left side: Exercise Instructions */}
      <div className="w-1/3 bg-gray-100 p-4 shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Exercise Instructions</h2>
        <p>
          In this exercise, write a JavaScript function that calculates the sum
          of two numbers and returns the result. The code should handle both
          positive and negative numbers.
        </p>
        <ol className="list-decimal ml-5 mt-4">
          <li>Create a function named `sum`.</li>
          <li>
            The function should take two parameters: `a` and `b`, which are
            numbers.
          </li>
          <li>Return the sum of `a` and `b`.</li>
          <li>Handle edge cases like negative numbers or zero.</li>
        </ol>
      </div>

      {/* Right side: Code Editor and Output */}
      <div className="w-2/3 flex flex-col pl-4">
        {/* Code Editor */}
        <div className="flex-1 bg-white shadow-md p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Code Editor</h2>
          <CodeMirror
            value={code}
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
          />
          <button
            onClick={handleRunCode}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Run Code
          </button>
        </div>

        {/* Output Display */}
        <div className="mt-4 flex-1 bg-gray-50 shadow-md p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4">Output</h2>
          <pre className="bg-gray-200 p-3 rounded-md">{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodeExerciseScreen;
