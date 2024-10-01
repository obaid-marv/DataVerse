from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
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
    sys.stdout = output_capture  

    try:
        compiled_code = compile(code, '<string>', 'exec')

        local_context = {'churn_df': churn_df}


        exec(compiled_code, {}, local_context)

        output = output_capture.getvalue()

        result = local_context.get('output', '')

        return jsonify({'output': output + str(result)})

    except SyntaxError as e:

        return jsonify({
            'output': f"Syntax Error: {e.msg} at line {e.lineno}, column {e.offset}"
        }), 400

    except Exception as e:

        return jsonify({'output': f'Error: {str(e)}'}), 400

    finally:
        sys.stdout = sys.__stdout__  


if __name__ == '__main__':
    app.run(debug=True)
