from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/execute', methods=['POST'])
def execute_code():
    data = request.json
    code = data.get('code')

    try:
        # Execute the code
        result = subprocess.run(['python', '-c', code], capture_output=True, text=True, timeout=10)
        output = result.stdout + result.stderr
        return jsonify({'output': output})
    except subprocess.TimeoutExpired:
        return jsonify({'output': 'Execution timed out'}), 408

if __name__ == '__main__':
    app.run(debug=True)
