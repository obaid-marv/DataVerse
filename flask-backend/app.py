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
def execute_code():
    data = request.json
    code = data.get('code')

    output_capture = io.StringIO()
    sys.stdout = output_capture

    try:
        
        local_context = {'churn_df': churn_df}

        exec(code, {}, local_context)

        output = output_capture.getvalue()  
        result = local_context.get('output', '')  

        return jsonify({'output': output + str(result)})
    except Exception as e:
        return jsonify({'output': f'Error: {str(e)}'}), 400
    finally:
        sys.stdout = sys.__stdout__

if __name__ == '__main__':
    app.run(debug=True)
