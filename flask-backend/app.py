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


# import requests
# from bs4 import BeautifulSoup
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd
# import io
# import sys

# # file_path = r'telecom_churn_clean.csv'
# # churn_df = pd.read_csv(file_path)

# app = Flask(__name__)
# CORS(app)

# @app.route('/execute', methods=['POST'])
# @app.route('/execute', methods=['POST'])
# def execute_code():
#     data = request.json
#     code = data.get('code')

#     if not code:
#         return jsonify({'output': 'Error: No code provided'}), 400

#     output_capture = io.StringIO()
#     sys.stdout = output_capture  # Redirect stdout to capture print statements

#     try:
#         # Compile the code to catch syntax errors early
#         compiled_code = compile(code, '<string>', 'exec')

#         # Create a local context where the code will be executed
#         # local_context = {'churn_df': churn_df}

#         # # Execute the compiled code
#         # exec(compiled_code, {}, local_context)

#         # # Capture any printed output
#         # output = output_capture.getvalue()

#         # # If the code assigns 'output', we can fetch it from local_context
#         # result = local_context.get('output', '')

#         # return jsonify({'output': output + str(result)})

#     except SyntaxError as e:
#         # Catch and format syntax errors, including incomplete statements
#         return jsonify({
#             'output': f"Syntax Error: {e.msg} at line {e.lineno}, column {e.offset}"
#         }), 400

#     except Exception as e:
#         # Catch any runtime errors
#         return jsonify({'output': f'Error: {str(e)}'}), 400

#     finally:
#         sys.stdout = sys.__stdout__  # Reset stdout

# def scrape_techcrunch():
#     url = "https://techcrunch.com/tag/artificial-intelligence/"
#     response = requests.get(url)
#     articles_data = []

#     if response.status_code == 200:
#         soup = BeautifulSoup(response.text, "html.parser")
#         articles = soup.find_all('div', class_='wp-block-columns')

#         for article in articles[:5]:
#             title_tag = article.find('h2', class_='wp-block-post-title')
#             title = title_tag.get_text(strip=True) if title_tag else "No title"
#             link = title_tag.find('a')['href'] if title_tag else "No link"

#             description_tag = article.find('div', class_='wp-block-post-excerpt')
#             description = description_tag.get_text(strip=True) if description_tag else "No description"

#             image_tag = article.find('img', class_='wp-post-image')
#             image = image_tag['src'] if image_tag else "No image"

#             articles_data.append({
#                 'title': title,
#                 'link': link,
#                 'description': description,
#                 'image': image
#             })

#     return articles_data

# def scrape_wired():
#     url = "https://www.wired.com/tag/artificial-intelligence/"
#     response = requests.get(url)
#     articles_data = []

#     if response.status_code == 200:
#         soup = BeautifulSoup(response.text, "html.parser")
#         articles = soup.find_all('div', class_='SummaryItemContent-eiDYMl')

#         for article in articles[:5]:
#             title_tag = article.find('h3', class_='SummaryItemHedBase-hiFYpQ')
#             title = title_tag.get_text(strip=True) if title_tag else "No title"

#             link_tag = article.find('a', class_='SummaryItemHedLink-civMjp')
#             link = "https://www.wired.com" + link_tag['href'] if link_tag else "No link"

#             description_tag = article.find('div', class_='SummaryItemRubricWrapper-jjNbqu')
#             description = description_tag.get_text(strip=True) if description_tag else "No description"

#             image_tag = article.find_previous_sibling('div').find('img')
#             image = image_tag['src'] if image_tag else "No image"

#             articles_data.append({
#                 'title': title,
#                 'link': link,
#                 'description': description,
#                 'image': image
#             })

#     return articles_data


# @app.route('/api/news', methods=['GET'])
# def get_news():
#     techcrunch_news = scrape_techcrunch()
#     wired_news = scrape_wired()

#     # Combine both sources into one response
#     all_news = techcrunch_news + wired_news

#     return jsonify(all_news)


# if __name__ == '__main__':
#     app.run(debug=True)
