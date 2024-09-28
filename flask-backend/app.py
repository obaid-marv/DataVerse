from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import io
import sys

file_path = r'C:\Users\Administrator\Downloads\telecom_churn_clean.csv'
churn_df = pd.read_csv(file_path)

app = Flask(__name__)
CORS(app)

@app.route('/execute', methods=['POST'])
@app.route('/execute', methods=['POST'])
def execute_code():
    data = request.json
    code = data.get('code')

    if not code:
        return jsonify({'output': 'Error: No code provided'}), 400

    output_capture = io.StringIO()
    sys.stdout = output_capture  # Redirect stdout to capture print statements

    try:
        # Compile the code to catch syntax errors early
        compiled_code = compile(code, '<string>', 'exec')

        # Create a local context where the code will be executed
        local_context = {'churn_df': churn_df}

        # Execute the compiled code
        exec(compiled_code, {}, local_context)

        # Capture any printed output
        output = output_capture.getvalue()

        # If the code assigns 'output', we can fetch it from local_context
        result = local_context.get('output', '')

        return jsonify({'output': output + str(result)})

    except SyntaxError as e:
        # Catch and format syntax errors, including incomplete statements
        return jsonify({
            'output': f"Syntax Error: {e.msg} at line {e.lineno}, column {e.offset}"
        }), 400

    except Exception as e:
        # Catch any runtime errors
        return jsonify({'output': f'Error: {str(e)}'}), 400

    finally:
        sys.stdout = sys.__stdout__  # Reset stdout


if __name__ == '__main__':
    app.run(debug=True)
